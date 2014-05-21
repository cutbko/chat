/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var cx = require('react-classset');

var Button = React.createClass({
    handleClick: function() {
        if(this.props.onClick) {
            this.props.onClick();
        }
    },

    render: function() {
        var buttonCSS = cx({
            'Button ' : true,
            'mystyle'         : this.props.style=='old',
            'btn btn-primary' : this.props.style=='primary',
            'btn btn-default' : this.props.style=='default',
            'btn btn-info'    : this.props.style=='info',
            'btn btn-success' : this.props.style=='success',
            'btn btn-sm'      : this.props.size=='small',
            'pull-right' : this.props.position=='right',
            'btn-icon' : this.props.type=='icon',
            'btn-sm' : this.props.size=='small',
            'btn-xs' : this.props.size=='smallest',
            'm-r-sm' : this.props.offset=='right',
            'm-l-sm' : this.props.offset=='left',
            'm-l-sm m-b-sm' : this.props.offset=='left-bottom',
            'm-t-sm' : this.props.offset=='top'
        });

        return (
            <button className={buttonCSS} type={this.props.type} onClick={this.handleClick}
                    title={this.props.title} disabled={ this.props.disabled ? 'disabled' : '' }>
                {this.props.children}
                {this.props.value}
            </button>
        );
    }
});

module.exports = Button;