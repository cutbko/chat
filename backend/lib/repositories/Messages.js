var mongojs   = require('mongojs');
var Q         = require('q');
var Message   = require('../entities/Message');
var Exception = require('../Exception');

function Messages(db) {
    this.db = db;
}

Messages.prototype =  {
    list: function(chatName) {
        var d = Q.defer();

        this.db.chats.findOne({name:chatName}, function(error, chatData) {
            if (error) {
                d.reject(error);
            }
            var messages = [];
            if(chatData && chatData.messages) {
                chatData.messages.forEach( function(messageData) {
                    var message = new Message(messageData);

                    messages.push(message);
                } );
            }

            d.resolve(messages);
        });
        return d.promise;
    },

    create: function(chatName, message) {
        var d = Q.defer();

        message.dateCreated = new Date();
        var messageData = message.toHash();

        this.db.chats.update({ name:chatName },
                             { $push: { messages: messageData } },
                             function(error, savedMessageData) {
                                if (error) {
                                    d.reject(error);

                                    return;
                                }

                                d.resolve({});
        });

        return d.promise;
    }
}

module.exports = Messages;