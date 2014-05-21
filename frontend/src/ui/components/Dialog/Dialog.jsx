/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx = require('react-classset');

var Dialog = React.createClass({

    render: function() {
        var dialogCSS = cx({
            'Dialog modal' : true,
            'show' : this.props.show,
        });

        return (
            <div className={dialogCSS} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dialog;

