const path = require('path')

// この中身が設定ということを明示している
module.exports = {
  // バンドルの起点
  entry: {
    bundle: './src/index.ts',
  },
  // バンドルしたものをどこに出力するか
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', //entryに設定したキー(bundle)が[name]に入る
  },
  // ファイルインポート時に拡張子をつけるかどうか
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // ローカルのサーバがどのフォルダを観に行くか
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
      },
    ],
  },
}
