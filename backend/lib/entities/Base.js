'use strict';

function Base() {}

Base.prototype = {
    toHash: function() {
        var hash = {};

        for (var key in this) {
            if (!this.hasOwnProperty(key)) continue;
            if (key[0] == '_')             continue;

            hash[ key ] = this[ key ];
        }

        return hash;
    },


    setAttrs: function(attrs) {
        if (!attrs) throw 'Args required';

        for ( var key in attrs ) {
            this[ key ] = attrs[ key ];
        }
    }
};

module.exports = Base;