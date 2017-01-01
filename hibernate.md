### Hibernate本地api

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

3. properties,psersistence.xml的一个子元素,用于各种jpa实现的配置。
4. EntityManagerFactory和SessionFactory类似
5. EntityManager与Session类似
6. jpa只支持pojo实体不支持动态实体


#### hibernate动态实体

1. 使用Map作为实体类，但是必须使用hbm做定义



