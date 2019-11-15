let req = require("request");
const http = require('http');
let querystring = require('querystring')
require('dotenv').config()

const postData = querystring.stringify({
	'msg': 'Hello World!'
});

var options = {
	method: 'POST',
	url: 'https://api.wit.ai/entities',
	headers:
	{
		'Authorization': process.env.BEARER,
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(postData)
	},
};


req = http.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.');
	});
});

req.on('error', (e) => {
	console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();
