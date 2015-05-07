var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');
	
request('https://github.com/kurtlocker/lists/blob/master/README.md', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(body), arr = [];
		$('h3').each(function(i,elem) { // build JSON
			if (i > 1) {
				var obj = {};
				obj.n = $(this).text().split(' :')[0].substr(1); // name
				obj.t = $(this).text().split(': ')[1]; // type signature
				obj.d = $(this).next().next().text().split(': ')[1]; // description
				obj.s = $(this).next().next().next().text().split(': ')[1]; // signature Definition
				obj.c = $(this).next().next().next().next().next().text(); // code
				arr.push(obj);
			}
		});
		fs.writeFile('listsjs.json',JSON.stringify(arr), function(err) {
			if (err) throw err;
			console.log('listsjs.json written')
		});
	} else { console.log('error');}
});
