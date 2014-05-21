'use strict';

var Q           = require('q');
var LIVR        = require('livr');
var Exception   = require('../../Exception');
var Chat        = require('../../entities/Chat');


function Create(params) {
    this.repositories = params.repositories;
}

Create.prototype = {
    validate: function(data) {
        var rules = {
            name:             [ 'required', {max_length: 30} ]
        };
        var validator = new LIVR.Validator(rules);

        data = validator.validate(data);

        if (!data) {
            var exception = new Exception({
                code: "FORMAT_ERROR",
                fields: validator.getErrors()
            });

            return Q.reject( exception);
        }

        return Q.resolve(data);

    },

    execute: function(data) {
        var chat = new Chat(data);

        return this.repositories.chats.create(chat);
    }
};

module.exports = Create;