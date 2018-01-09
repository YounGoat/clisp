#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
	
	/* in-package */
	, clisp = noda.inRequire('index')
	;

const operator = process.argv[2];
const argv = process.argv.slice(3);

if (!operator || operator == '?') {
	console.log(noda.inRead('help.txt', 'utf8'));
}
else if (operator == '@') {
	console.log();
	console.log(`clisp (version ${noda.currentPackage().version}), operators:`);
	console.log();
	Object.keys(clisp).forEach( name => console.log(`    ${name}`) );
	console.log();
}
else if (!clisp[operator]) {
	console.log(`operator not supported: ${operator}`);
	console.log(`Run "clisp @" for available operators.`);
}
else {
	console.log(clisp[operator].apply(null, argv));
}