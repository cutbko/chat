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
        return { name:'' };
    },

    createChatsList: function() {
        var data = this.props.data;

        var listItems = [];

        (data.chats ? data.chats : []).forEach(function(chat) {
            listItems.push(
                    <a className='list-group-item' key={chat.name} href={'#chats/'+ chat.name}>{chat.name}</a>
            );
        });

        return listItems;
    },

    handleNameChange: function(e) {
        this.setState({ name: e.target.value });
    },

    handleCreateChat: function() {
        this.props.pubsub.publish('createChat', { name: this.state.name });
    },

    render: function() {
        var listItems = this.createChatsList();

        return (
            <Panel>
                <Header title='Select chat or create a new one' />

                <Body>
                    <div className='list-group'>
                        {listItems}
                    </div>
                </Body>

                <Footer>
                    <div className='row'>
                        <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 '>
                            <Input placeholder='Enter chat name' onChange={this.handleNameChange}/>
                        </div>

                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <Button value='Create' style='primary' onClick={this.handleCreateChat} position='right'/>
                        </div>
                    </div>
                </Footer>
            </Panel>
        );
    }
});

module.exports = Chats;

