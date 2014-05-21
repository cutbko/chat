'use strict';

var Chats    = require('./Chats');
var Messages = require('./Messages');

function init(db) {
    return {
        chats:    new Chats(db),
        messages: new Messages(db)
    };
}

module.exports = init;