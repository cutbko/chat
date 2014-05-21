var mongojs   = require('mongojs');
var Q         = require('q');
var Chat      = require('../entities/Chat');
var Exception = require('../Exception');

function Chats(db) {
    db.chats.ensureIndex( { name: 1 }, { unique: true } );
    this.db = db;
}

Chats.prototype =  {
    list: function() {
        var d = Q.defer();

        this.db.chats.find({}, function(error, chatsData) {
            if (error) {
                d.reject(error);
            }
            var chats = [];
            if(chatsData) {
                chatsData.forEach( function(chatData) {
                    var chat = new Chat(chatData);
                    chat.id  = chat._id.toString();

                    chats.push(chat);
                } );
            }

            d.resolve(chats);
        });
        return d.promise;
    },

    create: function(chat) {
        var d = Q.defer();

        var chatData = chat.toHash();

        this.db.chats.insert(chatData, function(error, savedChatData) {
            if (error) {
                if (error.code != 11000) d.reject(error);

                d.reject(new Exception({
                    code: "NOT_UNIQUE",
                    fields: {email: "NOT_UNIQUE"}
                }));

                return;
            }

            d.resolve({});
        });

        return d.promise;
    }
}

module.exports = Chats;