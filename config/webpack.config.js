const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[contenthash:6]-[name].js",
        path: path.resolve(__dirname, "../", "build")
    },
    devServer: {
        open: true,
        port: 5005,
        static: path.resolve(__dirname,'../','biuld')
    },
    module: {
        rules: [
            { test: /\.txt$/ , use: "raw-loader" },
            { test: /\.css$/ , use: [MiniCssExtractPlugin.loader,"css-loader"] },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[contenthash:6][name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Pierwsza strona",
            template: path.resolve(__dirname, "../", "src", "templates", "template.html"),
            filename: '[contenthash:6]-[name].html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash:6]-[name].css'
        })
    ]
}