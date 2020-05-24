const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const configuration = require('./src/config/configuration');

const connect = require('./src/database/connect');

const errorHandlerMiddleware = require('./src/middleware/error-handler.middleware');

const router = require('./src/routes/index.route');

(async () => {
	try {
		await connect();

		const app = express();

		app.set('view engine', 'ejs');
		app.set('views', path.join(__dirname, './src/views'));

		app.use(express.static(path.join(__dirname, './src/static')));
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		app.use('/', router);
		app.use(errorHandlerMiddleware);

		app.listen(configuration.port);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})();
