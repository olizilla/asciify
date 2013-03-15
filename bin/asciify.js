#!/usr/bin/env node

var asciify = require('../');
var fs = require('fs');
var path = require('path');
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

if (argv.list){

	listFonts();

	return;
}

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

// DO IT!
console.log('');
argv._.forEach(function(arg){
	asciify(arg, argv.font, function(result){
		console.log(result);
	});
});

/* 
 * Write the font list to console
 */
function listFonts(){
	getFonts(function(fonts){
		fonts.forEach(function(font, index){
			console.log(index + ': ' + font);
		});
	});
}

/* 
 * Write examples of all the fonts to console
 */
function showAll(text){

	getFonts(function(fonts){

		fonts.forEach(function(font, index) {
			
			asciify(exampleText, font, function(result){
				console.log(index + ': ' + font);
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
