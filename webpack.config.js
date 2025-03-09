// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before each build
    },
    devtool: 'inline-source-map', // Enable source maps for easier debugging
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000, // Set the port for the server
        hot: true, // Enable hot module replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html', // Use the HTML file as a template
            filename: 'index.html', // Output HTML file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // Apply loader for JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile ES6+ code
                    options: {
                        presets: ['@babel/preset-env'], // Preset for ES6+
                    },
                },
            },
        ],
    },
};