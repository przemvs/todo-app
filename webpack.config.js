const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (_, argv) => {
  const mode = argv.mode || "development";
  const isDevelopmentMode = mode === "development";
  const envConfig = dotenv.config({ path: `${__dirname}/.env` });

  return {
    mode,
    entry: {
      app: ["./src/index.js"],
      vendor: ["react", "react-dom"]
    },
    cache: isDevelopmentMode,
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "js/[name].[hash:8].js",
      chunkFilename: "js/chunk-[name].[hash:8].js"
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
      alias: {
        components: path.resolve(__dirname, "./src/components"),
        views: path.resolve(__dirname, "./src/views"),
        hooks: path.resolve(__dirname, "./src/hooks"),
        utility: path.resolve(__dirname, "./src/utility"),
        constants: path.resolve(__dirname, "./src/constants"),
        icons: path.resolve(__dirname, "./public/assets/svg")
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          loader: "babel-loader"
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: "file-loader?name=[name].[ext]?[hash]&outputPath=./assets/img/"
        },
        {
          test: /\.(svg)$/,
          use: "file-loader?name=[name].[ext]?[hash]&outputPath=./assets/svg/"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: "file-loader?name=[name].[ext]?[hash]&outputPath=./assets/fonts/"
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: isDevelopmentMode ? "source-map" : false,
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(envConfig.parsed)
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        publicPath: "/",
        filename: "index.html",
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
        minify: {
          removeComments: true,
          removeEmptyAttributes: true
        }
      }),
      // new CopyPlugin([
      //   { from: path.resolve(__dirname, "public", "manifest.json"), to: path.resolve(__dirname, "dist") },
      //   {
      //     from: path.resolve(__dirname, "public/assets/img/*"),
      //     to: path.resolve(__dirname, "dist/assets/img"),
      //     flatten: true
      //   }
      // ]),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de.js|en-gb.js|pl.js/)
    ],
    optimization: {
      moduleIds: "hashed",
      minimize: !isDevelopmentMode,
      minimizer: [
        new TerserPlugin({
          sourceMap: isDevelopmentMode,
          parallel: true
        })
      ],
      runtimeChunk: {
        name: "runtime"
      },
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: "all"
          },
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
          }
        }
      }
    }
  };
};
