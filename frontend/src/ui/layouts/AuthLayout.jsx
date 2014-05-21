/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var AuthLayout = React.createClass({

    render: function() {
        var authBoxCss = 'auth-box ' + this.props.addition.class;

        return (
            <div className='AuthLayout'>
                <div className={authBoxCss} >
                    <div id='logo'>
                    </div>

                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = AuthLayout;