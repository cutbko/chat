/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var MainLayout = React.createClass({

    render: function() {
        return (
            <div className='MainLayout container'>
                {this.props.children}
            </div>
        );
    }
});

module.exports = MainLayout;