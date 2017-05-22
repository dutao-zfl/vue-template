import path from 'path'
import {
  assetsPath
} from './utils'
import config from '../config'
import vueLoaderConfig from './vue-loader.conf'

const resolve = dir => {
  return path.join(__dirname, `..`, dir)
}

export default {
  entry: {
    app: `./src/app.js`
  },
  output: {
    path: config.build.assetsRoot,
    filename: `[name].js`,
    publicPath: process.env.NODE_ENV === `production`
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [`.js`, `.vue`, `.json`],
    alias: {
      'vue$': `vue/dist/vue.esm.js`,
      '@': resolve(`src`),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: `eslint-loader`,
        enforce: `pre`,
        include: [resolve(`src`), resolve(`test`)],
        options: {
          formatter: require(`eslint-friendly-formatter`)
        }
      },
      {
        test: /\.vue$/,
        loader: `vue-loader`,
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [resolve(`src`), resolve(`test`)]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: `url-loader`,
        query: {
          limit: 10000,
          name: assetsPath(`img/[name].[hash:7].[ext]`)
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: `url-loader`,
        query: {
          limit: 10000,
          name: assetsPath(`fonts/[name].[hash:7].[ext]`)
        }
      }
    ]
  }
}
