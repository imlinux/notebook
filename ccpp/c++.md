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


#### c++智能指针
1. ![智能指针简单剖析](https://github.com/lanxuezaipiao/ReadingNotes/blob/master/C%2B%2B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/C%2B%2B%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88%E7%AE%80%E5%8D%95%E5%89%96%E6%9E%90.md)
