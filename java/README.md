# JAVA

## 易忽略

1. ```text
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

## java.lang.ref用法

[官方文档](https://docs.oracle.com/javase/7/docs/api/java/lang/ref/package-summary.html#package_description)

提供了**非强引用**功能,有限度的与gc交互功能。  
默认情况下，java使用的都是强引用如`Object o = new Object()`，此时对象o为**强可达（strongly reachable）**，强可达会阻止gc回收对象。  
java.lang.ref提供了非强引用，即使对象被引用，gc也可以回收被引用的对象，而且会通知应用程序这个对象被回收了。  
SoftReference，WeakReference，PhantomReference从左到右引用越来越弱，这三个类的实例叫做**引用对象（reference-object ）**，每个引用对象  
都会引用到一个特定的对象，这个特定的对象叫**referent**,通过引用对象的get方法可以获得referent，PhantomReference是一个特例它的get方法始终返回null。  
每个应用对象对可以注册一个ReferenceQueue队列，当gc回收了**referent**时会将引用对象入队到ReferenceQueue，这样应用程序可以得知referent已被回收，起到了通知的功能。

**注意：** 只有referent被回收了，引用对象才会入队，而由于引用对象变得不可达而被回收是不会入队的。

### 三种引用类型的最佳实践

1. SoftReference一般作为内存敏感的缓存，当内存不够的时候gc才会回收这部分referent对象。
2. WeakReference一般实现类似 WeakHashMap的功能时使用
3. PhantomReference一般实现**资源清理功能**，如关闭文件。比java的finalization更灵活。

### 案例

```text
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
具体可以参考H2的org.h2.util.CloseWatcher类
```
### ClassLoader

1. BootStrap ClassLoader 启动类加载器，通过c代码实现，所以在java端引用不到。负责加载jdk中的核心类库，如：rt.jar等
2. Extension ClassLoader 称之为扩展类加载器，负责加载java的扩展类库，默认加载JAVA_HOME/jre/lib/ext/目下的所有jar
3. App ClassLoader 称为系统类加载器，负责加载应用程序classpath目录下的所有jar和class文件。

#### 原理
ClassLoader使用的是双亲委托模型来搜索类的，每个ClassLoader实例都有一个父类加载器的引用（不是继承的关系，是一个包含的关系），虚拟机内置的类加载器（Bootstrap ClassLoader）本身没有父类加载器，但可以用作其它ClassLoader实例的的父类加载器。当一个ClassLoader实例需要加载某个类时，它会试图亲自搜索某个类之前，先把这个任务委托给它的父类加载器，这个过程是由上至下依次检查的，首先由最顶层的类加载器Bootstrap ClassLoader试图加载，如果没加载到，则把任务转交给Extension ClassLoader试图加载，如果也没加载到，则转交给App ClassLoader 进行加载，如果它也没有加载得到的话，则返回给委托的发起者，由它到指定的文件系统或网络等URL中加载该类。如果它们都没有加载到这个类时，则抛出ClassNotFoundException异常。否则将这个找到的类生成一个类的定义，并将它加载到内存当中，最后返回这个类在内存中的Class实例对象。


### getResource
1. class#getResource，如果路径前面带有/则为绝对路径，如果前面不带/，这为相对路径，相对于类的路径
2. classLoader#getResource，只认为传入的参数为绝对路径
3. classLoader#getSystemResource跳过当前类加载器，直接使用系统类加载器和启动类加载器
### 工具

1. kill -3 javapid  可以dump线程状态 

### 诊断

1. [hs\_err\_pid文件定义](http://www.oracle.com/technetwork/java/javase/felog-138657.html#header)

