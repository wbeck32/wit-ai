require('dotenv').config()
const superagent = require('superagent');


(async () => {
	const res = await superagent.get('https://api.wit.ai/message')
	console.log('res: ', res);
})

// req()


// .get('https://api.wit.ai/message')
// 	.query({ q: 'the point' })
// 	.then(res => {
// 		console.log(res)
// 	})


// (err, res) => {
// 	.set({ headers: { 'Authorization': auth } })
// 	.end((err, res) => {
// 		if (err) { return console.log(err); }
// 		console.log(res.body.url);
// 		console.log(res.body.explanation);
// 	});




// var options = {
// 	method: 'GET',
// 	url: 'https://api.wit.ai/message',
// 	path: '?q="point"',
// 	headers:
// 	{
// 		'Authorization': process.env.BEARER,
// 	},
// };


// req = https.request(options, (res) => {
// 	console.log(`STATUS: ${res.statusCode}`);
// 	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
// 	res.setEncoding('utf8');
// 	res.on('data', (chunk) => {
// 		console.log(`BODY: ${chunk}`);
// 	});
// 	res.on('end', () => {
// 		console.log('No more data in response.');
// 	});
// });

// req.on('error', (e) => {
// 	console.error(`problem with request: ${e.message}`);
// });

// // write data to request body
// req.end();
