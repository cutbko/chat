/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var DialogBody = React.createClass({

    render: function() {
        return (
            <div className='DialogBody modal-body' >
                {this.props.children}
            </div>
        );
    }
});

module.exports = DialogBody;

