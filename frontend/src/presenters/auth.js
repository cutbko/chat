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
    }
};


module.exports = Auth;