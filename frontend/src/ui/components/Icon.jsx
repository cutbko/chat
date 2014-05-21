/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');


var Icon = React.createClass({

    render: function() {
        var type = this.props.type;

        var IconCSS = cx({
            'Icon' : true,
            'fa fa-power-off red' : type == 'off'
        });

        return (
            <span className={IconCSS}> </span>
        );
    }
});

module.exports = Icon;