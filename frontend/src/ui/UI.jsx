/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

require('./UI.css');

var PAGES = {
    'login'        : require('./pages/Login.jsx') ,
    'home'         : require('./pages/Home.jsx')
};

var LAYOUTS = {
    'main' : require('./layouts/MainLayout.jsx')
};

var PagesPerLayouts = {
    'login'        : { layout: 'main' },
    'home'         : { layout: 'main' }
};

var UI = React.createClass({
    getInitialState: function() {
        return { page: 'home', data: {} };
    },

    render: function() {
        var page = PAGES[this.state.page];

        var layoutOptions = PagesPerLayouts[this.state.page];

        var layout = LAYOUTS[ layoutOptions.layout ];

        return(
            <div className="UI">
                <layout addition={layoutOptions.addition}>
                    <page pubsub={this.props.pubsub} />
                </layout>
            </div>
        );
    }
});


module.exports = UI;
