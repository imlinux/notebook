# 手动配置React, webpack, babel

## 初始化项目

```
mkdir webpack-react-tutorial
cd webpack-react-tutorial
mkdir src

npm init -y
```

## 配置webpack

webpack将jsx代码转译为可以在浏览器中执行的js代码

### 安装webpack

```
npm i webpack --save-dev
```

安装webpack-cli
```
npm i webpack-cli --save-dev
```

修改package.json

```json

"sctipts": {

	"build": "webpack --mode production"
}

```

## 配置Babel

webpack不知道怎么将es6转译为es5, 但是webpack有loaders的概念: 可以认为是转译器.  
webpack loader接收输入然后输出 

*babel-loader*就是webpack loader,负责将es6转译为es5. babel-loader调用babel来转译,  
babel需要配置一些presets:

1. babel preset env 将es6转译为es5
2. babel preset react将jsx转译为javascript


安装babel, babel-loader, preset-env, preset-react
```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

创建`.babelrc`配置文件
```json
{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

创建`.webpack.config.js`配置文件
```javascript

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

```
js和jsx后缀的文件使用babel-loader来转译

## 开发react组件

安装react

```
npm i react react-dom
```

创建Hello.jsx
```javascript

import React from 'react'

export default (props) => {

	return (
		<div>hello></div>
	)
}

```

## 配置HTML webpack plugin

安装html-webpack-plugin和html-loader

```
npm i html-webpack-plugin html-loader --save-dev
```

修改webpack配置

```javascript

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

```

创建html模板

./src/index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
    <div class="app">
        
    </div>
</body>
</html>

```

创建入口js文件

./src/index.js

```javasctipt
import Hello from './Hello.jsx'
import React from 'react';
import ReactDOM from 'react-dom'

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;

```

## 参考资料

[Tutorial: How to set up React, webpack, and Babel 7 from scratch (2019)](https://www.valentinog.com/blog/babel/)