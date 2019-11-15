const superagent = require('superagent');


superagent.get('https://api.nasa.gov/planetary/apod')
	.query({ api_key: "DEMO_KEY", date: '2019-11-14' })
	.end((err, res) => {
		if (err) { return console.log(err); }
		console.log(res.body.url);
		console.log(res.body.explanation);
	});
