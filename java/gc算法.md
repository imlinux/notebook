# gc算法

## gc有三种基本的算法

1. 引用计数
   1. 不能清除循环引用的对象
2. 复制算法
   1. 堆需要分为from和to分区，速度快但是内存使用率低，因为from和to分区只能使用一个
   2. java 虚拟机的年轻代垃圾回收使用
3. 标记-清除
   1. 受堆规模的影响，堆越大gc时间越长
   2. java 虚拟机的年老代垃圾回收使用

## java中gc的实现

![](../.gitbook/assets/java_gc.png)

**?** 代表g1垃圾回收实现

## gc调节策略

1. -XX:MaxGCPauseMillis=n -XX:GCTimeRatio

