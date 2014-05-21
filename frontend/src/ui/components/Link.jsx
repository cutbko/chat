/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var Link = React.createClass({

    handleClick: function() {
        if(this.props.onClick) {
            this.props.onClick();
        }
    },

    render: function() {

        return (
            <a className='Link' href={this.props.href} onClick={this.handleClick}>
                {this.props.value}
                {this.props.children}
            </a>
        );
    }
});

module.exports = Link;