const logger = require('../config/winston');
const requestIp = require('request-ip');

let logRequest = (req, res, next) => {
	const clientIp = requestIp.getClientIp(req);
	logger.info(`IP:${clientIp}, sort:${req.url}`);
	next();
};
module.exports = { logRequest };
