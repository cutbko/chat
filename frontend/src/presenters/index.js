'use strict';

var auth = require('./auth');
var chats = require('./chats');
var messages = require('./messages');

function init(args) {
    return {
        auth: new auth(args),
        chats: new chats(args),
        messages: new messages(args)
    };
}

module.exports = init;