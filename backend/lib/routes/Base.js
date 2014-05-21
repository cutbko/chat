'use strict';

var services = require('../services');

function Base(repositories) {
    this.repositories = repositories;
}

Base.prototype = {
    run: function(actionPath, params) {
        console.log(services);
        console.log(actionPath);

        var action = new services[ actionPath[0] ][ actionPath[1] ]({
            repositories: this.repositories
        });

        var validate = action.validate.bind(action);
        var execute  = action.execute.bind(action);

        return validate(params).then(execute);
    }
};

module.exports = Base;