require('./config/config')
const express = require('express')
const mongoose = require('mongoose');
const userController = require('./controllers/user');

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(userController);

mongoose.connect('mongodb://localhost:27017/nodejs-course', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log('Database online')
}).catch(err => {
    throw new Error('Error while connecting to mongo')
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});