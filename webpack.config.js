const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Countries | Home",
            template: "./src/indexTemp.html",
            filename: "index.html",
            chunks: ['main']
        }),
        new htmlWebpackPlugin({
            title: "Countries | About",
            template: "./src/pages/aboutTemp.html",
            filename: "about.html",
            chunks: ['about']
        })
    ]
}