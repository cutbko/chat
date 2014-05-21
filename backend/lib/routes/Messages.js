'use strict';

var util = require('util');
var Base = require('./Base');

function Messages(repositories) {
    Messages.super_.call(this, repositories);
}

util.inherits(Messages, Base);

Messages.prototype.list = function(req) {
    return this.run(['messages', 'List'],
                    {
                       chatName: req.params.chatName
                    });
};

Messages.prototype.create = function(req) {
    return this.run(['messages', 'Create'],
                    {
                        chatName:    req.params.chatName,
                        messageData: req.body
                    });
};

module.exports = Messages;