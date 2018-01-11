#### 文件输入流正确读入方法
`ifstream.eof`测试文件是否结束
`ifstream.fail`
`ifstream.bad`
`ifstream.good`
注意以上方法都是在最后一次读取的时候才会标记是否eof或错误
读取文件正确的流程是先检查文件是否打开成功然后先去读文件再判断是否有错误或eof发生
列：
```
ifstream in(filename);
if(in.is_open())
{
    char c;
    in >> c;
    while(in.good())
    {
        cout << c;
        in >> c;
    }
}
```
上面的方式是先读取一次文件载判断读取是否正常。
也可以将上面的代码简化为
```
ifstream in(filename);
if(in.is_open())
{
    char c;
    while((in >> c))
    {
        cout << c;
        in >> c;
    }
}

```
操作符`>>`返回ifstream自己，ifstream重载了bool操作符调用good方法
所以`while((in >> c))` 可以实际做了两步操作
第一步调用`>>`第二步调用`good`



#### 内联函数与普通函数的差别
普通函数在调用的时候，实际对应汇编的**圧栈跳转， 退栈跳转**过程，会有一定的开销，内联函数只是类似与c语言的宏只做代码的替换。
所以相比普通函数，多次调用内联函数会占用较多的内存，但是内联函数没有普通函数附加的开销。
如果函数执行的时间小于**圧栈跳转， 退栈跳转**的时间用内联函数比较划算，所以一般较短的函数都用内联函数
***注意***内联函数的要求在每个使用它的文件中都必须对其进行定义。确保内联函数定义对多文件程序中的所有文件都可用，最简单的方法是：将内联函数定义在头文件中



#### mutable关键字
即使结构或类的变量被为const,其成员变量也可以被修改
如
```
struct Data
{
    char name[20];
    mutable int access;
};
const Data data = {"hello", 0};
data.access++;
```
#### c++类型转换
1. 自动类型转换
 1. 将一个标准类型变量的值赋给另一个标准类型变量的值，如果这两种变量兼容，c++会自动将这个值转换为接受变量的类型。
 2. 在c++中如果一个类有一个参数的构造函数，则c++将自动使用这个构造函数来生成一个临时对象，然后将这个临时对象赋值给目标变量。
 如：
 ```
 class A
 {
 private i;
 public:
     A(int i)
     {
         this->i = 0;
     }    
 };
 A a = 100;
 ```
 如果想禁用这中自动转换可以使用关键字`explicit`, 但是仍可以强行转换
 ```
 explicit A(int i)
 ```
 3. 转换函数
 可以将类类型转换为标准类型
 如：
 ```
 class A
 {
 private:
     int i;
 public:
     //定义转换为int的方法
     operator int()
     {
         return i;
     }
 }
 ```
 可以使用关键字`explicit`禁用自动转换，但仍可以使用强制转换
2. 强制类型转换
#### 默认构造函数和复制构造函数
#### c++智能指针
1. [智能指针简单剖析](https://github.com/lanxuezaipiao/ReadingNotes/blob/master/C%2B%2B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/C%2B%2B%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88%E7%AE%80%E5%8D%95%E5%89%96%E6%9E%90.md)
