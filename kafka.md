#### 核心类

##### KafkaConfig，LogConfig
##### KafkaServer
kafka的入口，持有所有组件实例,如：kafkaScheduler线程池，zkUtils，LogManager，SocketServer




##### LogManager 
kafka日志个管理子系统， 负责日志的创建，检索，和清理，这些操作实际是是会委托给Log实例.
主要方法`loadLogs`,`startup 可以看到启动的一些后台线程`,`logs字段`

Log: 维护一个topic的一个分区,有多个LogSeament实现， 持有`segments  ConcurrentNavigableMap[java.lang.Long, LogSegment]`，键为每个每个段在分区中的开始位置。

LogSegment


##### MetadataCache
集群中的每个节点都维护一份相同的MetadataCache，可以加速Topic的元数据查询，如：一个topic的分区的leader在哪个节点上

##### SocketServer
线程模型：
1个Acceptor 负责accept连接,然后将socket分发给Processor
N个Processor  使用kafka封装过的Selector来发送接收数据。接受请求，然后将请求分发给KafkaRequestHandler，
M个KafkaRequestHandler 处理请求，然后将响应交给Processor来发出去

1. Selector（kafka自己实现的）  完成异步io操作，包括connection和distinction
2. KafkaChannel 封装了传输层
3. RequestChannel作为数据通道，Processor和KafkaRequestHandler使用KafkaChannel来分发请求和响应

##### KafkaApis

##### KafkaRequestHandlerPool



#### 功能

1. broker.id
   kafka会在`log.dirs`里面记录自己的broker.id,可以查看`log.dirs`中的`meta.properties`，通过将broker.id设置为-1,`broker.id.generation.enable`设置为`true`
   就可以让kafka自动生成brokerId.

#### 可以参考的实现

1. SocketServer 异步IO的实现



