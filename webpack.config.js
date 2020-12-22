const path = require("path");

module.exports = {
    entry: {index: "./src/index.js"},
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
        library: 'reactMount',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
                commons: {
                    test: /[\\/]node_modules[\\/](define-properties)[\\/]/,
                    name: 'def',
                    chunks: 'all'
                }
            }
        },
        minimize: true
    }
};