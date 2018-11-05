const split = require('split2');
const pump = require('pump');
const through = require('through2');

const cloudwatch = through.obj((chunk, enc, cb) => {
  console.log('send to cloudwatch => ', chunk);
  cb();
});

pump(process.stdin, split(JSON.parse), cloudwatch);
