const path = require('path')
const webpack = require('webpack');
const html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    optimization: {
        minimize: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                //type: 'asset/resource',
                loader:'file-loader',
                options:{
                    name: '[name].[ext]'
                },
            }
        ]
    },

    mode: 'development',
    devtool: 'source-map',

    entry: {
        main: './index.js',
        task1: './assets/pages/task1/src/script.js',
        task2: './assets/pages/task2/src/script.js',
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: './build'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new html({filename: 'task1.html', template: './assets/pages/task1/main.html'}),
        new html({template: 'index.html'}),
        new html({filename: 'task2.html', template: './assets/pages/task2/main.html'}),
        new html({filename: 'task3.html', template: './assets/pages/task3/main.html'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin({
            patterns:[
              { 
                from: './assets/pages/task1/src/images',
                to: 'assets/images'
              },
              { 
                from: './assets/pages/task3/img',
                to: 'assets/images'
              }
            ]
          })
    ]
} 