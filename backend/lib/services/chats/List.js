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
        return this.repositories.chats.list().then(function(chats) {
            var chatsData = [];

            chats.forEach( function(chat) {
                chatsData.push(chat.toHash());
            } );

            console.log('serv', chatsData);

            return Q.resolve( {chats: chatsData} );
        });
    }
};

module.exports = List;