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
        clean: true
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',[
                            '@babel/preset-react', {
                                'runtime': 'automatic'
                            }
                        ]]
                    }
                }
            },
            {
                test: /\.scss$/i,
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
    ]
}