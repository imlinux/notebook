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

### java.lang.ref用法

提供了**非强引用**功能,有限度的与gc交互功能。  
默认情况下，java使用的都是强引用如`Object o = new Object()`，此时对象o为**强可达（strongly reachable）**，强可达会阻止gc回收对象。  
java.lang.ref提供了非强引用，即使对象被引用，gc也可以回收被引用的对象，而且会通知应用程序这个对象被回收了。  
SoftReference，WeakReference，PhantomReference从左到右引用越来越弱，这三个类的实例叫做**引用对象（reference-object ）**，每个引用对象  
都会引用到一个特定的对象，这个特定的对象叫**referent**,通过引用对象的get方法可以获得referent，PhantomReference是一个特例它的get方法始终返回null。  
每个应用对象对可以注册一个ReferenceQueue队列，当gc回收了**referent**时会将应用对象入队到ReferenceQueue，这样应用程序可以得知referent已被回收，起到了通知的功能。

**注意：** 只有referent被回收了，引用对象才会入队，而由于引用对象变得不可达而被回收是不会入队的。

#### 三种引用类型的最佳实践

1. SoftReference一般作为内存敏感的缓存，当内存不够的时候gc才会回收这部分referent对象。
2. WeakReference一般实现类似 WeakHashMap的功能时使用
3. PhantomReference一般实现**资源清理功能**，如关闭文件。比java的finalization更灵活。

#### 案例

```
public class M {


    public static void main(String[] args) throws Exception{
        ReferenceQueue<Object> rq = new ReferenceQueue<>();

        A r = new A(new Object(), rq, new FileOutputStream("/home/dong/1.csv"));
        System.out.println(r.get());
        System.gc();

        Object rA = rq.remove();
        A rrA = (A)rA;
        System.out.println(rrA.closeable);
        rrA.closeable.close();
    }
}


class A extends PhantomReference<Object> {

    public Closeable closeable;
    A(Object o, ReferenceQueue rq, Closeable closeable) throws Exception{
        super(o,rq);
        this.closeable = closeable;
    }
}

相当与把closeable的生命周期与Object o绑定到了一块儿，当o被回收后v也可以关闭了。
```



