'use strict';

var React = require('react');

function App(args) {
    if (!args.ui) throw '"ui" required';
    if (!args.pubsub) throw '"pubsub" required';
    if (!args.router) throw '"router" required';

    this.ui = args.ui;
    this.pubsub = args.pubsub;
    this.router = args.router;
    this.api = args.api;
    this.presenters = args.presenters;
}

App.prototype = {
    run: function() {
        this._renderUI();

        var self = this;

        // pubsub subscribe

        this.pubsub.subscribe('submitLogin', function(data) {
            self.presenters.auth.submitLogin(data);
        });

        this.router.start();
    },

    _renderUI: function() {
        React.renderComponent(this.ui, document.getElementById('content'));
    }
};
module.exports = App;