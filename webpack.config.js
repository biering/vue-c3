var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  mode: 'production',

  entry: {
    'vue-c3': resolve('src/index.js'),
    vendor: [
      'c3'
    ]
  },

  output: {
    path: resolve('dist/'),
    filename: '[name].min.js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    vue: 'vue'
  },

  resolve: {
    modules: [
      resolve('app'),
      resolve('app/css'),
      'node_modules'
    ],

    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  devtool: '#source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new VueLoaderPlugin()
  ]
}
