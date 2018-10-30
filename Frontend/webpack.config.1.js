const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8000,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            boostrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'windows.jQuery': 'jquery'
        // }),
       new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "app.css",
            chunkFilename: "99.css"
          }),
    ],
    module: {
        rules: [{
            test: '/.js[x]?$/',
            loader: 'babel-loader',
            exclude: /none_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: MiniCssExtractPlugin.loader,
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|,jpg*.*$/,
            loader: 'file'
        }]
    }
}