/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Panel = require('../components/Panel/Panel.jsx');
var Header = require('../components/Panel/PanelHeader.jsx');
var Body = require('../components/Panel/PanelBody.jsx');
var Footer = require('../components/Panel/PanelFooter.jsx');

var Button = require('../components/Button.jsx');
var Input = require('../components/Input.jsx');

var Chats = React.createClass({
    getInitialState: function() {
        return { message:'' };
    },

    createMessagesList: function() {
        var data = this.props.data;

        var listItems = [];

        (data.messages ? data.messages : []).forEach(function(message) {
            listItems.push(
                <li>
                    <div className=''>
                        <p>{message.user} at {message.dateCreated}</p>
                        <p>{message.message}</p>
                    </div>
                </li>
            );
        });

        return listItems;
    },

    handleMessageChange: function(e) {
        this.setState({ message: e.target.value });
    },

    handleSendMessage: function() {
        this.props.pubsub.publish('sendMessage', { message: this.state.message });
    },

    render: function() {
        var listItems = this.createMessagesList();
        var data = this.props.data;

        return (
            <Panel>
                <Header title={data.name} />

                <Body>
                    <ul className='list-group'>
                        {listItems}
                    </ul>
                </Body>

                <Footer>
                    <div className='row'>
                        <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 '>
                            <Input placeholder='Type your message...' onChange={this.handleMessageChange}/>
                        </div>

                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <Button value='Send' style='primary' onClick={this.handleSendMessage} position='right'/>
                        </div>
                    </div>
                </Footer>
            </Panel>
        );
    }
});

module.exports = Chats;

