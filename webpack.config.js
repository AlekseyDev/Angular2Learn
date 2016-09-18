/**
 * Created by Rooot on 20.08.2016.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var rimraf = require('rimraf');
var NotifierWebpackPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var WebpackDevServer = require("webpack-dev-server");


const NODE_ENV = process.env.NODE_ENV|| 'development';

module.exports = {
    debug: true,
    context: __dirname + '/',
    entry: {
        app: './app/main.ts'
    },
    output: {
        path: __dirname + '/',
        publicPath: "./",
        filename: '[name].js',
        library: '[name]',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        host: 'localhost',
        port: 8200,
    },
    devtool: 'source-map',

    //
    resolve:{
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
        alias: {
            'inputmask.dependencyLib': './node_modules/jquery.inputmask/extra/dependencyLibs/inputmask.dependencyLib.jqlite.js',
            'inputmask': './node_modules/jquery.inputmask/dist/inputmask/inputmask.js'
        },
    },
    // watch: true,
    watchOptions: {
        aggregateTimeout: 1
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts',
                    'angular2-template-loader',
                    'angular2-load-children-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'raw-loader!style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'raw-loader!style-loader!css-loader!sass-loader'
            },
        ],
        noParse: [
            path.join(__dirname, "node_modules/zone.js/dist"),
        ]
    },
    // ts: {
    //     transpileOnly: true,
    //     compilerOptions: {
    //         declaration: false,
    //     },
    // },

    plugins: [
        new ForkCheckerPlugin(),
        /*new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
         Hammer: "hammerjs/hammer"
         }),*/

        new HtmlWebpackPlugin({
            template: './Index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'js/*', to: '../../'},
            {from: 'libs/**', to: '../../'},
            {from: 'Preventive/Card/img/*.*', to: '../../'},
            /*{from : 'node_modules/primeui/**',
             to:'../../'},*/
        ]),

        /* Исправляет Warning:
         * WARNING in .//~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
         * https://github.com/AngularClass/angular2-webpack-starter/issues/993
         * https://webpack.github.io/docs/configuration.html#automatically-created-contexts-defaults-module-xxxcontextxxx
         * https://github.com/angular/angular/issues/11580
         * */
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src') // location of your src
        ),
    ],
}

function root(__path) {
    return path.join(__dirname, __path);
}

//красивое уведомление.
if (NODE_ENV == 'development'){
    module.exports.plugins.push(new NotifierWebpackPlugin());
    module.exports.plugins.push(new CleanWebpackPlugin(['./FE']));

    //     //очистка всего перед сборкой (выходных фаилов)
    // module.exports.plugins.push({
    //         apply: function (compiler) {
    //             rimraf.sync(compiler.options.output.path);
    //         }
    //     })
}