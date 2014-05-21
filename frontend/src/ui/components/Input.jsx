/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');


var Input = React.createClass({
    handleChange: function(e) {
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    },

    getValue: function() {
        return this.refs.input.getDOMNode().value;
    },

    getInputNode: function() {
        return this.refs.input.getDOMNode();
    },

    render: function() {
        var inputCSS = cx({
            'form-control ' : this.props.type!='checkbox',
            'parsley-validated' : this.props.type=='checkbox'
        });

        var mainCSS = cx({
            'Input ' : true,
            'i-checks checkbox' : this.props.type=='checkbox'
        });

        var required = this.props.required ? this.props.required : '';

        return (
            <div className={mainCSS}>
                <label>
                    {!this.props.labelPosition ? this.props.label  : ''}

                    <input type={this.props.type}
                           className={inputCSS}
                           id={this.props.id}
                           placeholder={this.props.placeholder}
                           value={this.props.value} data-date-format={this.props.datadateformat}
                           onChange={this.handleChange}
                           required={required}
                           pattern={this.props.pattern}
                           ref='input'
                           disabled={ this.props.disabled ? 'disabled' : '' }
                           checked={ this.props.checked }>

                        {this.props.children}
                    </input>

                    { this.props.type=='checkbox' ? <i></i>: '' }

                    { this.props.labelPosition=='bottom' ? this.props.label : ''}
                </label>
            </div>
        );
    }
});

module.exports = Input;