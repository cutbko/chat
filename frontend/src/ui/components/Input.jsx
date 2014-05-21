/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');


var Input = React.createClass({

    render: function() {
        var inputCSS = cx({
            'Input' : true,
            'auth-input' : this.props.type == 'auth-input'
        });

        return (
            <div className='Input'>
                {this.props.label}

                <input type={this.props.type}
                       className={inputCSS}
                       placeholder={this.props.placeholder}
                       value={this.props.value}>

                    {this.props.children}
                </input>
            </div>
        );
    }
});

module.exports = Input;