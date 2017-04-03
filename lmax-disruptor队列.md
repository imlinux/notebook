### 核心组件

1. Sequnce :类似AtomicLong，提供了解决伪共享的功能

2. Sequncer:　有一个bufferSize的参数。生产者和消费者以及队列，都会拥有一个Sequncer实例
   　　　`addGatingSequences` 用于添加消费者的Sequnce,当生产者将ringBuffer写满后等待消费者，可以充当限速的功能。

3. SequenceBarrier ：
   　　　用于通知消费者有数据可消费，与`addGatingSequences类似`， 消费者或队列的下游EventProcessor会持有SequenceBarrier来等待事件可用，
         SequenceBarrier需要3个Sequncer,分别是上游EventProcessor，下游EventProcessor，以及RingBuffer的Sequncer，只有下游的EventProcessor的Sequncer小于上游的Sequncer和RingBuffer的Sequncer下游的EventProcessor才会继续运行，否则会使用WaitStrategy策略阻塞，在阻塞的过程中会调用SequenceBarrier的checkAlert（）方法检查告警
         
4. Wait Strategy
5. EventProcessor继承Runnale, 添加了isRunning(), halt()等方法。代表一个线程。可以设置ExceptionHandler来处理异常
6. EventHandlerGroup, 一组EventProcessor
7. WaitStrategy


