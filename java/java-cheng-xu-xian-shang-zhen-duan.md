# java程序线上诊断

## jdk工具

### 监控工具

#### jps

列出java进程

#### jstat 统计工具

jstat的选项分为两大类，一类是统计选项，可以通过命令jstat -options 查看所有的统计选项，一类是输出选项。 [官方文档](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jstat.html)

### 故障诊断工具

#### jinfo

打印出指定java进程的**属性信息**和**启动参数**

#### jmap

1. dump内存快照
2. 查看heap配置信息，如最大，最小堆内存
3. [官方文档](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jmap.html)

#### jhat

查看内存快照，这个工具比较简陋，可以使用eclipse MemoryAnalyzer 工具

#### jstack

打印出java线程的堆栈信息，[官方文档](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jstack.html)



