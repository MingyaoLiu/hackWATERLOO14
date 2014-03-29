var cheerio = require('cheerio');

exports.minePhoneEgg = function(http, db) {
	console.log("PhoneEgg Miner getting to work...");

/*	var options = {
		hostname: 'www.phonegg.com',
		path: '/phone/3362-BlackBerry-Z30',
		method: 'GET'
	}

	var page = '';

	var req = http.request(options, function(res) {

		console.log('Got response' + res.statusCode);

		res.on('data', function(chunk) {
			console.log('chunk');
		});

		res.on('end', function() {
			console.log('end');
		});
	});

	req.on('error', function(e) {
		console.log('Problem with request: ' + e.message);
	});*/

	http.get('http://www.phonegg.com/phone/3362-BlackBerry-Z30', function(res) {
		console.log('Got response' + res.statusCode);

		var page = '';
		res.on('data', function(chunk) {
			//console.log(chunk);
			page += chunk;
		});

		res.on('end', function() {
			console.log('end');
			var phone = parsePhoneEgg(page);
			db.phonecollection.insert(phone);
		});

		//console.log(res);
	}).on('error', function(e) {
		console.log('Got error: ' + e.message);
	});

	return {name: "PhoneEgg"};
}

var parsePhoneEgg = function(str) {
	console.log('Parsing html');
	$ = cheerio.load(str);
	var phone = {};
	var category;
	$('#entity tr').each(function() {
		if ($(this).hasClass('header')) {
			phone['name'] = $(this).find('h1').text();
		}
		else if ($(this).hasClass('cat')) {
			category = $(this).find('div').text()
			phone[category] = {};
		}
		else if ($(this).children().length == 2) {
			phone[category][$(this).find('.th').text()] = $(this).find('.l').text();
		}
	});
	return phone;
};