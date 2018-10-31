module.exports = [
    {
        context: __dirname,
        entry: "./app.js",
        output: {
            path: __dirname + "/dist",
            filename: "app-bundle.js"
        },
        watch: true,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env', 'babel-preset-react']
                        }
                    }
                }
            ]
        }
    },
    {
    context: __dirname,
    entry: "./components/Carousel.js",
    output: {
        path: __dirname + "/dist",
        filename: "carsousel-bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            }
        ]
    }
}
]