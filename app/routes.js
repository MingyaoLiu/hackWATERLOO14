module.exports = function(app, db) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/phonelist', getAllPhones(db));
	app.get('/specslist', getAllSpecs(db));

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};

var getAllPhones = function(db) {
	return function(req, res) {
		db.phonecollection.find(function (err, docs) {
			if (err) {
				console.log("Records cannot be retrieved.");
			} else {
				console.log("Records can be retrieved.");
				//res.write(JSON.stringify(docs));
				res.json(docs);
				res.end();
			}
		});
	}
}

var getAllSpecs = function(db) {
	return function(req, res) {
		db.phonecollection.find().limit(1, function (err, docs) {
			if (err) {
				console.log("Records cannot be retrieved.");
			} else {
				console.log("Records can be retrieved.");
				var keys = [];
				for (var key in docs[0]) keys.push(key);
				keys.splice(0, 1);
				keys.sort();
				res.json(keys);
				res.end();
			}
		});
	}
}