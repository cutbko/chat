'use strict';

var express    = require('express');
var bodyParser = require('body-parser');
var mongojs    = require('mongojs');
var cors       = require('cors');
var app        = express();
var db         = mongojs( process.env.TEST_MODE ? 'chat_db_test' : 'chat_db', ['chats']);
var Exception  = require('./lib/Exception');


var config = require('./config');

app.use(
    cors( {
        credentials: false,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: config.app.cors_url,
        allowedHeaders: 'X-Requested-With, Content-Type'
    } )
);

app.use(express.static(__dirname + config.app.client_patch));
app.use(bodyParser());

var renderPromise = function(execute) {
    return function(req, res, next) {
        return execute(req).then(function(data) {
            data.status = 1;
            return res.send(data);
        }).catch(function(error) {

            if (error instanceof Exception) {
                res.send({
                    status: 0,
                    error: error.toHash()
                });
            } else {
                console.error('REQUEST URL ',     req.url);
                console.error('REQUEST PARAMS: ', req.params);
                console.error('REQUEST BODY: ',   req.body);
                console.error('ERROR: ',          error);
                console.error('-------------------');

                res.send({
                    status: 0,
                    error: {
                        code:    'UNKNOWN_ERROR',
                        message: 'Please, contact your system administartor!'
                    }
                });
            }
        });
    }
};

var repositories = require('./lib/repositories')(db);
var routes       = require('./lib/routes')(repositories);

app.get(  '/api/chats',                 renderPromise(routes.chats.list.bind(routes.chats)));
app.post( '/api/chats',                 renderPromise(routes.chats.create.bind(routes.chats)));
// app.get(  '/api/chats/:name/messages',  renderPromise(routes.messages.list.bind(routes.messages)));
// app.post( '/api/chats/:name/messages',  renderPromise(routes.messages.create.bind(routes.messages)));

module.exports = app;

app.listen(config.app.port);