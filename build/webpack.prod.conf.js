import path from 'path'
import {
  assetsPath,
  styleLoaders
} from './utils'
import webpack from 'webpack'
import config from '../config'
import merge from 'webpack-merge'
import testEnv from '../config/test.env'
import baseWebpackConfig from './webpack.base.conf'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

const env = process.env.NODE_ENV === `testing`
  ? testEnv
  : config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? `#source-map` : false,
  output: {
    path: config.build.assetsRoot,
    filename: assetsPath(`scripts/[name].[chunkhash].js`),
    chunkFilename: assetsPath(`scripts/[id].[chunkhash].js`)
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: assetsPath(`styles/[name].[contenthash].css`)
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === `testing`
        ? `index.html`
        : config.build.index,
      template: `index.html`,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: `dependency`
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: `vendor`,
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, `../node_modules`)
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: `manifest`,
      chunks: [`vendor`]
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `../static`),
        to: config.build.assetsSubDirectory,
        ignore: [`.*`]
      }
    ])
  ]
})

if (config.build.productionGzip) {
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: `[path].gz[query]`,
      algorithm: `gzip`,
      test: new RegExp(
        `\\.(${config.build.productionGzipExtensions.join(`|`)})$`
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin())
}

export default webpackConfig
