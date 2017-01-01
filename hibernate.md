### Hibernate本地api
#### 使用hbm.xml定义映射关系
1. hibernate.cfg.xml为SessionFactory的配置文件，最基本的有数据源的定义，使用hibernate.cfg.xml的mapping元素配置hbm文件的位置
2. xxx.hbm.xml为映射文件，将业务类映射到数据库表
3. Session通过sessionFactory获得，用来curd业务对象
#### 使用hibernate本地的注解定义映射关系
1. hibernate.cfg.xml与使用hbm定义映射的唯一不同是使用hibernate.cfg.xml的class元素配置业务类
2. 业务类使用hibernate的注解来定义映射




