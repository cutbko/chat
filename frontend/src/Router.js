'use strict';

var Backbone = require('backbone');

function Router(args) {
    var self = this;

    var presenters = args.presenters;

    var BackboneRouter = Backbone.Router.extend({
        routes: {
            ''             : 'login',
            'login'        : 'login',
            'chats'         : 'chats',
            'chats/:chatname' : 'chat'
        },

        login: function() {
            presenters.auth.loginForm();
        },

        chats: function() {
            presenters.chats.index();
        },

        chat: function(chatname) {
            presenters.messages.index(chatname);
        }
    });

    self.backboneRouter = new BackboneRouter();
}

Router.prototype = {
    start: function() {
        Backbone.history.start();
    },

    navigate: function(fragment, options) {
        options = options || {
            trigger: true
        };
        this.backboneRouter.navigate(fragment, options);
    }
};

module.exports = Router;