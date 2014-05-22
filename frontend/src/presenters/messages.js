'use strict';

function Messages(args) {
    if (!args.api) throw "api required";
    if (!args.ui) throw "ui required";

    this.api = args.api;
    this.ui = args.ui;
    this.router = args.router;
}

Messages.prototype = {
    index: function(chatname) {
        var self = this;

        this.ui.setState({
            page: 'chat',
            data: { name: chatname }
        });

        this.api.messages.index(chatname).then(function(data) {
            self.ui.setState({
                page: 'chat',
                data: { name: chatname, messages: data.messages }
            });
        }, function(err) {
            console.log(err);
        });
    },

    send: function(chatname, data) {
        this.api.messages.create(chatname, data).then( function(){
        }, function(err) {
            console.log(err);
        });
    }
};


module.exports = Messages;