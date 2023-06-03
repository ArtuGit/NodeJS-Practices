const http = require('http');

let requestAmount = 0;

const server = http.createServer((req, res) => {
    // Set the response HTTP headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send a response to the client
    res.end(`requestAmount = ${requestAmount++}`);
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
