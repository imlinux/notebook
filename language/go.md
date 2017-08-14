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