/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Panel = require('../components/Panel/Panel.jsx');
var Header = require('../components/Panel/PanelHeader.jsx');
var Body = require('../components/Panel/PanelBody.jsx');

var Chats = React.createClass({

    render: function() {
        return (
            <Panel>
                <Header title='Chats' />

                <Body>
                    This is Body!
                </Body>
            </Panel>
        );
    }
});

module.exports = Chats;

