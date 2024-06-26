# Mainブランチを最新状態にする

作業前にmainブランチを最新状態にする

```
$ git checkout main
$ git pull
$ git checkout 作業ブランチ名  // サブブランチに作業名を付けるとわかりやすい
$ git merge main
```


# ローカルに作業ブランチを作成する

ローカル環境にて、ターミナルを用いてブランチを切る。

以下のコマンドを打って、最新にしてからブランチを作る。

```
$ git checkout main
$ git fetch
$ git pull
$ git checkout -b ブランチ名         // サブブランチに作業名を付けるとわかりやすい
```

# プルリクを出す
```
$ git add .                         // ※特定のファイルのみコミットしたい場合はファイル名を指定する
$ git commit -m "作業タイトル"    // コミットメッセージに何をしたか簡潔に書く
$ git log                          // 実行の必要はなし。コミット履歴を確認できる。
$ git checkout main            // メインブランチに切り替える
$ git pull                      // 現在の最新情報を持ってくる
$ git checkout feature/issue#1 // ←feature/issue#1は自分が今作業中の作業ブランチに置き換える
$ git merge main　　　　　　　   //更新したmainブランチの内容を作業ブランチにマージする
// コンフリクトがなければ....
$ git push -u origin feature/issue#1
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
