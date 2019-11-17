const path = require('path');

const express = require('express');
require('dotenv').config();

require('./config/mongoose');
const logger = require('./config/winston');

const app = express();

app.use(require('./routes/routes'));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    logger.info(`Listening to port ${port}`);
});