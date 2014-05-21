'use strict';

var Chats    = require('./Chats');
var Messages = require('./Messages');

function init(services) {
    return {
        chats:    new Chats(services),
        messages: new Messages(services)
    };
}

module.exports = init;