#### 接口
1. IDatabase.h
默认使用DatabaseOrdinary.h
2. IStorage代表一个表



#### SQL解释
Lexer扫描输入文本为Tokens, Parser将Tokens解析为Ast，解释器使用Ast生成执行流

##### Token
Token有三个字段，分别为begin, end, type， begin和end分别代表字符串的开始和结束

##### 解析器(parser),读取sql生成ast
1. 接口 IParser
##### 解释器，输入ast生成执行流


1. dbms/src/Interpreters/executeQuery.cpp#executeQuery
