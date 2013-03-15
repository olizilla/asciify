/*
   _____     __________________  .___ .___ ________________.___.._.
  /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
 /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
/    |    \ /        \\     \____|   ||   | |     \    \____   | \|
\____|__  //_______  / \______  /|___||___| \___  /    / ______| __
        \/         \/         \/                \/     \/        \/

https://github.com/olizilla/asciify
*/

module.exports = function (text, opts, callback) {

	if (typeof opts === 'function') { 
		callback = opts; 
		opts = null; 
	}

	if (!opts) {
		opts = { font: 'graffiti' }; 
	}

	if (typeof opts === 'string') {
		opts = { font: opts };
	}

	asciify(text, opts.font, function(result){ 
		callback(result); 
	});

	// Current implementation depends on figlet-js.
	function asciify(text, font, callback){
		var figlet = require('./lib/figlet-js/figlet-node');
		figlet.Figlet.write(text, opts.font, function(asciifiedText){
			callback(asciifiedText);
		});	
	}
};
