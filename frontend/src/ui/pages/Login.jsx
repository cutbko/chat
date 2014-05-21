/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var Button = require('../components/Button.jsx');
var Link   = require('../components/Link.jsx');
var Form   = require('../components/Form.jsx');

var Login = React.createClass({
    getInitialState: function() {
        return { email:'', password: '' };
    },

    handleEmailChange: function (e) {
        this.setState({ email: e.target.value, password: this.state.password});
    },

    handlePasswordChange: function (e) {
        this.setState({ email: this.state.email, password: e.target.value});
    },

    handleSubmit: function() {
        this.props.pubsub.publish('submitLogin', { email: this.state.email, password: this.state.password});
    },

    render: function() {
        return (
            <Form type='auth-form' className='Login' onSubmit={this.handleSubmit} >

                <div className='auth-row'>
                    <p>
                        Username
                    </p>
                    <input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required={true} onChange={this.handleEmailChange}/>
                </div>

                <div className='auth-row'>
                    <p>
                        Password
                    </p>
                    <input type='password' required={true} onChange={this.handlePasswordChange}/>
                </div>

                <div className='auth-row links-row'>
                    <input id='rememberMe' type='checkbox'/>
                    <label className='rememberMe' htmlFor='rememberMe'>
                        Remember me
                    </label>

                    <div className='right'>
                        <Link href='#restore-pass' value='Forgot password' />
                        <Link href='#register' value='New user' />
                    </div>

                    <div className='clearfix' ></div>
                </div>

                <div className='auth-row'>
                    <Button value='login' />
                </div>

            </Form>
        );
    }
});

module.exports = Login;

