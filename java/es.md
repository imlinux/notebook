
## 源码阅读

### 入口Node

代表es集群中的一个节点

### Settings

对Map<String, Object>的封装，只读，添加了一些工具方法，如:getAsFloat， getAsBoolean。。。  
也可以直接读取文件构建

### Environment

1. 配置信息
2. 路径信息

### NodeEnvironment

保存单个节点的所有数据路径

### PluginsService

1. 从moudle和plugin目录中读取插件, 其他类使用PluginsService来查询插件信息，以及获取插件类
2. 添加插件的配置

### ThreadPool

1. Executor的集合，每类服务有一个单独的Executor.

### ActionModule

### NodeClient

ES节点服务汇总对象，通过http和非http协议将服务暴露出去。  
nodeClient内部维护`Map<GenericAction, TransportAction> actions`,每种服务都对应一种GenericAction，以及相关的处理器（TransportAction）。  

### NetworkModule

### NetworkService

有两个方法, 负责命名解析

1. resolveBindHostAddresses
2. resolvePublishHostAddresses

#### Transport

集群内部的节点通信使用，[官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-transport.html)

Netty4Transport  

```plantuml
start
:Request;
partition initChannel {
:ESLoggingHandler logging;
:Netty4SizeHeaderFrameDecoder size;
:Netty4MessageChannelHandler dispatcher;
}
:Netty4Transport#inboundMessage;
:Netty4Transport#messageReceived;
:Netty4Transport#handleRequest;
:TransportRequestHandler#messageReceived;
note right: 每个TransportAction在构造函数中都会调用Transport#registerRequestHandler注册一个TransportRequestHandler
:TransportAction#execute;
end
```

#### TransportRequestHandler注册

1. ActionModule
2. MembershipAction
3. PublishClusterStateAction

#### HttpServerTransport

Netty4HttpServerTransport  

```plantuml
start
:Request;
:Netty4OpenChannelsHandler;
:ReadTimeoutHandler;
:HttpRequestDecoder;
:HttpContentDecompressor;
:HttpResponseEncoder;
:HttpObjectAggregator;
:Netty4HttpRequestHandler;
:RestController;
:RestHandler;
:TransportAction#execute;
end
```

#### TransportInterceptor

### TransportService

使用Transport来通信, 实现业务代码

### NodeConnectionsService

负责管理本地节点与远程节点的连接

### DiscoveryModule

#### Discovery

1. 加入集群
2. Master选举
3. 如果所在的节点是master, 处理加入集群请求

 加入集群请求处理流程

```plantuml
start
:Join Request;
:MembershipAction#JoinRequestRequestHandler#messageReceived();
:ZenDiscovery#MembershipListener#onJoin();
:ZenDiscovery#handleJoinRequest;
end

```

#### NodeJoinController


#### ElectMasterService

选举Master

### 集群状态，元数据，配置服务

#### ClusterService

#### MasterService

#### PublishClusterStateAction

### IndicesService

#### IndexService

代表一个索引