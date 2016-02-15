var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'lib'),
    srcPath = path.join(__dirname, 'src'),
    pkg = require('./package.json');

module.exports = {
    entry: path.join(libPath, 'legofy.module.js'),
    output: {
        path: path.join(srcPath),
        filename: 'legofy.js'
    },
    babel: {
        presets: ['es2015']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "ng-annotate?add=true!babel"
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
};
