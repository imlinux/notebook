
### java集合

1. ArrayList基于数组，add的时候数组长度不够的时候会通过System.arraycopy扩张,remove的时候会收缩同样使用System.arraycopy来移动元素。
2. LinkedList基于链表



### 多线程
1. java内存模型，happen-before规则。


### 设计模式

#### 单例模式

1. 主要注意线程安全的问题
2. 最佳实践
    ```
    
    /**
    *使用静态内部类：一个类直到被使用时才被初始化。
    *
    */
    public class Singleton {  
      
      private Singleton() {}  
      
      // Lazy initialization holder class idiom for static fields  
      private static class InstanceHolder {  
       private static final Singleton instance = new Singleton();  
      }  
      
      public static Singleton getSingleton() {   
        return InstanceHolder.instance;   
      }  
    }
    
    
    /**
    *稍微复杂些
    *使用volatile来解决
    *
    */
    
    public class LazySingleton {  
    private int someField;  
      
    private volatile static LazySingleton instance;  
      
    private LazySingleton() {  
        this.someField = new Random().nextInt(200)+1;         // (1)  
    }  
      
    public static LazySingleton getInstance() {  
        if (instance == null) {                               // (2)  
            synchronized(LazySingleton.class) {               // (3)  
                if (instance == null) {                       // (4)  
                    instance = new LazySingleton();           // (5)  
                }  
            }  
        }  
        return instance;                                      // (6)  
    }  
      
    public int getSomeField() {  
        return this.someField;                                // (7)  
    }  
   }
   
   ```