
var path = require('path');

var current_location = path.resolve('.')
var scripts_dir = path.resolve('.', 'scripts')

// export the configuration
module.exports = {
    entry: {
        'root': 'scripts/root.js',
    },
    output: {
        path: 'build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader' },
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        root: [current_location, scripts_dir]
    },
};