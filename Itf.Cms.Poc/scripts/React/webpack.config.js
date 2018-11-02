const config = [
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
        mode: 'development',
    entry: "./components/ImageCarousel.js",
    output: {
        path: __dirname + "/dist",
        filename: "carousel-bundle.js",
        library: 'Components',
        libraryTarget: 'umd'
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


module.exports = config