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

###### ServiceRegistry 注册各种所需的服务，起到类似spring的IOC容器的作用，方便模块化，解偶。

1. 实现类有：
   BootstrapServiceRegistryImpl，使用BootstrapServiceRegistry空接口做标记，包含三个hibernate服务分别为ClassLoaderService，IntegratorService，StrategySelector。
   StandardServiceRegistryImpl，使用StandardServiceRegistry空接口做标记，依赖BootstrapServiceRegistry中的三个服务，StandardServiceRegistry主要负责注册更多hibernate的标准服务，同时保存hibernate.cfg.xml对应的jaxb对象。注意BootstrapServiceRegistry与StandardServiceRegistry为父子关系，getService\(\)先查询StandardServiceRegistry如果没有发现，就会查询BootstrapServiceRegistry。
2. ServiceRegistry中的服务
   ClassLoaderService 类似classLoad的功能StrategySelector 类似java的ServiceLoader，会注册各种服务例如：Dialect，这三个服务存在于BootstrapServiceRegistry中，其他的服务参考StandardServiceInitiators。

#### 临时记录

1. `AvailableSettings`：包含hibernate的属性名
2. `Environment`:hibernate属性文件分为SessionFactory级别的和System级别的，SessionFactory级别的配置会覆盖System级别的配置，Environment负责系统级别的配置，它保存的就是System.getProperties\(\)，同时如果定义了hibernate.properties，则此文件中的属性会覆盖System.getProperties\(\)
3. `ServiceRegistry`:有分层关系，其中BootstrapServiceRegistryImpl为根，提供最基本的3中服务，StandardServiceRegistryImpl为第二级，提供hibernate的标准服务。
4. `StandardServiceRegistryBuilder`:用来构建StandardServiceRegistryImpl，其中`configure`方法读取hibernate.cfg.xml，使用JAXB技术解析xml
   1. `ConfigLoader`:用来解析hibernate.cfg.xml
   2. `LoadedConfig`:用来保存解析的结果
   3. `settings`: 字段用来保存属性文件，它用Environment的属性文件初始化然后被hibernate.cfg.xml中的properites元素定义的内容覆盖。
   4. `aggregatedCfgXml`: 是LoadedConfig类型，保存了hibernate.cfg.xml定义的配置
5. `MetadataSources`:用来添加hbm文件和实体类
   1. `serviceRegistry`字段
   2. `xmlMappingBinderAccess`字段，类型为`XmlMappingBinderAccess`使用Jaxb处理hbm文件
6. `XmlMappingBinderAccess`:MetadataSources内部使用
7. `MetadataBuilderImpl`: 由MetadataSources内部使用，用来构建MetaData
   1. `sources`:字段，对MetadataSources的引用
   2. `options`:字段，MetadataBuildingOptionsImpl类型。
   3. `build`：方法，


