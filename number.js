'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , papply = require('jinang/papply')
    
    /* in-package */
    ;

function arithmetic(calculator, args, init) {
    let ret = (arguments.length == 3) ? init : args[0];
    ret = parseFloat(ret);
    for (var i = 1; i < args.length; i++) {
        ret = calculator(ret, parseFloat(args[i]));
    }
    return ret;
}

function plus() {
    return arithmetic((a, b) => a + b, arguments);
}

function minus() {
    return arithmetic((a, b) => a - b, arguments);
}

function multiply() {
    return arithmetic((a, b) => a * b, arguments);
}

function devide() {
    return arithmetic((a, b) => a / b, arguments);
}

module.exports = {
    '+': plus,
    '-': minus,
    '*': multiply,
    '/': devide,

    plus,
    minus,
    multiply,
    devide,
};