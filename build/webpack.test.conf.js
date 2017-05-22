import {
  styleLoaders
} from './utils'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base.conf'

const webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: styleLoaders()
  },
  devtool: `#inline-source-map`,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require(`../config/test.env`)
    })
  ]
})

delete webpackConfig.entry

export default webpackConfig
