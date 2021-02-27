const http = require('http');
const fs = require('fs')
const os = require('os');

const server = http.createServer(function (req, res) {

  const url = req.url;
  const method = req.method;

  //console.log('Headers:', req.headers)

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      `<body>
          <h1>HTTP Messenger</h1>
          <ul>
            <li><label>URL: </label>${url}</li>
            <li><label>Method: </label>${method}</li>
          </ul>
          <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">Send</button>
          </form>
       </body>`
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log('Chunk:', chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      console.log('Body Raw:', body);
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.appendFile('data/messages.txt', message + os.EOL, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

})

server.listen(3030);



