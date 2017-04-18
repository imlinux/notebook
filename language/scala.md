

#### 基本
1. scala有一个基本的解释器，可以写脚本。bin/scala即可启动解释器, 可以使用tap补全对象的方法。
2. scala中类型转换不使用强制类型转换，而是通过调用方法来实现。
3. scala可以定义函数

#### 定义变量
1. `val a=100` 不可变，只读的
2. `var a=100` 可变
3. `var a: Int = 100`
注：在scala中推荐使用val来定义变量。定义变量时可以不给出类型，scala会自动推断出来。

#### 算数运算和操作符重载
1. +,-,*,/,%语义和java中一样，只是这些运算在scala中都是通过方法实现的。所以`a+b`可以写为`a.+(b)`, 同样obj.methodA(param)可以
写为obj methodA param。
2. scala不支持++，--操作。
3. 操作符重载的实例`apply`方法
如果s是一个字符串，那么在scala中s(i)就是字符串中的第i个字符串，在java中会这样写:s.getCharAt(i)。这种方法就是对`()`进行操作符重载实现的，
即s(i)与a.apply(i)是等效的。

##### 控制结构
在java中有表达式（3+4）和语句（if），表达式有值，语句没有值，只是执行一个动作。在scala中所有的语法结构都是表达式，都有值。
1. `if`语句，和java中的使用方式，唯一不同的就是scala中的if语句有值

    ```
    val a = if(100>1) 1 else 0;
    ```
2. 在scala中每一个表达式都是有类型的，如`if(x>1) 1 else 0`的类型为Int，又比如`if(x>1) "hello" else 0`的类型为两个分支的公共超类型`any`。
如果else缺失如：`if(x>1) 1`有可能没有输出，他的类型就是`Unit`可以写作`()`不带else的if语句等同于`if(x>1) 1 else ()`,Unit相当与java中的`void`
3. scala中没有`switch case`
4. `{}`在java中表示一个代码块，在scala中`{}`是有值的，块中最后一个表达式的的值就是块的值。
5. 在scala中赋值语句的值为Unit
6. 循环，while循环，do while循环和java中的使用方法一样。scala中没有for循环，只有for语句即`for(i <- 1 to n){r=r+1}`


#### 函数和过程
1. 函数的定义
    ```
        def f1(a Int, b Int) = {
            a+b
        }
    ```
    scala必须指定参数的类型， 返回值的类型可以不指定，可以不写return语句，最后一条语句的值就是函数的值。
    scala可以指定默认值
2. 过程
对于不返回值的函数在scala中叫做过程，而且有特殊的语法 
    ```
    def f1(a Int, b Int) {
        a+b
    }
    或者
    def f1(a Int, b Int) : Unit = {
        a + b;
    }
    ```
    它类型为Unit.
    
    
    
#### 异常
scala中的异常和java中的类似，只是scala中没有受检查的异常类型，
throw表达式的类型为`Nothing` ,在if/else语句中很有用，如果一个分支的类型是`Nothing`那么if/else语句的类型即为另一个分支的类型
如：
    ```
        if(x>1){
            1
        }else{
            throw Exception("");
        }
        这个分支的类型即为Int
    ```


#### 数组操作
1. 基本使用
```
    val nums = new Array[Int](10)
    val nums = Array(1,2,3,4,5)
    a(0)=1;
    使用()而不是[]
```








