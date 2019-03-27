
## 源码阅读

### 入口Node

代表es集群中的一个节点

### Settings

对Map<String, Object>的封装，只读，添加了一些工具方法，如:getAsFloat， getAsBoolean。。。  
也可以直接读取文件构建

### Environment

1. 配置信息
2. 路径信息

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

#### Transport

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
:TransportAction#execute;
end
```

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

绑定scoket  