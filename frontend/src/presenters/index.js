'use strict';

var auth = require('./auth');
var chats = require('./chats');

function init(args) {
    return {
        auth: new auth(args),
        chats: new chats(args)
    };
}

module.exports = init;