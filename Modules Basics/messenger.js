const http = require('http');
const fs = require('fs')
const os = require('os');

const dir = 'data'

function params(req) {
  let q = req.url.split('?'), result = {};
  if (q.length >= 2) {
    q[1].split('&').forEach((item) => {
      try {
        result[item.split('=')[0]] = item.split('=')[1];
      } catch (e) {
        result[item.split('=')[0]] = '';
      }
    })
  }
  return result;
}

const server = http.createServer(function (req, res) {

  const url = req.url;
  const method = req.method;

  //console.log('Headers:', req.headers)
  if (url === '/' || url.substring(0, 7) == "/?prev=") {
    res.setHeader('Content-Type', 'text/html');
    req.params = params(req);
    const messagePrev = req.params.prev
    let html
    html = `     
    <html lang="en">
      <head>
        <title>HTTP Messenger</title>
      </head>
      <body>
        <h1>HTTP Messenger</h1>
      <ul>`
    if (messagePrev) {
      html += `<li><label>Previous message:</label> ${messagePrev}</li>`
    }
    html += `
            <li><label>URL: </label>${url}</li>
            <li><label>Method: </label>${method}</li>
          </ul>
          <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">Send</button>
          </form>
       </body>
    </html>`
    res.write(html);
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
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.appendFile('data/messages.txt', message + os.EOL, err => {
        res.statusCode = 302;
        res.setHeader('Location', `/?prev=${message}`);

        return res.end();
      });
    });
  }
})

server.listen(3030);



