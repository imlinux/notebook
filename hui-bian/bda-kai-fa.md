# Bda开发

## Pfring

1. 
## JPfring

1. 减少jni api的使用，换用Unsafe来访问c结构体。
   1. 使用jmh作基准测试来说明原因
   2. 简单介绍Unsafe
   3. 使用cmalloc来分配内存，使用Bytebuffer来访问获得的内存，目的减少java heap的使用，减少gc带来的影响
   4. 使用jemalloc分配内存。

### LMAX Disruptor环形队列

1. 无锁队列
2. 线程协调

