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
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            },
          },
          'sass-loader',
        ],
      },
    ]
  }
}