const express = require('express');

require('dotenv').config();
require('./database/connection');
const logger = require('./config/winston');

const app = express();

app.use(require('./routes/routes'));

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    logger.info(`Listening to port ${port}`);
});