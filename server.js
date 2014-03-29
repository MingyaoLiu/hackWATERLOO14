var http = require('http');
var express = require('express');
var events = require('events');
var mongojs = require('mongojs');
var routes = require('./app/routes');
var phones = require('./data_repo/phone_data');

var app = express();
var db = mongojs('mydb', ['preferences', 'phonecollection']);

app.use(express.json());
app.use(app.router);

app.get('/public/index.html', function(req, res){
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

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

app.get('/os', routes.getAllOS(db));
app.get('/phonelist', routes.getAllPhones(db));


