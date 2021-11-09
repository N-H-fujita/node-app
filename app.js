const http = require('http');

let server = http.createServer(
    (request,response) => {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="utf-8">
                <title>Hello</title>
            </head>
            <body>
                <h1>Hello Node.js!</h1>
                <p>This is Node.js sample page.</p>
                <p>これはNode.jsのサンプルページです。</p>
            </body>
            </html>
        `);
        response.end();
    }
);
server.listen(3000);