/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');

// require('./Form.css');

var ChatMessage = React.createClass({
    render: function() {
        var chatMessageCSS = cx({
            'ChatMessage' : true,
            'auth-ChatMessage' : this.props.type == 'auth-ChatMessage'
        });

        return (
            <div className={chatMessageCSS} >
                <ul>
                    <li>
                        <ChatMessage></ChatMessage>
                    </li>
                <ul>
            </div>
        );
    }
});

module.exports = ChatMessage;