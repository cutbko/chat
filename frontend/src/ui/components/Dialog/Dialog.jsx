/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Dialog = React.createClass({

    render: function() {
        return (
            <div className='Dialog modal' >
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

