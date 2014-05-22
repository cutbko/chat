/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('react-classset');

var Icon = React.createClass({

    render: function() {
        var type = this.props.type;
        var style = this.props.style;
        var offset = this.props.offset;

        var IconCSS = cx({
            'Icon' : true,
            'text-muted' : style == 'nav',
            'text-info-lt' : style == 'info',
            'text-primary-lt' : style == 'primary',
            'text-success-lt' : style == 'success',
            'text-danger-lt' : style == 'danger',
            'fa fa-power-off red' : type == 'off',
            'fa fa-group'         : type == 'group',
            'fa fa-user'          : type == 'person',
            'fa fa-times red small close-icon' : type == 'close',
            'fa fa-times'         : type == 'clear',
            'fa fa-refresh'       : type == 'change',
            'fa fa-search'        : type == 'search',
            'fa fa-reply-all'     : type == 'right-arrow',
            'fa fa-sitemap'       : type == 'sitemap',
            'fa fa-plus'          : type == 'plus',
            'fa fa-magic'          : type == 'excel',
            'fa fa-external-link'  : type == 'view',
            'fa fa-spinner fa-spin' : type == 'spinner',
            'fa fa-edit' : type == 'edit',
            'm-n' : !offset,
            'm-r-xs' : offset == 'right-small',
            'm-l-xs' : offset == 'left-small'
        });

        return (
            <span className={IconCSS}> </span>
        );
    }
});

module.exports = Icon;