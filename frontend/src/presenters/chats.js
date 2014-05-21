'use strict';

function Chats(args) {
    if (!args.api) throw "api required";
    if (!args.ui) throw "ui required";

    this.api = args.api;
    this.ui = args.ui;
    this.router = args.router;
}

Chats.prototype = {
    index: function() {
        this.ui.setState({
            page: 'chats',
            data: {}
        });

        this.api.chats.index().then(function(data) {
            this.ui.setState({
                page: 'chats',
                data: data
            });
        }, function(err) {
            console.log(err);
        });
    },

    createChat: function(data) {
            console.log(data);
        this.api.chats.create(data).then( function(){
            location.hash='chats/' + data.name;
        }, function(err) {
            console.log(err);
        });
    }
};


module.exports = Chats;