var test = require('tap').test;
var asciify = require('../');

test("Check it works at all", function (t) {

	t.plan(2);

	// A simple line-noise style comparison of asciified result with raw string
	asciify('A', function(res){
		t.equal(res, '   _____   \n  /  _  \\  \n /  /_\\  \\ \n/    |    \\\n\\____|__  /\n        \\/ \n', 'A should have been asciified with the graphiti font');
	});

	// A crazyballs multiline hack style comparison, so the user may have some idea what's being compared. Neither is that readable.
	asciify('B', '3-d', function(res){
		t.equal(
			res,
			multilinehack(function(){/*
 ******  
/*////** 
/*   /** 
/******  
/*//// **
/*    /**
/******* 
///////  

*/}),
			'B should have been rendered in the 3-d figlet font'
		);
	});
});


function multilinehack(mess){
	// Crazyballs multiline hack courtesy of: https://github.com/isaacs/node-tap/blob/69d721718acc56b5c8ae5875cf8d9bf53f7d5016/bin/tap.js#L58
	return mess.toString().split(/\n/).slice(1, -1).join("\n");
}
