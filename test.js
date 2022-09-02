function greeting (greet) {
  console.log(greet);
}
greeting('hello')
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('nodejstest.html', (err, html) => {
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end('Hello World');
  });
  server.listen(port, hostname, () => {
    console.log('Server started on port' + port);
  });

});
