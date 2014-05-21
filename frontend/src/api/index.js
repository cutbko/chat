'use strict';

var Auth = require('./auth.js');
var Profile = require('./profile.js');

module.exports = function() {
    return  {
        auth: new Auth(),
        profile: new Profile()
    };
};