# 并发

1. 伪共享 [jmh关于伪共享的基准测试](http://hg.openjdk.java.net/code-tools/jmh/file/36a2ee9a075e/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_22_FalseSharing.java#l77)


## java内存模型

1. **happends-before**为jvm的规范，具体的实现根据cpu架构的不同使用特定的cpu指令来实现，在x86平台上主要使用**内存屏障**来实现happend-before。
2. 作为java程序员在开发程序的时候只要知道happends-before为我们提供的保证就可以了，不需要知道jvm是如何实现happends-before的

### [happends-before规则](../assets/pdf/happens-before.pdf)





## java内存模型实现

### [内存屏障与指令重排序](../assets/pdf/深入理解Java内存模型（一）——基础.pdf)


### java并发基石
1. [volatile控制内存可见性](../assets/pdf/深入理解Java内存模型（四）——volatile)
2. Unsafe.park,Unsafe.unpark调度线程
3. synchronized

### LockSupport是java中除synchronized外一切并发控制类的基础

### 效果
LockSupport.park暂停当前线程，使用场景是检查某个条件，如果不满足线程就park。
**注意**
park()会在三种情况下返回
1. park可能会无原因的返回，所以park一般放在循环中，		
例如：		
```		
while (!canProceed()) { ... LockSupport.park(markerObject); }		

```		
2. 另外一个线程调用了unpark();
3. 线程发生中断，如调用了interrupt()方法

park的最佳实践是一般调用LockSupport.park(object),目的是标识线程阻塞在哪个对象上，这个在使用工具诊断线程的时候可以看到这个线程因为什么原因阻塞

LockSupport.unpark(thread)允许某个阻塞在park调用下的线程运行。

### 文档
[java doc](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/locks/LockSupport.html)



## AQS (AbstractQueuedSynchronizer)


aqs内部使用clh算法的变体
### CLH(craig landin hagersten)，主要用于实现自旋锁
#### 自旋锁
自旋锁是指当一个线程尝试获取某个锁时，如果该锁已经被其他线程占用，就一直循环检测锁是否被释放，而不是进入线程挂起。			
自旋锁适用于锁保护的临界区很小，锁占用的时间很短	

#### 简单实现

```
import java.util.concurrent.atomic.AtomicReference;

public class SimpleSpinLock {
   private AtomicReference<Thread> owner = new AtomicReference<Thread>();

   public void lock() {
       Thread currentThread = Thread.currentThread();

              // 如果锁未被占用，则设置当前线程为锁的拥有者
       while (!owner.compareAndSet(null, currentThread)) {
       }
   }

   public void unlock() {
       Thread currentThread = Thread.currentThread();

              // 只有锁的拥有者才能释放锁
       owner.compareAndSet(currentThread, null);
   }
}

缺点：
每个线程占用的处理器都在读写同一个变量owner，每次读写操作都必须在多个处理器缓存之间进行缓存同步，大大降低系统整体性能。
```

clh就是为了解决这个问题的
clh代码实现
```
public class ClhSpinLock implements Lock{
    private final ThreadLocal<Node> prev;
    private final ThreadLocal<Node> node;
    private final AtomicReference<Node> tail = new AtomicReference<Node>(new Node());

    public ClhSpinLock() {
        this.node = new ThreadLocal<Node>() {
            protected Node initialValue() {
                return new Node();
            }
        };

        this.prev = new ThreadLocal<Node>() {
            protected Node initialValue() {
                return null;
            }
        };
    }

    /**
     * 1.初始状态 tail指向一个node(head)节点 
     * +------+ 
     * | head | <---- tail 
     * +------+
     * 
     * 2.lock-thread加入等待队列: tail指向新的Node，同时Prev指向tail之前指向的节点
     * +----------+
     * | Thread-A |
     * | := Node  | <---- tail
     * | := Prev  | -----> +------+
     * +----------+        | head |
     *                     +------+ 
     * 
     *             +----------+            +----------+
     *             | Thread-B |            | Thread-A |
     * tail ---->  | := Node  |     -->    | := Node  | 
     *             | := Prev  | ----|      | := Prev  | ----->  +------+
     *             +----------+            +----------+         | head |
     *                                                          +------+ 
     * 3.寻找当前node的prev-node然后开始自旋
     * 
     */
    public void lock() {
        final Node node = this.node.get();
        node.locked = true;
        Node pred = this.tail.getAndSet(node);
        this.prev.set(pred);
        // 自旋
        while (pred.locked);
    }

    public void unlock() {
        final Node node = this.node.get();
        node.locked = false;
        //等同于出对操作
        this.node.set(this.prev.get());
    }

    @Override
    public void lockInterruptibly() throws InterruptedException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public boolean tryLock() {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean tryLock(long time, TimeUnit unit) throws InterruptedException {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public Condition newCondition() {
        // TODO Auto-generated method stub
        return null;
    }
    
    private static class Node {
        private volatile boolean locked;
    }
}

```
#### 条件对象的实现
条件对象的实现是通过链表来实现的，因为使用条件对象的时候必须获取到锁，所以在调用条件的对象的时候只是简单的把当前线程添加到条件对象的等待队列上。
signal唤醒等待在条件对象上的线程,将等待在条件对象上的线称移除条件对象的队列，让后再添加到clh队里中去


#### 公平锁与非公平锁
差别仅在一个线程第一次获取锁的时候，公平锁会首先查看阻塞队列里是否有线程挂起，如果没有就通过cas来尝试改变状态，如果有就将当前线程挂起到阻塞队列。
而非公平锁不管等待队列里面是否有线程，直接使用cas来尝试获取锁。

### CAS

### 中断线程
#### Thread类提供的中断方法
1. public static boolean interrupted 测试当前线程是否已经中断。线程的中断状态 由该方法清除。换句话说，如果连续两次调用该方法，则第二次调用将返回 false（在第一次调用已清除了其中断状态之后，且第二次调用检验完中断状态前，当前线程再次中断的情况除外）。
2. public boolean isInterrupted 测试线程是否已经中断。线程的中断状态不受该方法的影响。
3. public void interrupt() 中断线程。

#### 最佳实践，读《java核心技术卷2》记录
中断一个线程只是为了引起线程的注意，被中断的线程可以决定如何应对中断。某些线程很重要，以至于他们应该不理会中断，而是在抛出异常之后继续执行。但更普遍的一种方式情况是，一个线程将把中断的看作一个终止请求。这种线程的run方法遵循如下形式：
```
public void run() {
	
	try {
		while(!Thread.currentThread().isInterrupted && more work to do) {
			do more work
		}
	} catch(InterruptedException e) {
		//线程在调用sleep或wait的过程中被中断
	} finally {
		clean up
	}
}

```

如果在每次工作迭代之后都调用sleep方法，那么isInterrupted检查就不是必须的。如果在中断状态被置位时调用sleep方法，那么sleep方法会抛出InterruptedException异常。因此循环调用sleep，就要花点心思检查中断状态并捕获InterruptedException异常。这样的run方法形式如下:
```
public void run() {
	
	try {
		while(more work do to) {
			do more work
			Thread.sleep(delay);
		}
	} catch(InterruptedException) {
		//线程在调用sleep或wait的过程中被中断
	} finally {
		clean up
	}
}

```
注意当sleep方法抛出InterruptedException异常的时，它同时也会清除中断状态。
你会在很多发布的代码中发现InterruptedException异常被抑制在了一个很低的层次上，就像这样：
```
void muTask {
	try {
		sleep(delay);
	} catch(InterruptedException) {}//什么也不做
}
```
不要这样做！如果你不能很好的在catch语句中处理异常，那么你还有两个合理的选择：
1. 在catch语句中调用Thread.currentThread().interrupt()来设置中断状态。然后调用者就可以对其进行测试：
```
列子1
void muTask {
	try {
		sleep(delay);
	} catch(InterruptedException) {
		Thread.currentThread().interrupt()
	}
}
```
2. 或者，更好的选择是标记你的方法将抛出InterruptedException异常。

```
void parkAndInterrupt() {
	LockSupport.park(obj);
	if(Thread.interrupted()) {
		throw new InterruptedException();
	}
}

```

#### 注意事项
线程协调方法分两大类
1. 抛出InterruptedException异常的方法一般都会清楚中断状态。如sleep
2. 不抛出InterruptedException异常的方法，在中断发生时一般会返回，但是会保留中断状态标志位，这时候调用isInterrupted会返回true



### JIT编译器
-XX:+UnlockDiagnosticVMOptions
-XX:+PrintAssembly
-Xcomp
-XX:CompileCommand=dontinline,*Bar.main
-XX:CompileCommand=compileonly,*Bar.main
查看JIT编译器生成的汇编代码。

[jitwatch可以方便查看java代码，字节码，汇编代码](https://github.com/AdoptOpenJDK/jitwatch)