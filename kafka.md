#### 核心类

1. KafkaConfig
2. LogConfig
3. KafkaServer: kafka的入口，持有所有组件实例,如：kafkaScheduler线程池，zkUtils，LogManager，SocketServer
4. LogManager: kafka日志个管理子系统， 负责日志的创建，检索，和清理，这些操作实际是是会委托给Log实例.
主要方法`loadLogs`
5. Log: 维护一个topic的一个分区

#### 功能

1. broker.id
   kafka会在`log.dirs`里面记录自己的broker.id,可以查看`log.dirs`中的`meta.properties`，通过将broker.id设置为-1,`broker.id.generation.enable`设置为`true`
   就可以让kafka自动生成brokerId.

#### 可以参考的实现

1. SocketServer 异步IO的实现



