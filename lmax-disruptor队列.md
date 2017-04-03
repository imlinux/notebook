### 核心组件

1. Sequnce :类似AtomicLong，提供了解决伪共享的功能

2. Sequncer:　供RingBuffer使用，有一个bufferSize的参数。  
   　　　`addGatingSequences` 用于添加消费者的Sequnce,当生产者将ringBuffer写满后等待消费者，可以充当限速的功能。

3. Sequece Barrier 
   　　　用于通知消费者有数据可消费，与`addGatingSequences类似`
4. Wait Strategy
5. EventProcessor继承Runnale, 添加了isRunning(), halt()等方法。代表一个线程。可以设置ExceptionHandler来处理异常



