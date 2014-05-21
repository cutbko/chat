'use strict';

var util  = require('util');

function Exception(data) {
    if (!data.fields) throw "FIELDS REQUIRED";
    if (!data.code)   throw "MESSAGE REQUIRED";

    this.fields  = data.fields;
    this.code    = data.code;
    this.message = data.message;
}


Exception.prototype.toHash = function() {
    return {
        fields: this.fields,
        code:   this.code
    };
};

util.inherits(Error, Exception);

module.exports = Exception;
