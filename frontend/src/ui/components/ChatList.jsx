/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');

// require('./Form.css');

var ChatList = React.createClass({
    createListItems: function() {
        var self = this;


    },

    render: function() {
        var chatListCSS = cx({
            'ChatList' : true,
            'auth-ChatList' : this.props.type == 'auth-ChatList'
        });

        return (
            <div className={chatListCSS} >
                <ul>
                    <li>
                        <p>Blah</p>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = ChatList;