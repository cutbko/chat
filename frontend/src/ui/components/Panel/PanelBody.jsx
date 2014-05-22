/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var PanelBody = React.createClass({

    render: function() {
        return (
            <div className='PanelBody panel-body' >
                {this.props.children}
            </div>
        );
    }
});

module.exports = PanelBody;