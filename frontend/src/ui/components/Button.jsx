/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Button = React.createClass({
    handleClick: function() {
        if(this.props.onClick) {
            this.props.onClick();
        }
    },

    render: function() {
        return (
            <button onClick={this.handleClick}>
                {this.props.value}
            </button>
        );
    }
});

module.exports = Button;