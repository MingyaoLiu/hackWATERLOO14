module.exports = function(app, db) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/phonelist', getAllPhones(db));

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