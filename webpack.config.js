const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextCssApp = new ExtractTextPlugin("app.css");
const ExtractTextCssVendor = new ExtractTextPlugin("vendor.css");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        port: 3131,
        contentBase: path.join(__dirname, 'dist'),
        open: true
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.pcss$/,
                use:
                    ExtractTextCssApp.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"]
                    })
            },
            {
                test: /\.css$/,
                use:
                    ExtractTextCssVendor.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"]
                    })
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.pcss', '.css'],
        alias: {
            bootstrap: path.resolve(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ColorDifferencePercentage",
            template: "./src/index.html"
        }),
        ExtractTextCssApp,
        ExtractTextCssVendor,
        //new CleanWebpackPlugin(["dist"])
    ]
};
