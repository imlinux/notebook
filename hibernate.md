### Hibernate和JPA api

#### 使用hbm.xml定义映射关系

1. hibernate.cfg.xml为SessionFactory的配置文件，最基本的有数据源的定义，使用hibernate.cfg.xml的mapping元素配置hbm文件的位置
2. xxx.hbm.xml为映射文件，将业务类映射到数据库表
3. Session通过sessionFactory获得，用来curd业务对象

#### 使用hibernate本地的注解定义映射关系

1. hibernate.cfg.xml与使用hbm定义映射的唯一不同是使用hibernate.cfg.xml的mapping元素的class属性配置业务类
2. 业务类使用jpa的注解来定义映射\(早期的版本使用hibernate自己的注解\)

#### 使用jpa的api

1. persistence.xml与hibernate.cfg.xml的作用类似定义数据源和jpa实现的配置，另外jpa规范指出persistence.xml必须放在META-INF/persistence.xml。
2. persistence-unit,psersistence.xml的一个子元素，包含一批实体的定义。
3. persistence.xml的class元素用于指定基于注解的实体类。
4. persistence.xml的mapping-file元素用于指定基于xml的实体。
5. properties,psersistence.xml的一个子元素,用于各种jpa实现的配置。
6. EntityManagerFactory和SessionFactory类似
7. EntityManager与Session类似
8. jpa只支持pojo实体不支持动态实体

#### hibernate动态实体

1. 使用Map作为实体类，但是必须使用hbm做定义

### Persistence Contexts

`org.hibernate.Session`API和`javax.persistence.EntityManager`API都代表一个持久化实体的上下文  
每个实体在Persistence Contexts和底层数据库都有一个状态：  
1. `transient`  
实体已经实例化，但是没有与任何一个Persistence Contexts关联，而且也不在数据库中存在  
2. `managed`, or `persistent`  
实体与Persistence Contexts相关连，额而且有可能已经存在数据库了  
3. `detached`  
实体有一个分配的id，但是不与Persistence Contexts相关连，  
4. `removed`  
实体有有一个分配的id，而且与一个Persistence Contexts相关连，但是计划从数据库中删除。

### 源码阅读

#### 启动hibernate相关代码

1. ServiceRegistry 包含hibernate启动和运行所需要的服务分别为ClassLoaderService，IntegratorService，StrategySelector
2. ClassLoaderService 类似classLoad的功能
3. StrategySelector 类似java的ServiceLoader，会注册各种服务例如：Dialect



