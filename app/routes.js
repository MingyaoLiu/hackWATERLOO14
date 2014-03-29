exports.getAllOS = function(db) {
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

exports.getAllPhones = function(db) {
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