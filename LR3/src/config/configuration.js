module.exports = {
	port: process.env.PORT || 3000,
	database: {
		url: process.env.DATABASE_URL || 'mongodb://admin:admin0@ds161021.mlab.com:61021/heroku_mz1m739x',
	},
};
