#!/usr/bin/env node
/*
   _____     __________________  .___ .___ ________________.___.._.
  /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
 /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
/    |    \ /        \\     \____|   ||   | |     \    \____   | \|
\____|__  //_______  / \______  /|___||___| \___  /    / ______| __
        \/         \/         \/                \/     \/        \/

Install: npm install -g asciify
Usage: asciify "my prose"
*/

var asciify = require('../');
var fs = require('fs');
var path = require('path');
var pad = require('pad');
var argv = require('optimist')
	.usage('Plain text awesomizer.\nUsage: $0 "your text here"')
    .alias('l', 'list')
    .describe('l', 'List the fonts')
    .alias('a', 'all')
    .describe('a', 'SHOW ALL THE FONTS!')
    .alias('f', 'font')
    .describe('f', 'Font to use for asciification')
    .default('f', 'graffiti')
    .check(function(argv){
    	if(!argv.list && !argv.all && argv._.length === 0) { 
    		throw 'Specify some text to asciify or -l or -a'
    	}
    })
    .argv;

// Show font list
if (argv.list){
	listFonts();
	return;
}

// Show text in all the fonts
if (argv.all){	
	var exampleText = 'Asciify!';          // Default

	if (argv._.length > 0){                // Your argz, zay are muddled.
		exampleText = argv._.join(' ');
	}
	if (typeof argv.all === 'string'){     // Excellent
		exampleText = argv.all;
	}

	showAll(exampleText);
	return;
}

// Do a regular asciification.
console.log('');
argv._.forEach(function(arg){
	asciify(arg, argv.font, function(err, result){
		if (err) {
			return console.error(err);
		}
		console.log(result);
	});
});

/* 
 * Write the font list to console
 */
function listFonts(){
	getFonts(function(fonts){

		var padSize = ('' + fonts.length).length;

		fonts.forEach(function(font, index){
			console.log(pad(padSize, index+1, '0') + ': ' + font);
		});
	});
}

/* 
 * Write examples of all the fonts to console
 */
function showAll(text){

	getFonts(function(fonts){

		var padSize = ('' + fonts.length).length;

		fonts.forEach(function(font, index) {
			
			asciify(exampleText, font, function(err, result){
				console.log(pad(padSize, index+1, '0') + ': ' + font);
				console.log(result);
				console.log('');
			});
		});
	});
}

/*
 * Privide the callback with the list of fontnames, sans file extention.
 */
function getFonts(callback){
	var fontsDir = path.resolve(__dirname, '..', 'lib', 'figlet-js', 'fonts');
	
	fs.readdir(fontsDir, function(err, files){
		
		var fonts = files.map(function(file){
			return file.slice(0, file.length - 4); // chop off the '.flf' extension
		});		

		callback(fonts);
	});
}
