/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');

// require('./Form.css');

var Form = React.createClass({

    handleSubmit: function(event) {
        if(event.target.checkValidity()){
            if(this.props.onSubmit){
                this.props.onSubmit();
            }
        }

        return false;
    },

    render: function() {
        var formCSS = cx({
            'Form' : true,
            'auth-form' : this.props.type == 'auth-form'
        });

        return (
            <form id={this.props.id} className={formCSS} onSubmit={this.handleSubmit}>
                {this.props.children}
            </form>
        );
    }
});

module.exports = Form;