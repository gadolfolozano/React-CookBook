const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',

  devServer: {
    inline: true,
    contentBase: './dist',
    port: '80',
  },

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});
