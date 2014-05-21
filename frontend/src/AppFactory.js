'use strict';

var App = require('./App');
var UI = require('./ui/UI.jsx');
var Router = require('./Router');
var Pubsub = require('pubsub-js');

var api = require('./api')();
var ui = UI({ pubsub: Pubsub });
var presenters = require('./presenters')({ ui: ui, api: api });
var router = new Router({ presenters: presenters });

presenters.auth.router = router;

function AppFactory() {}

AppFactory.prototype.create = function() {
    return new App({
        pubsub: Pubsub,
        router: router,
        api: api,
        ui: ui,
        presenters: presenters
    });
};

module.exports = AppFactory;