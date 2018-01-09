'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    ;

let clisp = {};

let coll = noda.requireDir('.', [ 'bin', 'test', 'index' ]);
for (let name in coll) {
    Object.assign(clisp, coll[name]);
}

module.exports = clisp;