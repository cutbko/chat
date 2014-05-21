'use strict';

var auth = require('./auth');
var home = require('./home');

function init(args) {
    return {
        auth: new auth(args),
        home: new home(args)
    };
}

module.exports = init;