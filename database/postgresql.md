PostgreSQL中的权限管理只有role的概念，任何role都可以作为user,group和role。


### postgresql认证方式


### 基本命令
1. 数据库role，默认超级用户是postgres，默认有一个数据库postgres
    1. `CREATE ROLE name;`
    2. `DROP ROLE name;`
    3. `createuser name`,`dropuser name`命令都是对ROLE的包装
    4. CREATE ROLE name SUPERUSER 创建超级用户
    
    
    
    