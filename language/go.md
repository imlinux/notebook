# go

## 开发工具

IDE: goeclipse

## HelloWord

```text
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}
```

## 包

声明包`package 包名`  
导入包`import 包路径`

如下目录结构  
dong@dong-ThinkPad-T460p:~/dev/go\_study$ tree  
└── src  
├── a  
│ └── b  
│ └── f1.go  
└── main.go

3 directories, 3 files

main.go

```text
package main

import "fmt"
import "a/b"

func main(){
    fmt.Println(b.SayHello());
}
```

f1.go

```text
package b

func SayHello() string{
    return "hello"
}
```

可以认为`package b`就是声明当前源文件的代码属于包b的一部分。  
一般在项目里包就是一个目录，包名就是目录名，包所包含的代码就是目录下面所有源文件的代码。  
import导入时需要指定包的路径

## 函数

```text
func add(x int, y int) int {
    return x + y
}

多值返回
func swap(x, y string) (string, string) {
    return y, x
}
命名返回值
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}
```

直接返回语句仅应当用在像下面这样的短函数中。在长的函数中它们会影响代码的可读性。

## 变量

```text
var v1 int
var v2 string
var v3 [10]int
var v4 int = 1
var v5 = 1 // 可以不加类型，编译器会自动推导出类型
   v6 := 1 // 简洁方式

v1, v2 = 100, 200;  多重赋值
v1, v2 = v2 ,v1;  利用多重赋值实现交换
v1, _ := 1, 2  匿名变量，因为go中的函数支持返回多个值，有些值可能无用，使用匿名变量可以避免声明无用的变量
```

## 常量

1. 字面常量，和其他编程语言类似
2. `const u = 0`;
3. 预定义常量`true, false, iota`  
   iota比较特殊， 在每一个const关键字出现时就被重置为0， 然后在下一个const出现之前每使用一次iota就加1

   const \(  
   c0 = iota // iota为0  
   c1 = iota // iota为1  
   c2 = iota // iota为2  
   \)

   const \(  
   c3 = iota // iota为0  
   c4 = iota // iota为1  
   c5 = iota // iota为2  
   \)

## 枚举

```text
const (
    Sunday = iota
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    numberOfDays
     // 这个常量没有导出
)
```

go不支持关键字enum，而是使用const来实现枚举

## 数据类型

### 基本类型

1. bool
2. float32、float64
3. int8、uint8, int16, uint16, int32, uint32, int64, uint64, byte（uint8的别名）、int、uint、uintptr

   其中int, uint, uintptr的长度与平台相关

4. complex64、complex128 复数类型
5. string
6. rune 字符类型, int32的别名， 代表一个Unicode码
7. error 错误类型

### 类型转换

表达式 T\(v\) 将值 v 转换为类型 T  
var i int = 42  
var f float64 = float64\(i\)  
var u uint = uint\(f\)

## 流程控制语句

### for

Go 只有一种循环结构—— for 循环。

```text
sum := 0
for i := 0; i < 10; i++ {
    sum += i
}
```

注意：不像 C，Java，或者 Javascript 等其他语言，for 语句的三个组成部分 并不需要用括号括起来，但循环体必须用 { } 括起来。

```text
for 是 Go 的 “while”
sum := 1
for sum < 1000 {
    sum += sum
}

死循环
for {
}
```

### if

就像 for 循环一样，Go 的 if 语句也不要求用 \( \) 将条件括起来，同时， { } 还是必须有的。  
if x &lt; 0 {  
fmt.Println\("hello"\);  
}  
跟 for 一样， if 语句可以在条件之前执行一个简单语句。  
if v := math.Pow\(x, n\); v &lt; lim {  
fmt.Println\("hello"\);  
}

### if/else

```text
if x < 0{

} else {

}
```

### if/else if/else

```text
if i:= 10; i < 10 {
    fmt.Print("i < 10")
} else i < 70 {
    fmt.Print("i < 70")
} else {
    fmt.Print("i");
}
```

### switch

```text
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("OS X.")
case "linux":
    fmt.Println("Linux.")
default:
    // freebsd, openbsd,
    // plan9, windows...
    fmt.Printf("%s.", os)
}
```

switch 的条件从上到下的执行，当匹配成功的时候停止。

没有条件的 switch 同 switch true 一样。  
t := time.Now\(\)  
switch {  
case t.Hour\(\) &lt; 12:  
fmt.Println\("Good morning!"\)  
case t.Hour\(\) &lt; 17:  
fmt.Println\("Good afternoon."\)  
default:  
fmt.Println\("Good evening."\)  
}

### defer

defer 语句会延迟函数的执行直到上层函数返回。  
延迟调用的参数会立刻生成，但是在上层函数返回前函数都不会被调用。  
import "fmt"

```text
func main() {
    defer fmt.Println("world")

    fmt.Println("hello")
}
```

defer 栈  
延迟的函数调用被压入一个栈中。当函数返回时， 会按照后进先出的顺序调用被延迟的函数调用。  
fmt.Println\("counting"\)

```text
for i := 0; i < 10; i++ {
    defer fmt.Println(i)
}

fmt.Println("done")
```

### 复合类型

1. 指针

    var p \*int;

    i := 1;

    p = &i;

    \*p = 100;

   与c语言中的指针类似， 只是go中的指针没有指针运算

2. 数组

   类型 \[n\]T 是一个有 n 个类型为 T 的值的数组。

   go中数组为值类型， 所以在赋值时会产生一次复制。

3. 切片\(slice\)  
   slice可以认为是java中的list  
   \[\]T 是一个元素类型为 T 的 slice。  
   len\(s\) 返回slice s的长度

   初始化  
   s := \[\]int{2, 3, 5, 7, 11, 13}  
   对 slice 切片  
   s\[lo:hi\]  
   构造slice  
   a := make\(\[\]int, 5\)

4. 字典
5. 通道
6. 结构体 //定义 type Vertex struct { X int Y int } //结构体指针 v := Vertex{1, 2} p := &v p.X = 1e9 fmt.Println\(v\) //初始化 v1 = Vertex{1, 2} // 类型为 Vertex v2 = Vertex{X: 1} // Y:0 被省略 v3 = Vertex{} // X:0 和 Y:0 p = &Vertex{1, 2} // 类型为 \*Vertex
7. 接口


### 资料
1. [代码组织](https://golang.org/doc/code.html#Workspaces)