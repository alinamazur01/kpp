const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoScheme = new Schema(
	{
		description: { type: String, require: true, minlength: 3 },
		completed: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Todo', todoScheme);
