/*
   _____     __________________  .___ .___ ________________.___.._.
  /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
 /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
/    |    \ /        \\     \____|   ||   | |     \    \____   | \|
\____|__  //_______  / \______  /|___||___| \___  /    / ______| __
        \/         \/         \/                \/     \/        \/

Install: npm install asciify
Usage: 
	var asciify = require('asciify');
	asciify('Whoa', {font:'3-d'}, function(err, result){console.log(result)});
*/
var path = require('path');
var fs = require('fs');

module.exports = function (text, opts, callback) {

	// Ensure text is a string
	text = text + '';

	if (typeof opts === 'function') { 
		callback = opts; 
		opts = null; 
	}

	// Fix up the opts. Default font is graffiti.
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = { font: opts };
	}

	opts.font = opts.font || 'graffiti';

	if (typeof opts.font !== 'string') {
		callback('opts.font should be a font name string')
	}

	asciify(text, opts.font, function (err, result) {
		callback(err, result); 
	});

	// Current implementation depends on figlet-js.
	function asciify (text, font, callback) {
		var figlet = require('./lib/figlet-js/figlet-node');
		figlet.Figlet.write(text, font, function (err, asciifiedText) {
			callback(err, asciifiedText);
		});	
	}
};

/*
 * Provide the callback with array of font names, sans file extension.
 */
module.exports.getFonts = function (callback) {

	var fontsDir = path.resolve(__dirname, 'lib', 'figlet-js', 'fonts');

	// No caching, just reading. Caller should cache if they need to.
	fs.readdir(fontsDir, function (err, files) {

		if (err) { return callback(err); }
		
		var fonts = files.map(function (file) {
			return file.slice(0, file.length - 4); // chop off the '.flf' extension
		});		

		callback(err, fonts);
	});
};
