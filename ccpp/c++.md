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