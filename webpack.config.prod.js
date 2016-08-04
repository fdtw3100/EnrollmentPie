var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: "./index_template.html",
            inject: 'body',// Inject all scripts into the body
            hash: true, //if true then append a unique webpack compilation hash to all included scripts and css files. This is useful for cache busting.
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "careercle_index.html",
            template: "./careercle_index.html",
            inject: false,
            hash: true, //if true then append a unique webpack compilation hash to all included scripts and css files. This is useful for cache busting.
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {presets: ['react', 'es2015']}
            },
            {test: /\.scss$/, loader: "style!css!autoprefixer!sass"},
            {test: /\.css$/, loader: "style!css!autoprefixer"},
            {test: /\.less$/, loader: "style!css!less"}
        ]
    }
};
