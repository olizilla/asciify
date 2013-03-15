/*
 * asciify
 * https://github.com/olizilla/asciify
 */

var figlet = require('./lib/figlet-js/figlet-node');

module.exports = function (text, opts, callback) {

	if (typeof opts === 'function') { 
		callback = opts; 
		opts = null; 
	}

	if (!opts) { 
		opts = { font: 'graffiti' }; 
	}

	if (!callback){
		// TODO: Do it sync style
	}

	figlet.Figlet.write(text, opts.font, function(asciifiedText){

		callback(asciifiedText);
	});
};
