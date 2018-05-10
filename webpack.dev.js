const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    contentBase: './dist',
    port: '3001',
  }
});
