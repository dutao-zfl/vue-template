import path from 'path'
import config from '../config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export const assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === `production`
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

export const cssLoaders = options => {
  options = options || {}

  const cssLoader = {
    loader: `css-loader`,
    options: {
      minimize: process.env.NODE_ENV === `production`,
      sourceMap: options.sourceMap
    }
  }

  const generateLoaders = (loader, loaderOptions) => {
    let loaders = [cssLoader]

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: `vue-style-loader`
      })
    } else {
      return [`vue-style-loader`].concat(loaders)
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders(`less`),
    sass: generateLoaders(`sass`, { indentedSyntax: true }),
    scss: generateLoaders(`sass`),
    stylus: generateLoaders(`stylus`),
    styl: generateLoaders(`stylus`)
  }
}

// Generate loaders for standalone style files (outside of .vue)
export const styleLoaders = options => {
  const output = []
  const loaders = cssLoaders(options)

  for (let extension in loaders) {
    let loader = loaders[extension]

    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader
    })
  }

  return output
}
