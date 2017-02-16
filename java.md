### 易忽略

1. ```
    int a = 0;
    long b = 0;

    a+b自动扩展为long型。
    而
    a += b;
    相当与
    long tmp = 0;
    tmp = tmp + b;
    a=(tmp);//会截取
   ```

###  java.lang.ref用法
提供了**非强引用**功能,有限度的与gc交互功能。