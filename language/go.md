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
