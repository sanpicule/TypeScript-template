# TypeScript-template

  

## 開発環境構築

  

### パッケージインストール(開発環境のみで使うもの)

  

ここでは、開発環境での使用を想定したパッケージについて説明します。

  

1.  **typescript**

	TypeScriptで記述したコードをJSに変換するコンパイラです。

2.  **ts-loader**

	webpackと連動してTypeScriptコンパイラを起動するためのローダーです。

3.  **webpack**

	複数のファイルを1つにまとめるためのモジュールバンドラです。

4.  **webpack-cli**

	コマンドラインでwebpackを使用できるようにするためのツールです。

5.  **webpack-dev-server**

- webpackのビルドを行います。

- 開発用webサーバを起動します。

- ホットリロード（ファイル変更時の自動再読み込み）に対応しています。

 下記コードを実行してパッケージをインストール

```shell

npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server

```

## ESLintとPrettier

### パッケージインストール

| パッケージ名 | 説明 |
| --- | --- |
| eslint-config-prettier | eslintとprettierを併用する際に必要なパッケージ |
| @typescript-eslint/eslint-plugin | eslintでTypeScriptのチェックを行うパッケージ |
| @typescript-eslint/parser | eslintでTypeScriptを解析できるようにするパッケージ |
| husky（今回未使用） | Gitコマンドをフックに別のコマンドを実行できるパッケージ |
| lint-staged（今回未使用） | commitしたファイルに対してlint(今回はPrettierも)を実行できるパッケージ |

<br>

```shell

npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server

```