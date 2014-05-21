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
var ChatList = require('../components/ChatList.jsx');

var Chats = React.createClass({
    getInitialState: function() {
        return { name:'' };
    },

    handleNameChange: function(e) {
        this.setState({ name: e.target.value });
    },

    handleCreateChat: function() {
        this.props.pubsub.publish('createChat', { name: this.state.name });
    },

    render: function() {

        return (
            <Panel>
                <Header title='Chats' />

                <Body>
                    <ChatList data='ldfd'/>
                </Body>

                <Footer>
                    <div className='row'>
                        <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 '>
                            <Input placeholder='Enter chat name' onChange={this.handleNameChange}/>
                        </div>

                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <Button value='Create' style='primary' onClick={this.handleCreateChat}/>
                        </div>
                    </div>
                </Footer>
            </Panel>
        );
    }
});

module.exports = Chats;

