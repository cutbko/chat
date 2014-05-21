/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var Button = require('../components/Button.jsx');
var Link   = require('../components/Link.jsx');
var Form   = require('../components/Form.jsx');

var RestorePass = React.createClass({
    handleSubmit: function() {
        this.props.pubsub.publish('submitRestorePass', {});
    },

    render: function() {
        return (
            <Form type='auth-form' id='RestorePass' >
                <div className='auth-row'>
                    <p>
                        Email
                    </p>
                    <input type='email' />
                </div>

                <div className='auth-row'>
                    <Link href='#login' value='Back to Login' />
                </div>

                <div className='auth-row'>
                    <Button value='Find' onClick={this.handleSubmit} />
                </div>

            </Form>
        );
    }
});

module.exports = RestorePass;

