var http = require('http');
var express = require('express');
var events = require('events');
var mongojs = require('mongojs');
var phones = require('./data_repo/phone_data');

var app = express();
var db = mongojs('mydb', ['preferences', 'phonecollection']);

var port = process.env.PORT || 3000; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.json());
	app.use(app.router);
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
var routes = require('./app/routes')(app, db); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app

var osList = [
	{
		name: "Android",
		version: {
			company: "Google",
			opensource: "Yes"
		}
	},
	{
		name: "iOS"
	},
	{
		name: "Windows Phone"
	},
	{
		name: "BlackBerry"
	}
];

var osInDb;


db.phonecollection.insert(osList, function(err, saved) {
	if (err || !saved) {
		console.log("Record is not saved.");
	} else {
		console.log("Record is saved.");
	}
});

/*db.phonecollection.insert(phones.phone_data, function(err, saved) {
	if (err || !saved) {
		console.log("Record is not saved.");
	} else {
		console.log("Record is saved.");
	}
});*/




