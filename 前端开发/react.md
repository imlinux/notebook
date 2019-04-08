
# 目标

学习react的基本概念，相关术语如：Babel，Webpack，jsx，components，props，state and lifecycle.

## react简介

1. react是用来构建前端ui组件
2. react用来实现mvc模式中的视图层

## 配置和安装

### 以静态文件引入

这中方式不太流行，但是对初学者来说易于理解。

```html

//index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>

```

**react**: react高级api  
**react dom**：dom相关api  
**Babel**：javascript编译器，使es6可以在不支持es6语法的浏览器上运行

`text/babel`标签主要编写es6代码和JSX，最后会被babel编译为普通的js代码。

```js

//React代码
class App extends React.Component {
  render() {
    return <h1>Hello world!</h1> //JSX代码
  }
}

//react dom, 使用App类渲染一个视图
ReactDOM.render(<App/>, document.getElementById('root'))
```

### 创建React App

```bash
create-react-app react-tutorial

create-react-app会自动配置好环境，会自动创建一个server服务，使用Webpack编译React，JSX和es6。
使用ESLint来测试语法
```

#### JSX

react特有的语法

```jsx
const heading = <h1 className="site-heading">Hello, React</h1>  
```

jsx会被babel编译为js代码，如上面的代码会被编译为

```js

const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')
```

jsx是js和html的混合体。  
`className`属性用来设置css类，而不是用class。 [jsx支持的HTML属性](https://reactjs.org/docs/dom-elements.html)
jsx的属性和方法名都是用驼峰命名法则  
相比编写原生的js代码，编写jsx更简洁

### 组件

组件分为class组件和函数式组件  
[组件，元素，实例](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

#### 类组件

```jsx

import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table

```

使用组件

```jsx

import Table from './Table'

return (
    <div>
        <Table />
    </div>
)


```

#### 函数式组件

函数式组件没有状态即state，也没有生命周期方法

```jsx

//函数式组件TableHeader
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

//简单组件TableBody
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
}

//使用简单组件
//组件和嵌套使用
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

```

#### 简单组件和class组件对比

```jsx

//简单组件
const SimpleComponent = () => {
  return <div>Example</div>
}

//类组件
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}

```

## props

props是单向数据流  
props是传递已存在的数据的有效方式，但是组件是不能修改props中的值的，因为props是只读的  
props主要用来传递事件函数，以及数据

```js

class Hello extends React.Component {

    render() {
        return (<h1>{this.props.data}</h1>)
    }
}

class Hello1 extends React.Component {

    //当子类定义了构造函数，必须调用super函数
    constructor(props) {
        super(props)
    }
}

class App extends React.Component {

    render() {
        return <Hello data="nihao"></Hello>
    }
}
```

### props.children

用来传递子元素  
[元素组合](https://reactjs.org/docs/composition-vs-inheritance.html)

每当props改变后，子组件的render方法重新调用

## state

可以修改

```js

class App extends Component {

    state = {

    }
}

```

`this.state`获取状态  
`this.setState({})`更新状态，每调用一次setState()，render就会被重新调用。setState()是一个签合并，在更新一个属性时，他会保留其他属性。

```js

state={
    "a1": "v1"
}

setState({
    "a2": "v2"
});

//{"a1": "v1", "a2": "v2"}
console.log(state);

```

[状态和生命周期](https://reactjs.org/docs/state-and-lifecycle.html)

## 高阶函数

至少满足以下一个条件：

1. 接受一个或多个函数作为输入
2. 输出一个函数

## 事件

[处理事件](https://reactjs.org/docs/handling-events.html)

## 绑定

## 表单

[表单](https://reactjs.org/docs/forms.html)

## 资料

[react入门](https://www.taniarascia.com/getting-started-with-react/)  
[react哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html)