const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let output = {
        name: 'John',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(output));

    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');