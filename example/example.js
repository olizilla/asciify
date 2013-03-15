/*
   _____     __________________  .___ .___ ________________.___.._.
  /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
 /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
/    |    \ /        \\     \____|   ||   | |     \    \____   | \|
\____|__  //_______  / \______  /|___||___| \___  /    / ______| __
        \/         \/         \/                \/     \/        \/	        

Usage: node example.js
*/

var asciify = require('../');

asciify('ASCIIFY!', function(result){
	console.log(result);
});

asciify('Got Fonts?', '3-d', function(result){
	console.log(result);
});
