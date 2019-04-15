
# React

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

## state和生命周期函数

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

### 生命周期流程图

实例化后运行

```plantuml
start
:constructor;
:componentWillMount;
:render;
:componentDidMount;
:运行中;
:componentWillUnmount;
end
```

当props改变后

```plantuml
start
:运行中;
repeat
:componentWillReceiveProps;

if (shouldComponentUpdate) then
  :componentWillUpdate;
  :render;
  :componentDidUpdate;
endif
repeat while
```

当setProps()被调用

```plantuml

start

:运行中;
repeat
if(shouldComponentUpdate) then
  :componentWillUpdate;
  :render;
  :componentDidUpdate;
endif
repeat while
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

# Redux

## Actions

actions携带需要更新的数据, 使用store.dispatch()来发送actions并更新state  
如:

```js

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}

```

action一般都有一个type属性,用来标识执行对应的功能, 一般都被定义为常量字符串, 随着应用程序越来越大, actions被分到不同的模块中

## Action Creators

action creators是用来创建action的函数  
如:

```js

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

//使用
dispatch(addTodo("xxx"))

```

## Reducers

reducers接收action然后更新state.应该牢记actions携带修改state所需的参数,reducers根据actions来修改state.  
应该保证reducers是一个纯函数, 给定相同的参数不论调用多少次,值都不变

reducers示例

```js

//初始state是undefined, 这里利用es6的默认参数来初始化state
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
```

reducer一定要返回一个状态, 因为redux使用reducer的返回值来更新state.在reducer函数中不能修改原有的state, 而是复制一个,在副本上修改,最后返回修改的副本.   
对应拷贝一般使用`Object.assign`或es6的对象扩展语法.

## 拆分reducers

随着应用程序越来越复杂,action会越来越多,reducer函数的分支越来越多,这时候就很有必要将reducers拆分.

如:

```js

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state
  }
}

```

拆分为

```js

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

```

可以把不同节点的reducer函数放到不同的文件中去.

redux提供了combineReducers函数

```js

import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

```

## Store

Store对象用来保存应用程序的state, 通过`getState()`来访问state,通过`dispatch(action)`来更新状态,通过`subcribe(listener)`来通知, 一个应用程序只用一个store实例.  
创建Store

```js

import { createStore } from 'redux'
import reducer from './reducers'
const store = createStore(reducer)

```

完整的示例

```js

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()

```

## 数据流

redux构成了单向数据流来管理应用程序的状态.

数据流转有4步

1. 调用store.dispatch(action)
2. redux store 调用reducer函数, store会传递给reducer两个参数,当前state和action
3. root reducer合并各个reducer的输出为一个state大结构然后返回
4. redux保存root reducer返回的state

# react-redux
