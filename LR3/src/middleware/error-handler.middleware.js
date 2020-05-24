const HttpError = require('../errors/http.error');

module.exports = (error, req, res, next) => {
	const statusCode = error instanceof HttpError ? error.statusCode : 500;
	const message = error.message;

	res.status(statusCode).json({
		message,
		status: 'error',
		statusCode,
	});
};
