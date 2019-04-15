# 简介

ECMAScript 2015也叫ES6, 引入了一些行的语法和功能  

## 变量和常量比较

| 关键字 | 作用域 | 提升 | 是否能重新赋值 | 是否能重新声明 |
| ----- | ----- | --- | ------------ | ------------ |
| var | 函数作用域 | 是 | 是 | 是
| let | 块级作用域 | 否 | 是 | 否
| const | 块级作用域 | 否 | 否 | 否

## 变量声明

```js

let x = 0

```

[MDN Reference: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

## 常量声明

```js

const CONST_IDENTIFIER = 0

```

[MDN Reference: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

## 箭头函数

箭头函数是函数的简写形式。箭头函数没有自己的this，没有prototypes， 不能被用作构造函数，  
不能被用作对象的方法。

```js

let func = a => {};

let func = (a, b, c) => {}

```

[MDN Reference: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 字符串模板

变量可以嵌入字符串模板

```js

var str = 'Release date: ' + date； //ES5语法

let str = `Release Date: ${date}`； //ES6语法

```

[MDN Reference: Expression interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Expression_interpolation)

## 多行字符串

```js

//ES5
var str = 'This text '
                + 'is on '
                + 'multiple lines'

//ES6
let str = `This text
            is on
            multiple lines`

```

[MDN Reference: Multi-line strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Multi-line_strings)

## 隐式return

当箭头函数没有函数体，则return可以被忽略

```js

//ES5
function func(a, b, c) {
  return a + b + c
}
//ES6
let func = (a, b, c) => a + b + c
```

[MDN Reference: Function body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body)

## 键/属性简写

对象的变量名和键名相同

```js

//ES5
var obj = {
  a: a,
  b: b,
}

//ES6
let obj = {
  a,
  b,
}

```

## 方法定义简写

当函数被用作对象的方法时，function关键字可以忽略

```js

//ES5
var obj = {
  a: function(c, d) {},
  b: function(e, f) {},
}

//ES6
let obj = {
  a(c, d) {},
  b(e, f) {},
}

```

## 计算属性名

```js

// ES5
var user = {
  name: 'Robin',
};

// ES6
const key = 'name';
  const user = {
  [key]: 'Robin',
};

```

## 解构

```js

var obj = { a: 1, b: 2, c: 3 }

//ES5
var a = obj.a
var b = obj.b
var c = obj.c

//ES6
let { a, b, c } = obj

//对数组同样可以使用解构
const users = ['Robin', 'Andrew', 'Dan'];
const [
  userOne,
  userTwo,
  userThree
] = users;
```

[MDN Reference: Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)

## 数组循环

```js

var arr = ['a', 'b', 'c']

//ES5
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//ES6
for (let i of arr) {
  console.log(i)
}

```

[MDN Reference: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## 默认参数

```js

//ES5
var func = function(a, b) {
  b = b === undefined ? 2 : b
  return a + b
}

//ES6
let func = (a, b = 2) => {
  return a + b
}

```

[MDN Reference: Default paramters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## 扩展语法

```js

//对象扩展

const userNames = { firstname: 'Robin', lastname: 'Wieruch' };
const age = 28;
const user = { ...userNames, age };

const userNames = { firstname: 'Robin', lastname: 'Wieruch' };
const userAge = { age: 28 };
const user = { ...userNames, ...userAge };


//数组扩展
let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = [...arr1, ...arr2]
let arr4 = [...arr1, 100]

let arr1 = [1, 2, 3]
let func = (a, b, c) => a + b + c

console.log(func(...arr1)) // 6

```

[MDN Reference: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## 类

```js
//ES5
function Func(a, b) {
  this.a = a
  this.b = b
}

Func.prototype.getSum = function() {
  return this.a + this.b
}

var x = new Func(3, 4)

//ES6
class Func {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  getSum() {
    return this.a + this.b
  }
}

let x = new Func(3, 4)

x.getSum() // returns 7
```

[MDN Reference: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## 继承

使用extends创建子类

```js

//ES5
function Inheritance(a, b, c) {
  Func.call(this, a, b)

  this.c = c
}

Inheritance.prototype = Object.create(Func.prototype)
Inheritance.prototype.getProduct = function() {
  return this.a * this.b * this.c
}

var y = new Inheritance(3, 4, 5)

//ES6
class Inheritance extends Func {
  constructor(a, b, c) {
    super(a, b)

    this.c = c
  }

  getProduct() {
    return this.a * this.b * this.c
  }
}

let y = new Inheritance(3, 4, 5)
```

[MDN Reference: Subclassing with extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends)

## 模块 export/import

```js

//export.js
let func = a => a + a
let obj = {}
let x = 0

export { func, obj, x }

//import.js
import { func, obj, x } from './export.js'

console.log(func(3), obj, x)

import * as info from './export.js'

console.log(info.x)

```

[MDN Reference: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)  
[MDN Reference: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

## Promises/Callbacks

```js

// ES5 callback
function doSecond() {
    console.log('Do second.');
}

function doFirst(callback) {
    setTimeout(function() {
        console.log('Do first.');

        callback();
    }, 500);
}

doFirst(doSecond);

// ES6 Promise
let doSecond = () => {
    console.log('Do second.');
}

let doFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Do first.');
        resolve();
    }, 500);
});
  
doFirst.then(doSecond);

//XMLHttpRequest
//ES5

function makeRequest(method, url, callback) {
    var request = new XMLHttpRequest();

    request.open(method, url);
    request.onload = function() {
        callback(null, request.response);
    };
    request.onerror = function() {
        callback(request.response);
    };
    request.send();
}

makeRequest('GET', 'https://url.json', function (err, data) {
        if (err) { 
            throw new Error(err);
        } else {
            console.log(data);
        }
    }
);

// ES6 Promise
function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open(method, url);
        request.onload = resolve;
        request.onerror = reject;
        request.send();
    });
}

makeRequest('GET', 'https://url.json')
.then(event => {
    console.log(event.target.response);
})
.catch(err => {
    throw new Error(err);
});

```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## 相关资料

[ES6语法和功能](https://www.taniarascia.com/es6-syntax-and-feature-overview/)