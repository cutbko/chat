'use strict';

var Q = require('q');
var $ = require('jquery');

var Config = require('../config.js');

function Profile () { }

Profile.prototype = {
    get: function(){

        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'profile',
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(data){
            d.resolve(data);
        }).fail(function(jqXHR){
            console.log(jqXHR.responseJSON);
        });

        return d.promise;
    }
}

module.exports = Profile;
