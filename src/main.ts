import http from 'node:http';
import * as fs from 'fs';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/data':
      {
        fs.readFile('./mock/data.json', { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error');
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(data);
        });
      }
      break;
    case '/test': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Test!\n');
    }
  }
});

server.listen(port, () => {
  console.warn(`*** Server running at port ${port} ***`);
});
