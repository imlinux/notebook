

## RpcServer(负责通信)
1. Listener
	1. Reader, Listener线程管理n个Reader线程， listener负责accept一个socket, 初始化为Connection后，通过Selector传递给Reader线程  
		Reader将请求封装为Call对象，交给RpcScheduler


2. RpcScheduler处理完Call对象后通知Responder线程

3. Responder 从Connection中的responseQueue队列中取出Call对象返回给Client

## rpc处理实现
### RSRpcServices

### MasterRpcServices

## 进程入口
### HRegionServer

### HMaster


## coprocessors
1. AccessController

###coprocessorHost负责管理，加载，调用coprocessors
1. MasterCoprocessorHost
    加载hbase.coprocessor.master.classes
2. RegionCoprocessorHost
	加载hbase.coprocessor.region.classes，hbase.coprocessor.user.region.classes，以及表结构中指定的coprocessors
3. RegionServerCoprocessorHost
	加载hbase.coprocessor.regionserver.classes
4. WALCoprocessorHost
	加载hbase.coprocessor.wal.classes相关类


### CoprocessorService
可以扩展rpc接口



## HRegion 管理一个表， RegionScanner负责读取，写数据方法入口mutateRow。
1. HStore 保存一个列族，KeyValueScanner负责读取
  1. DefaultMemStore 保存一些Cell，会定时刷新到磁盘上面，内部使用ConcurrentNavigableMap来保存数据
2. StoreFile		，StoreFileScanner负责读取,StoreFile会管理多个Hfile,所以会有多个StoreFileScanner


3. HRegion#initializeRegionInternals调用initializeStores初始化Hstore
4. HRegion#getScanner调用instantiateRegionScanner实例化RegionScanner，RegionScannerImpl内部使用KeyValueHeap，KeyValueHeap内部使用从Store获取的KeyValueScanner
5. KeyValueScanner代表每一列

## Comparator
1. KeyValue.KVComparator
2. 

## hbase过滤
1. KeyOnlyFilter
2. 


## 访问控制
1. AccessController
2. AccessControlLists
3. hbase的超级用户和运行服务端进程的当前用户拥有所有权限，参见TableAuthManager#initGlobal方法
4. /hbase/acl/tablename节点保存的是（用户， 权限列表）
5. MasterRpcServices#getSecurityCapabilities,将AccessController写死，导致自定义AccessController时不能使用grant,revoke等命令

```
  @Override
  public SecurityCapabilitiesResponse getSecurityCapabilities(RpcController controller,
      SecurityCapabilitiesRequest request) throws ServiceException {
    SecurityCapabilitiesResponse.Builder response = SecurityCapabilitiesResponse.newBuilder();
    try {
      master.checkInitialized();
      Set<Capability> capabilities = new HashSet<>();
      // Authentication
      if (User.isHBaseSecurityEnabled(master.getConfiguration())) {
        capabilities.add(Capability.SECURE_AUTHENTICATION);
      } else {
        capabilities.add(Capability.SIMPLE_AUTHENTICATION);
      }
      // The AccessController can provide AUTHORIZATION and CELL_AUTHORIZATION
      if (master.cpHost != null &&
            master.cpHost.findCoprocessor(AccessController.class.getName()) != null) {
        if (AccessChecker.isAuthorizationSupported(master.getConfiguration())) {
          capabilities.add(Capability.AUTHORIZATION);
        }
        if (AccessController.isCellAuthorizationSupported(master.getConfiguration())) {
          capabilities.add(Capability.CELL_AUTHORIZATION);
        }
      }
      // The VisibilityController can provide CELL_VISIBILITY
      if (master.cpHost != null &&
            master.cpHost.findCoprocessor(VisibilityController.class.getName()) != null) {
        if (VisibilityController.isCellAuthorizationSupported(master.getConfiguration())) {
          capabilities.add(Capability.CELL_VISIBILITY);
        }
      }
      response.addAllCapabilities(capabilities);
    } catch (IOException e) {
      throw new ServiceException(e);
    }
    return response.build();
  }

  3. 单元格级别的访问控制需配置VisibilityController

```

## hbase加密
1. 整个集群有一个主密钥
2. 可以单独为一个列组设置一个密钥。
3. 内置实现可以查看HStore源码
4. 集群运行时不能修改

## 方案1
查看Hstore方法想办法实例化StoreScanner，StoreScanner应该是主要用过滤的方法

## 方案2
## 查看hbase自己的加密实现

## 方案3
## 使用RegionObserver

## Client

1. RpcClient负责与服务端交互
   由RpcClientFactory创建org.apache.hadoop.hbase.ipc.BlockingRpcClient


## 资料

1. Protocol Buffers
	1. [入门](https://dzone.com/articles/using-googles-protocol-buffers-with-java)
	1. [定义rpc](https://developers.google.com/protocol-buffers/docs/reference/java-generated#service)
