const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
	let token = req.get('Authorization') || req.headers['authorization'] || '';
	if (token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}

	jwt.verify(token, process.env.SEED, (err, decoded) => {
		if (err) {
			return res.status(401).json({
				ok: true,
				err: 'Token provided is invalid.'
			});
		}

		req.user = decoded.user;
		next();
	});
};

module.exports = { verifyToken };
