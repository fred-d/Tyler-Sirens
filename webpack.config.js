var path    = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/main.js'
    },
    output: {
        path: './assets/js',
        publicPath: "/assets/js/",
        filename: 'bundle.js'
    },
    externals: {
        'rx': 'Rx',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'lodash': '_',
        'maps': 'google.maps',
        'd3': 'd3'
    },
    resolve: {
        root: path.resolve('./js')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    stage: 0
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '/dev': {
                target: 'http://0.0.0.0:3000',
                secure: false
            }
        }
    }
};
