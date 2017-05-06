## reactive-streams

#### 核心接口和实现

1. Publisher
只有一个`subscribe`方法，参数是`Subscriber`调用`subscribe`后Publisher会回调Subscriber的`onSubscribe`方法，Publisher内部会构建一个Subscription
传递给onSubscribe
2. Subscriber
在onSubscribe方法内部会调用`Subscription`的`request`方法，而request方法内部会调用Subscriber的`onNext`,`onError`和`onComplete`方法
3. Subscription
每一个Subscription实例对应一个Subscriber实例
