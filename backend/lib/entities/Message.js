'use strict';

var util      = require('util');
var Base      = require('./Base');

function Message(args) {
    if (!args.user) throw 'user required';
    if (!args.text) throw 'text required';
    this.user = args.user;
    this.text = args.text;
}

util.inherits(Chat, Base);

Message.prototype = {
    getUser: function() { return this.user },
    getText: function() { return this.text }
}

module.exports = Message;