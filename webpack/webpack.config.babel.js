import path from "path"
import webpack from "webpack"
import _ from "lodash"
import config from "../src/config/config"

const srcPath    = path.resolve(__dirname, "../src")
const assetsPath = path.resolve(__dirname, "../dist")

export default {
  entry: {
    "main": [
      "./src/client.js"
    ],
  },
    target: "web",
    output: {
      path: assetsPath,
      publicPath: `//${config.STATIC_HOST}/static/`,
      filename: "app.min.js",
      chunkFilename: "[chunkhash].js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules', srcPath]
    },
    module: {
      loaders: [
      {test: /\js(x)?$/, exclude: /node_modules/, loaders: ["babel"] },
      {test: /\.css$/,   loaders: ["style", "css", "autoprefixer"] },
      {test: /\.scss$/,  loaders: ["style", "css", "autoprefixer", "sass?include_paths[]=" + srcPath] },
      {
        test: /.*\.(gif|png|jpe?g|pdf)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive: true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ],
    // noParse: [/node_modules/]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
      "__DEV__" : JSON.stringify(process.env.NODE_ENV === "development"),
      "__PROD__": JSON.stringify(process.env.NODE_ENV === "production")
    }),

  ]
}