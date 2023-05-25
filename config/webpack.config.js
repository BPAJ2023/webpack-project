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
        filename: "[contenthash]-[name].js",
        path: path.resolve(__dirname, "../", "build")
    },
    devServer: {
        open: true,
        port: 8080
    },
    module: {
        rules: [
            { test: /\.txt$/ , use: "raw-loader" },
            { test: /\.css$/ , use: [MiniCssExtractPlugin.loader,"css-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Pierwsza strona",
            template: path.resolve(__dirname, "../", "src", "templates", "template.html")
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash]-[name].css'
        })
    ]
}