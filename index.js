require('dotenv').config()
const { Wit, interactive } = require('node-wit');


const client = new Wit({
	accessToken: process.env.ACCESS_TOKEN,
});
client.message(('what is the point'), {})
	.then(data => {
		console.log('data: ', JSON.stringify(data));

	})

console.log(client.message('set an alarm tomorrow at 7am'));