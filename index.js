import http from 'node:http';

const PORT = parseInt(process.env.PORT || '8080', 10);
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      app: 'openship-pilot-demo',
      version: APP_VERSION,
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Hermes and Openship Pilot Demo!',
    app: 'openship-pilot-demo',
    version: APP_VERSION,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Demo app listening on 0.0.0.0:${PORT} (version: ${APP_VERSION})`);
});
