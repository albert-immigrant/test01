const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },
    resolve: {
        modules: ['node_modules']
    },
    devtool : 'inline-source-map',
};