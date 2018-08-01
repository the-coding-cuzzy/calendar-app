var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: [
                    /node_modules/,
                    "/Users/waiariki.koia/dev/fullcalendar/dist/fullcalendar.js"
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
