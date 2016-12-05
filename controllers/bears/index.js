var bears = require('./bears');

module.exports = function(app){

app.use(function (req, res, next) {
	console.log('Something is Happening');
	next(); // // middleware to use for all requests
})

app.get('/', bears.getIndex); // get the index

app.get('/bears', bears.getBears); // get all the bears

app.post('/bears', bears.postBears); // create bears

app.get('/bears/:bear_id', bears.singleBear); // get bears with id

app.put('/bears/:bear_id', bears.updateBear); // update single Bear

app.delete('/bears/:bear_id', bears.deleteBears); // deleting single Bear

}
