/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

require('./UI.css');

var PAGES = {
    'login'        : require('./pages/Login.jsx') ,
    'chats'         : require('./pages/Chats.jsx'),
    'chat'         : require('./pages/Chat.jsx')
};

var LAYOUTS = {
    'main' : require('./layouts/MainLayout.jsx')
};

var PagesPerLayouts = {
    'login'        : { layout: 'main' },
    'chats'         : { layout: 'main' },
    'chat'         : { layout: 'main' }
};

var UI = React.createClass({
    getInitialState: function() {
        return { page: 'login', data: {} };
    },

    render: function() {
        var page = PAGES[this.state.page];

        var layoutOptions = PagesPerLayouts[this.state.page];

        var layout = LAYOUTS[ layoutOptions.layout ];

        return(
            <div className="UI">
                <layout addition={layoutOptions.addition}>
                    <page pubsub={this.props.pubsub} data={this.state.data}/>
                </layout>
            </div>
        );
    }
});


module.exports = UI;
