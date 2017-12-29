import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(disposables)/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias:{
            react: path.resolve(__dirname, 'src/react/build/packages/react'),
            ReactDOM: path.resolve(__dirname, 'src/react/build/packages/react-dom'),
            // react: path.resolve(__dirname, 'src/react/build/node_modules/react/lib/React.js'),
            // ReactDOM: path.resolve(__dirname, 'src/react/build/node_modules/react-dom/lib/ReactDOM.js'),
        }
    }
};
