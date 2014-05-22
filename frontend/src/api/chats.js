'use strict';

var Q = require('q');
var $ = require('jquery');

var Config = require('../config.js');

function Chats () { }

Chats.prototype = {
    index: function(){
        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'chats',
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

    create: function(data){
        var d = Q.defer();

        $.ajax({
            url: Config.apiUrl + 'chats',
            method: 'POST',
            data: JSON.stringify({
                name: data.name
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

module.exports = Chats;

