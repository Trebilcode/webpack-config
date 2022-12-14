const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development'

if(process.env.NODE_ENV === 'production') {
    mode = 'production'
}
module.exports = {
    mode: mode,
    entry: {
        bundle: path.resolve(__dirname, 'src')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        hot: true,
        open: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                        [
                            '@babel/preset-react', {
                                runtime: 'automatic'
                            }
                        ]]
                    }
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|gif|jpe?g)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: 
    [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin(
            {
            title: 'Webpack Tutorial',
            template: 'src/template.html',
            filename: 'index.html'
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}