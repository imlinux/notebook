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