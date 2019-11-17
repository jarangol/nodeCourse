const mongoose = require('mongoose');
const logger = require('./winston');

mongoose.connect(process.env.DB_URL, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(logger.info('Hello Database online'))
	.catch(err => {
		logger.error('Error while connecting to mongo');
	});

module.exports = mongoose;
