const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Paolo rOdriGuez',
        year: 2019
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        year: 2019
    });
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});