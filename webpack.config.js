const path = require('path'); //path module
const Dotenv = require('dotenv-webpack'); //This was needed

module.exports = {
    mode: 'development', //use production at the end
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
		filename: 'test-bundle.js' //
	},
    module:{ // モジュールプロパティの中に
        rules:[
            { // ルールズを配列で指定
                test: /\.css$/, // 対象の拡張子を正規表現で指定。
                use:[ // どのローダーを使うのか（下から実行されていく）
                'style-loader', //cssをhtmlにstyleタグとして出力
                'css-loader'
                ]
            }
        ]
    }
  };

