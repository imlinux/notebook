## 基本用法

```java

String resource = "org/mybatis/example/mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);


SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

//执行绑定到此接口的sql语句
Blog blog = session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);
```

## 源码阅读

### Configuration类

由XMLConfigBuilder解析xml配置文件后生成  

```java

XMLConfigBuilder parser = new XMLConfigBuilder(reader, environment, properties);

Configuration configuration = parser.parse();

```


#### 解析mapper


```xml
<mappers>
  <mapper resource="org/mybatis/builder/AuthorMapper.xml"/>
  <mapper resource="org/mybatis/builder/BlogMapper.xml"/>
  <mapper resource="org/mybatis/builder/PostMapper.xml"/>
</mappers>

<mappers>
  <mapper url="file:///var/mappers/AuthorMapper.xml"/>
  <mapper url="file:///var/mappers/BlogMapper.xml"/>
  <mapper url="file:///var/mappers/PostMapper.xml"/>
</mappers>
```

解析resource和url类的mapper使用XMLMapperBuilder来解析xml文件  

select, insert, update, delete标签由XMLStatementBuilder解析, 如果是静态sql语句, sql被解析为StaticSqlSource对象

```xml
<mappers>
  <mapper class="org.mybatis.builder.AuthorMapper"/>
  <mapper class="org.mybatis.builder.BlogMapper"/>
  <mapper class="org.mybatis.builder.PostMapper"/>
</mappers>

```

解析class类使用


```xml
<mappers>
  <package name="org.mybatis.builder"/>
</mappers>
```

解析package类使用
