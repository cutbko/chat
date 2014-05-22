'use strict';

var Q = require('q');
var $ = require('jquery');

var Config = require('../config.js');

function Messages () { }

Messages.prototype = {
    index: function(chatname){
        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'chats/'+ chatname + '/messages' ,
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(data){
            if (data.status == 1) {
                d.resolve(data);
            } else {
                d.reject(data);
            }
        }).fail(function(jqXHR, textStatus){
            console.log('fail:', textStatus);
        });

        return d.promise;
    },

    create: function(chatname, data){
        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'chats/'+ chatname + '/messages' ,
            method: 'POST',
            data: JSON.stringify({
                user: data.user,
                message: data.message
            }),
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(data){
            if (data.status == 1) {
                d.resolve(data);
            } else {
                d.reject(data);
            }
        }).fail(function(jqXHR, textStatus){
            console.log('fail:', textStatus);
        });

        return d.promise;
    }
}

module.exports = Messages;

