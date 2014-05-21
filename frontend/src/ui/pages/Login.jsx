/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Button = require('../components/Button.jsx');
var Input   = require('../components/Input.jsx');
var Button   = require('../components/Button.jsx');
var Dialog   = require('../components/Dialog/Dialog.jsx');
var Header   = require('../components/Dialog/DialogHeader.jsx');
var Body   = require('../components/Dialog/DialogBody.jsx');

var Login = React.createClass({
    getInitialState: function() {
        return { username:'' };
    },

    handleusernameChange: function (e) {
        this.setState({ username: e.target.value });
    },

    handleSubmit: function() {
        this.props.pubsub.publish('submitLogin', { username: this.state.username });
    },

    render: function() {
        return (
            <Dialog>
                <Header>
                    Please, type your User Name
                </Header>

                <Body>
                    <Input placeholder='Username' onChange={this.handleUsernameChange} />
                    <Button style='primary' value='Submit'/>
                </Body>
            </Dialog>
        );
    }
});

module.exports = Login;

