/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx = require('react-classset');

var Panel = React.createClass({

    render: function() {
        var panelCSS = cx({
            'Panel panel panel-default' : true,
            'show' : this.props.show,
        });

        return (
            <section className={panelCSS} >
                {this.props.children}
            </section>
        );
    }
});

module.exports = Panel;

