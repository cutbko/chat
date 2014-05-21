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

    render: function() {
        var data = [{
            username:'anita',
            message:'hello'
        },{
            username:'petro',
            message:'bye'
        }];

        return (
            <Panel>
                <Header title='Chats' />

                <Body>
                    <ChatList data={data}/>
                </Body>

                <Footer>
                    <div className='row'>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 '>
                            <Input placeholder='Type your message'/>
                        </div>

                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <Button value='Send' style='primary' />
                        </div>
                    </div>
                </Footer>
            </Panel>
        );
    }
});

module.exports = Chats;

