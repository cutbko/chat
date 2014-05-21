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
    }
};


module.exports = Chats;