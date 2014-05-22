/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var PanelHeader = React.createClass({

    render: function() {
        return (
            <header className='PanelHeader panel-heading' >
                {this.props.title}

                {this.props.children}
            </header>
        );
    }
});

module.exports = PanelHeader;

