import http from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
      }
      break;
    case '/test': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Test!\n');
    }
  }
});

server.listen(port, hostname, () => {
  console.warn(`Server running at http://${hostname}:${port}/`);
});
