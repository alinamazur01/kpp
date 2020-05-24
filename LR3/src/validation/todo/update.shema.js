const Joi = require('@hapi/joi');

module.exports = Joi.object({
	description: Joi.string().min(3),
	completed: Joi.boolean(),
});
