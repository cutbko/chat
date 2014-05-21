'use strict';

function Auth(args) {
    if (!args.api) throw "api required";
    if (!args.ui) throw "ui required";

    this.api = args.api;
    this.ui = args.ui;
    this.router = args.router;
}

Auth.prototype = {
    loginForm: function() {
        this.ui.setState({
            page: 'login',
            data: {}
        });
    },

    registerForm: function() {
        this.ui.setState({
            page: 'register',
            data: {}
        });
    },

    restorePassForm: function() {
        this.ui.setState({
            page: 'restore-pass',
            data: {}
        });
    },

    submitLogin: function(data) {
        var self = this;

        this.api.auth.login(data).then( function(userData) {
            self.ui.setState({ page: 'main', data: userData});
        }, function (err) {
            console.log(err);
            self.ui.setState({ page: 'main', data: { error: err}});
        });
    }
};


module.exports = Auth;