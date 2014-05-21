'use strict';

var util = require('util');

var Base = require('./Base');

function Chats(repositories) {
    Chats.super_.call(this, repositories);
}

util.inherits(Chats, Base);

Chats.prototype.list = function(req) {
    return this.run(['chats', 'List'], req.query);
};

Chats.prototype.create = function(req) {
    var chatData = req.body;

    return this.run(['chats', 'Create'], chatData);
};

module.exports = Chats;

