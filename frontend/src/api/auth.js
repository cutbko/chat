'use strict';

var Q = require('q');
var $ = require('jquery');

var Config = require('../config.js');

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function Auth () { }

Auth.prototype = {
    login: function(loginData){
        var d = Q.defer();

        delete_cookie('token');

        $.ajax({
            url: Config.apiUrl + 'auth/login',
            method: 'POST',
            data: JSON.stringify({
                Username: loginData.email,
                Password: loginData.password,
                RememberMe: loginData.rememberMe
            }),
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(data){
            d.resolve(data);
        }).fail(function(jqXHR){
            d.reject(jqXHR.responseJSON);
        });

        return d.promise;
    },

    logout: function(){
        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'auth/logout',
            method: 'POST'
        }).done(function(){
            d.resolve();
        }).fail(function(jqXHR){
            console.log(jqXHR.responseJSON);
        });
    }
}

module.exports = Auth;

