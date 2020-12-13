module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      }
    ],
  },
}
