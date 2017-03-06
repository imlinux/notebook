
### 基本命令

PostgreSQL中的权限管理只有role的概念，任何role都可以作为user,group和role。

1. 数据库role，默认超级用户是postgres
    1. `CREATE ROLE name;`
    2. `DROP ROLE name;`
    3. `createuser name`,`dropuser name`都是对ROLE的包装
    