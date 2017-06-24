### 特点/理念
1. 容器`Container`和生命周期`LifeCycle`
每个主要的组件都会作为一个容器，来管理那些实现`LifeCycle`的子组件。

### 核心类
1. Server
2. ServerConnector
3. SelectorManager
4. ManagedSelector

####Connection/EndPoint
Connection实例与EndPoint实例关联，EndPoint实例处理io事件，当有数据可读时通知Connection来处理这些数据。
常见的Connection实现是覆盖onOpen方法，在onOpen方法里调用EndPoint#fillInterested来设置Connection感兴趣的事件。