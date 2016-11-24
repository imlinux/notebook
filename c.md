### wait,waitpid

默认的选项是等待直到有**一个**子进程退出，如果父进程有多个子进程的话要注意， 默认的行为是不符合要求的。

### dup2系统调用
`dup2(4,1)`将描述符4对应的流重定向到标准输出；

### linux错误描述
常用的linux系统调用出错的时候会写**errno**变量，让后调用`strerror（errno）`输出错误的描述的信息。 但是有的系统调用不会重写errno变量，仅仅只是返回错误码，此时同样可以调用`strerror(变量)`输出错误描述信息。 `perror()` 输出message到stderr。

### 对齐方式

1. `offsetof`测试结构体的字段的在结构体中的偏移.

### 网络相关常用函数
1. ntohs 网络字节序转换为本地字节序
2. inet_ntoa ip地址转换为文本

### 字符操作相关函数1. isprint

### linux共享库

1. 共享库有三个名字："soname","real name","linker name"2. real name为lib+库名+.so+.主板本号+.次版本号+.发布版本号，一般在编译时指定如：`gcc -shared -fPIC hello.c -o libhello.so.1.1.1` 3. soname为lib+库名+.so+.主版本号,一般在编译时指定如：`gcc -shared -Wl,soname,libhello.so.1 -fPIC hello.c`,编译  成功后可用`readelf -d *.so | grep SONAME` 来查看是否生成了soname,任何可执行文件在编译成功后会记录它依赖库的soname，可以通过`readelf -d xx | grep NEEDED`  来验证。4. linker name为lib+库名+.so,在编译时指定的就是linker name,如`gcc main.c -l hello`,编译器会查找linker name。5. 只要在编译时指定了soname,则共享库的三个名字都必须存在否则在编译或运行时会报错

