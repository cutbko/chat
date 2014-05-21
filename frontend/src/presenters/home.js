'use strict';

function Home(args) {
    if (!args.api) throw "api required";
    if (!args.ui) throw "ui required";

    this.api = args.api;
    this.ui = args.ui;
    this.router = args.router;
}

Home.prototype = {
    index: function() {
        this.ui.setState({
            page: 'home',
            data: {}
        });
    }
};


module.exports = Home;