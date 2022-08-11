var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS=[
  'faker','lodash','redux','react-redux','react-dom','react','react-input-range','redux-form','redux-thunk'
];

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude: /node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all'
        }
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('process.env.NODE_ENV')
    })
  ],

  "mode": 'development'
};
