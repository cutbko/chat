'use strict';

var util      = require('util');
var Base      = require('./Base');

function Chat(args) {
    if (!args.name) throw 'Name required';
    this.name = args.name;

    Chat.super_.call(this, args);
}

util.inherits(Chat, Base);

Chat.prototype = {
    getName: function() { return this.name }
}

module.exports = Chat;