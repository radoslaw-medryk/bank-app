const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");
const hash = require("string-hash");
const { relative } = require("path");

module.exports = (env, argv) => {
    const isProduction = !!argv && argv.mode === "production";

    return {
        mode: isProduction ? "production" : "development",
        entry: "./src/index.tsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist",
            publicPath: "/",
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.tsx?$/,
                    use: {
                        loader: "tslint-loader",
                        options: {
                            emitErrors: true,
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "linaria/loader",
                            options: {
                                sourceMap: !isProduction,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                            },
                        },
                    ],
                },
                {
                    test: /\.woff2?$/,
                    use: "file-loader",
                },
                {
                    test: /\.svg$/,
                    use: ({ resource }) => [
                        {
                            loader: "react-svg-loader",
                            options: {
                                svgo: {
                                    plugins: [
                                        {
                                            cleanupIDs: {
                                                prefix: `svg${hash(relative(__dirname, resource))}`,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },

        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },

        devServer: {
            historyApiFallback: true,
        },

        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.html",
            }),
            new StylelintWebpackPlugin({
                context: "src",
                files: "**/*.tsx",
            }),
        ],
    };
};
