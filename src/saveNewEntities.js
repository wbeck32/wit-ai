import entities from './static/entities'
const superagent = require('superagent');

// superagent.post('https://api.wit.ai/samples')
// 	.send(entities)
// 	.set('Authorization', `${process.env.BEARER}`)
// 	.end((err, response) => {
// 		response.status === 200 ? console.log(response.body) : console.log('failure: ', err)
// 	})


(async () => {
	console.log(1)
	const res = await superagent.post('https://api.wit.ai/samples')
		.send(entities)
		.set('Authorization', `${process.env.BEARER}`)
	console.log('res: ', res)
	return;

})