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
    'auth' : require('./layouts/AuthLayout.jsx'),
    'main' : require('./layouts/MainLayout.jsx')
};

var PagesPerLayouts = {
    'login'        : { layout: 'auth' , addition: { class: 'medium' } },
    'home' : { layout: 'main' , addition: {} }
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
