const http = require('http');
const logger = require('pino')();
const port = process.env.port || 4001;

const server = http.createServer((req, res) => {
  const result = { ok: true };
  logger.info('processing request');

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(result));
});

server.listen(port, () => logger.info(`app listening on port ${port}`));
