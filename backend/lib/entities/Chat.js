'use strict';

var util      = require('util');
var Base      = require('./Base');

function Chat(args) {
    this.setAttrs(args);
}

util.inherits(Chat, Base);

Chat.prototype.getName = function() { return this.name }

module.exports = Chat;