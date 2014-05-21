'use strict';

var Chats = require('./chats.js');

module.exports = function() {
    return  {
        chats: new Chats()
    };
};