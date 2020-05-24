const mongoose = require('mongoose');

const configuration = require('../config/configuration');

module.exports = () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(configuration.database.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		mongoose.connection.once('open', resolve);
		mongoose.connection.on('error', reject);
	});
};
