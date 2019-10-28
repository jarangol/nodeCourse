const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let output = {
        name: 'John',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(output));

    res.end();
});


app.get('/data', (req, res) => {
    res.write("Hello data");
    res.end();
});

app.listen(3000, () => {
    console.log("Listening to the port 3000");
});