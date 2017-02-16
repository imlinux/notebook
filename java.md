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

1. 强引用：默认的都是强引用
2. SoftReference:
3. WeakReference:
4. PhantomReference:



