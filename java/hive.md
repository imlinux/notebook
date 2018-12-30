### 入口

HiveServer2#startHiveServer2


### 服务端核心类

**HiverServer2**实例化CLIService和ThriftHttpCLIService \
**ThriftHttpCLIService**负责通信,通过调用CLIService来响应客户端请求
**CLIService**


### 认证和授权
1. AuthenticationProviderFactory
	1. HiveAuthenticationProvider身份验证
2. 登录认证在ThriftHttpServlet配置和认证
3. 登录认证分两大分之
	1. 通过用户名密码来认证
	2. 通过kerberos来认证
4. 在编译sql语句的时候会认证是否有响应的权限，在org/apache/hadoop/hive/ql/Driver.java的doAuthorization的方法内使用
5. HiveAuthorizationProvider授权
	1. 

6. 配置认证和授权的类SessionState#setupAuth


1. 认证部分分两大快
	1. rpc认证
		1. rpc认证在ThriftHttpServlet里面配置和使用
	2. 后端执行模块认证
2. 后端模块认证和授权在SessionState#setupAuth配置
2. 后端授权模块在org/apache/hadoop/hive/ql/Driver.java的doAuthorization的方法内使用
	



### ThriftHttpServlet
1. 加了认证过程，之后的处理交给TServlet来设置processor


### ThriftHttpCLIService/ThriftCLIService

1. RPC接口


### CLIService
1. 核心类，处理会话，执行语句

#### SessionManager

### ExecuteStatementOperation

1. 判断是hive命令还是sql语句
2. hive命令HiveCommandOperation
3. sql语句SQLOperation

### HiveCommand
1. SET
2. RESET
3. DFS
4. CRYPTO
5. ADD
6. LIST
7. RELOAD
8. DELETE
9. COMPILE


### Hive操作meta的工具类