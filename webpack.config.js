const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        filename: "main.js"
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/About_us.html",
            filename: "About_us.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/FAQ.html",
            filename: "FAQ.html"
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        stats: {
            children: false,
            maxModules: 0
        }
      },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                        publicPath: ''
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.(woff|ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './asset'
                }
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './asset'
                }
            }
        ]
    }

};