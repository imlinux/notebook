#### 主要源码文件
dbms/src/Server/Server.cpp#main,数据库的入口
dbms/src/Interpreters/executeQuery.cpp#executeQuery执行sql的入口


#### 调用流程

dbms/src/Server/HTTPHandler.cpp#processQuery
    dbms/src/Interpreters/executeQuery.cpp#executeQuery
        dbms/src/Interpreters/executeQuery.cpp#executeQueryImpl         //executeQueryImpl(begin, end, context, false, QueryProcessingStage::Complete);  
                   


#### 接口/实现
1. IDatabase.h
默认使用DatabaseOrdinary.h
2. IStorage代表一个表
3. Block容器，包含多个列数据以及对应的元数据
4. IBlockInputStream/IBlockOutputStream输入或输出的单元为Block
5. DatabaseFactory创建数据库对象
6. IColumn 保存列数据与IDataType配合使用，IDataType负责将IColumn中的数据序列话到文件中或将文件中的数据反序列化到IColumn中

#### Storage
读写以`Block`为单位
##### StorageLog
1. __marks.mrk文件
因为目前没有null类型所以写入的时候所有的列要有数据。
每写入一个Block都会依次记录每一列的`Mark`信息。
所以mrk文件用来记录`Block`在个各个列文件中的偏移地址和这个`Block`有多少行

```
struct Mark
{
    size_t rows;    /// How many lines are contained in this set and all previous ones.
    size_t offset;  /// The offset to the set in the compressed file.
};
```






#### SQL解释
Lexer扫描输入文本为Tokens, Parser将Tokens解析为Ast，解释器(Interpreter)使用Ast生成执行流

##### Token
Token有三个字段，分别为begin, end, type， begin和end分别代表字符串的开始和结束

##### 解析器(parser),读取sql生成ast
1. 接口 IParser
##### 解释器，输入ast生成执行流


1. dbms/src/Interpreters/executeQuery.cpp#executeQuery
