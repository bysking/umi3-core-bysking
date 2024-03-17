const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cwd = process.cwd();

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index: "./src/myumi/index.tsx",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.join(cwd, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    port: 8009,
    historyApiFallback: {
      index: "index.html",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/myumi/index.html",
    }),
  ],
};
