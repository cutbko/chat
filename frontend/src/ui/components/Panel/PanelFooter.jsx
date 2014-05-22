/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var PanelFooter = React.createClass({

    render: function() {
        return (
            <footer className='PanelFooter panel-footer' >
                {this.props.children}
            </footer>
        );
    }
});

module.exports = PanelFooter;

