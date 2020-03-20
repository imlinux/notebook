# Jetty

## 特点/理念

1. 容器`Container`和生命周期`LifeCycle`

   每个主要的组件都会作为一个容器，来管理那些实现`LifeCycle`的子组件。

## 核心类

1. Server
2. ServerConnector
3. SelectorManager
4. ManagedSelector

### SelectorManager/ManagedSelector

SelectorManager管理ManagedSelector  
服务端每accept一个Channel就调用SelectorManager#accept方法

```

	public void accept(SelectableChannel channel, Object attachment)
	{
	    final ManagedSelector selector = chooseSelector();
	    selector.submit(selector.new Accept(channel, attachment));
	}

```

提交Accept实例后, 后续ManagedSelector线程会调用Accept#update方法

Accept是ManagedSelector的一个内部类
Accept中的两个主要的方法
```

    @Override
    public void update(Selector selector)
    {
        try
        {
            key = channel.register(selector, 0, attachment);
            execute(this);
        }
        catch (Throwable x)
        {
            closeNoExceptions(channel);
            _selectorManager.onAcceptFailed(channel,x);
            LOG.debug(x);
        }
    }

    @Override
    public void run()
    {
        try
        {
            createEndPoint(channel, key);
            _selectorManager.onAccepted(channel);
        }
        catch (Throwable x)
        {
            LOG.debug(x);
            failed(x);
        }
    }


```

每个ManagedSelector实例包装了一个Selector, 循环获取并处理io事件

### Connection/EndPoint

Connection实例与EndPoint实例关联，EndPoint实例处理io事件，当有数据可读时通知Connection来处理这些数据。  
常见的Connection实现是覆盖onOpen方法，在onOpen方法里调用EndPoint#fillInterested来设置Connection感兴趣的事件。

