'use strict';

var Chats    = require('./Chats');

function init(services) {
    return {
        chats:    new Chats(services)
    };
}

module.exports = init;