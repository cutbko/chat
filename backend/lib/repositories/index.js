'use strict';

var Chats   = require('./Chats');

function init(db) {
    return {
        chats:    new Chats(db)
    };
}

module.exports = init;