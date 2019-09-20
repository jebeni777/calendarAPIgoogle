module.exports = {
  mode: "development",
  entry:  './source/app.js',
  output: {
    filename: './dist/bundle.js',
    path:__dirname + '/source/',
    publicPath: '/'
  },
  devServer: {
    inline: false,
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}