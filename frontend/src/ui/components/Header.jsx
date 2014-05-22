/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var cx = require('react-classset');

var Header = React.createClass({

    render: function() {
        return (
            <header className='Header navbar navbar-default navbar-fixed-top' >
                <div className='container'>
                    <div className='navbar-header'>
                        Chatron
                    </div>

                </div>
            </header>
        );
    }
});

module.exports = Header;