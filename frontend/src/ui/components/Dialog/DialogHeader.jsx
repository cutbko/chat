/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var DialogHeader = React.createClass({

    render: function() {
        return (
            <div className='DialogHeader modal-header' >
                <h4 className='modal-title'>{this.props.title}</h4>

                {this.props.children}
            </div>
        );
    }
});

module.exports = DialogHeader;

