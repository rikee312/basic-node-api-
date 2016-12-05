var path = require('path').resolve();
var Bear = require(path + '/models/bears');

module.exports = {
	//getting the index

	getIndex: function (req, res) {
		res.json({message: 'This is the index'});
	},

	// creating a bear

	postBears: function (req, res) {
		var bear = new Bear(); // create a new instance of the Bear model
		bear.name = req.body.name;  // set the bears name (comes from the request)

		bear.save(function (err) {
			if (err) {
				res.send(err);
			}
			res.json({message: 'Bear Created'});
		});
	},

	//getting the list of bears

	getBears: function (req, res) {
		Bear.find(function (err, bears) {
			if (err) {
				res.send(err);
			}
			res.json(bears);
		});
	},

	//getting a single bear by id

	singleBear: function (req, res) {
		Bear.findById(req.params.bear_id, function (err, bear) {
			if (err) {
				res.send(err);
			}
			res.json(bear);
		});
	},

	// Updateing single bear

	updateBear: function (req, res) {

		Bear.findById(req.params.bear_id, function (err, bear) {
			if (err) {
				res.send(err);
			}
			bear.name = req.body.name;

			//save the bear

			bear.save(function (err) {
				if (err) {
					res.send(err);
				}
				res.json({message: "Bear updated!"});
			});
		});
	},

	// delete bears

	deleteBears: function (req, res) {
		Bear.remove({
			_id: req.params.bear_id // id to get and delete bear
		},function (err, bear) {
			if (err) {
				res.send(err)
			}
			res.json({messsage:"Successfully deleted!"});
		});

	}


};
