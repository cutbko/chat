'use strict';

var Q           = require('q');
var LIVR        = require('livr');
var Exception   = require('../../Exception');
var Message     = require('../../entities/Message');


function Create(params) {
    this.repositories = params.repositories;
}

Create.prototype = {
    validate: function(data) {
        var rules = {
            user:             [ 'required' ],
            message:          [ 'required' ]
        };
        var validator = new LIVR.Validator(rules);

        var messageData = data.messageData;

        messageData = validator.validate(messageData);

        if (!messageData) {
            var exception = new Exception({
                code: "FORMAT_ERROR",
                fields: validator.getErrors()
            });

            return Q.reject( exception);
        }

        data.messageData = messageData;

        return Q.resolve(data);

    },

    execute: function(data) {
        var message = new Message(data.messageData);

        return this.repositories.messages.create(data.chatName, message);
    }
};

module.exports = Create;