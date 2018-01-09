'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
    /* in-package */
    , clisp = require('../index')
    ;

describe('Elementary arithmetic', () => {
    
    it('+', () => {
        assert.equal(2, clisp['+'](1, 1));
        assert.equal(3, clisp['+'](1, 1, 1));
    });

    it('-', () => {
        assert.equal(0, clisp['-'](1, 1));
        assert.equal(-1, clisp['-'](1, 1, 1)); 
    });

    it('*', () => {
        assert.equal(4, clisp['*'](2, 2));
        assert.equal(8, clisp['*'](2, 2, 2)); 
    });

    it('/', () => {
        assert.equal(4, clisp['/'](8, 2));
        assert.equal(2, clisp['/'](8, 2, 2)); 
    });
    
});