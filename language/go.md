#### 开发工具
IDE: goeclipse

#### HelloWord

	package main
	
	import "fmt"
	
	func main() {
		fmt.Println("Hello, 世界")
	}

#### 包
声明包`package 包名`
导入包`import 包路径`

如下目录结构
dong@dong-ThinkPad-T460p:~/dev/go_study$ tree 
└── src
    ├── a
    │   └── b
    │       └── f1.go
    └── main.go

3 directories, 3 files

main.go
	
	package main

	import "fmt"
	import "a/b"
	
	func main(){
		fmt.Println(b.SayHello());
	}
	
f1.go

	package b
	
	func SayHello() string{
		return "hello"
	}

可以认为`package b`就是声明当前源文件的代码属于包b的一部分。
一般在项目里包就是一个目录，包名就是目录名，包所包含的代码就是目录下面所有源文件的代码。
import导入时需要指定包的路径

#### 变量

	var v1 int
	var v2 string
	var v3 [10]int
	var v4 int = 1
	var v5 = 1 // 可以不加类型，编译器会自动推导出类型
	   v6 := 1 // 简洁方式
	
	v1, v2 = 100, 200;  多重赋值
	v1, v2 = v2 ,v1;  利用多重赋值实现交换
	v1, _ := 1, 2  匿名变量，因为go中的函数支持返回多个值，有些值可能无用，使用匿名变量可以避免声明无用的变量
	
#### 常量
1. 字面常量，和其他编程语言类似
2. `const u = 0`;
3. 预定义常量`true, false, iota`
iota比较特殊， 在每一个const关键字出现时就被重置为0， 然后在下一个const出现之前每使用一次iota就加1

	const (
		c0 = iota  // iota为0
		c1 = iota  // iota为1
		c2 = iota  // iota为2
	)
	
	const (
		c3 = iota // iota为0
		c4 = iota // iota为1
		c5 = iota // iota为2
	)

#### 枚举

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
go不支持关键字enum，而是使用const来实现枚举

#### 数据类型
##### 基本类型
1. bool
2. float32、float64
3. int8、uint8, int16, uint16, int32, uint32, int64, uint64, byte、int、uint、uintptr
其中int, uint, uintptr的长度与平台相关
4. complex64、complex128 复数类型
5. string
6. rune 字符类型, Unicode字符
7. error 错误类型
##### 复合类型
1. 指针
2. 数组
3. 切片
4. 字典
5. 通道
6. 结构体
7. 接口

