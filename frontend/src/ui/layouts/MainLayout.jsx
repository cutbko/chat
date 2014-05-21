/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');


var MainLayout = React.createClass({

    render: function() {
        return (
            <div className='MainLayout'>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = MainLayout;