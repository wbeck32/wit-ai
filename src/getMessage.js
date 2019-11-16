const superagent = require('superagent');

superagent.get('https://api.wit.ai/message')
	.query({ q: 'will you fuck me?' })
	.set('Authorization', `${process.env.BEARER}`)
	.end((err, response) => {
		response.status === 200 ? console.log(response.body) : console.log('failure: ', err)
	})
