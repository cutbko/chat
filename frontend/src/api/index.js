'use strict';

var Chats = require('./chats.js');
var Messages = require('./messages.js');

module.exports = function() {
    return  {
        chats: new Chats(),
        messages: new Messages()
    };
};