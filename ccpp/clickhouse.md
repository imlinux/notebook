#### 接口
1. IDatabase.h
默认使用DatabaseOrdinary.h
2. IStorage代表一个表



#### SQL解释

##### 解析器(parser),读取sql生成ast
##### 解释器，输入ast生成执行流


1. dbms/src/Interpreters/executeQuery.cpp#executeQuery
