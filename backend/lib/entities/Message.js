'use strict';

var util      = require('util');
var Base      = require('./Base');

function Message(args) {
    this.setAttrs(args);
}

util.inherits(Message, Base);

module.exports = Message;