module.exports = {
    // development に設定するとソースマップも出力
    mode: "production",
    entry: "./src/index.jsx",
    target: ["web", "es5"],
    output: {
        //  出力ファイルのディレクトリ名
        // 出力ファイル名
        filename: "main.js"
      },
      devServer:{
        static:"dist",
        open:true
    },
    module: {
      rules: [
        {
          // 拡張子 .js の場合を定義したオブジェクトブロックっぽい
          test: /\.jsx$/,
          use: [
            {
              // Babel を利用するの意味
              loader: "babel-loader",
              // Babel のオプションを指定
              options: {
                presets: [
                  // presetsプロパティに@babel/preset-envの指定することで、最新の構文をほとんどのブラウザが対応しているECMAScript 5に変換してくれる
                  "@babel/preset-env",
                  //☆reactライブラリをを使用する場合は@babel/reactも指定。これでjsxを解釈できる。☆
                  "@babel/react"
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
    // ES5(IE11等)向けの指定。webpack５からは必須。babelでes5にしてここに指定した通りwebpackはes5としてバンドルする。
   
  };