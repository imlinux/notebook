# Netty

## AbstractBootstrap

帮助类, 类似builder类, 用来配置和初始化channel, 其中实现类`ServerBootstrap`用来初始化和配置`ServerChannel`.

1. init
2. register
3. bind

## Channel

核心类

### AbstractNioChannel

持有`SelectionKey`, `EventLoop`, `pipeline`

## ChannelPipeline

打开这个类的源码, 有详细的介绍netty的io事件处理流程

### DefaultChannelPipeline

## EventLoopGroup

充当线程池的作用,包含多个EventLoop
接口包含主要有两类方法`next()`返回一个EventLoop, `register`注册一个Channel  
如: `NioEventLoopGroup`包含多个`NioEventLoop`

### EventLoop

代表一个线程, 调用execute()方法启动线程

## NioServerSocketChannel绑定过程


## 使用netty的注意事项

[netty资源回收约定](https://netty.io/wiki/reference-counted-objects.html)

