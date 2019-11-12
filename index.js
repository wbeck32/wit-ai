const { Wit, log } = require('node-wit');
require('dotenv').config()


const client = new Wit({
	accessToken: process.env.ACCESS_TOKEN,
	logger: new log.Logger(log.VERBOSE) // optional
});
