module.exports = {
    module: {
        loaders: [
            { test: /\.css/,  loader: "style-loader!css-loader" },
            { test: /\.gif/,  loader: "url-loader?limit=10000&minetype=image/gif" },
            { test: /\.jpg/,  loader: "url-loader?limit=10000&minetype=image/jpg" },
            { test: /\.png/,  loader: "url-loader?limit=10000&minetype=image/png" },
            { test: /\.jsx/,  loader: "jshint-loader!jsx-loader" },
            { test: /\.less/, loader: "style-loader!css-loader!less-loader"}
        ],
        noParse: /parse-latest.js/
    },
    jshint: {
        // Env
        "browser": true,
        "node": true,
        "jquery": true,

        // Restrictions
        "bitwise": true,
        "newcap": false,
        "noempty": true,
        "esnext": true,
        "globalstrict": true,
        "freeze": true,
        "undef": true,
        "unused": true,
        "maxcomplexity": 25,
        "latedef": true,
        "smarttabs": false,
        "trailing": false,
        "laxbreak": true,

        // Style
        "maxparams": 4,

        // Loder options
        "emitErrors": false,
        "failOnHint": false,

        "globals": {
            "$": true
        }
    }
};