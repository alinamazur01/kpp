const HttpError = require('../errors/http.error');

const validateByShema = (shema, field) => {
	return (req, res, next) => {
		const { error } = shema.validate(req[field]);

		const isValid = !error;

		if (!isValid) {
			const { details } = error;
			const message = details.map((detail) => detail.message).join('');
			throw new HttpError(400, message);
		}

		next();
	};
};

exports.validateBodyByShema = (shema) => validateByShema(shema, 'body');
exports.validateParamsByShema = (shema) => validateByShema(shema, 'params');
exports.validateQueryByShema = (shema) => validateByShema(shema, 'query');
