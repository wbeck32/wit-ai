var request = require("request");
const { Wit, log } = require('node-wit');
require('dotenv').config()



var options = {
	method: 'POST',
	url: 'https://api.wit.ai/entities',
	headers:
	{
		'Authorization': '',
		'Content-Type': 'application/json',
	},
	data: {
		"doc": "An imaginary city that I thought I did liked",
		"id": "i_did_liked_my_imaginary_favorite_city"

	}
};

request(options, function (error, response, body) {
	console.log('options: ', options);
	// console.log('body: ', body);
	// console.log('response: ', response);
	if (error) throw new Error(error);

	console.log('body: ', body);
});
