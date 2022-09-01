const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    index: "./src/second.js",
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      
    ],
  },
  plugins: [
    new NodePolyfillPlugin(), // Polyfill Node.js globals (e.g. global, process, etc)
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
};