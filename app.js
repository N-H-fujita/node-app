const http = require('http');
const fs = require('fs');

let server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// createServerの処理
function getFromClient (req, res) {
    request = req;
    response = res;
    fs.readFile('./index.html', 'UTF-8', (err, data ) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}
    

