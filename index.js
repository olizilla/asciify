/*
   _____     __________________  .___ .___ ________________.___.._.
  /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
 /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
/    |    \ /        \\     \____|   ||   | |     \    \____   | \|
\____|__  //_______  / \______  /|___||___| \___  /    / ______| __
        \/         \/         \/                \/     \/        \/

Install: npm install asciify
Usage: asciify('foo', {font:'3-d'}, function(err, result){console.log(result)})
*/

module.exports = function (text, opts, callback) {

	// Ensure text is a string
	text = text + '';

	if (typeof opts === 'function') { 
		callback = opts; 
		opts = null; 
	}

	if (!opts) {
		opts = { font: 'graffiti' }; 
	} else if (typeof opts === 'string') {
		opts = { font: opts };
	}

	// Default font if not set and ensure string
	opts.font = opts.font || 'graffiti';

	asciify(text, opts.font, function(err, result){ 
		callback(err, result); 
	});

	// Current implementation depends on figlet-js.
	function asciify(text, font, callback){
		var figlet = require('./lib/figlet-js/figlet-node');
		figlet.Figlet.write(text, font, function(err, asciifiedText){
			callback(err, asciifiedText);
		});	
	}
};
