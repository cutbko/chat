'use strict';

var Q    = require('q');
var Exception = require('../../Exception');

function List(params) {
    this.repositories = params.repositories;
}

List.prototype = {
    validate: function(data) {
        return Q.resolve(data);
    },

    execute: function(data) {
        return this.repositories.messages.list(data.chatName).then(function(messages) {
            var messagesData = [];

            messages.forEach( function(message) {
                messagesData.push(message.toHash());
            } );

            return Q.resolve( {messages: messagesData} );
        });
    }
};

module.exports = List;