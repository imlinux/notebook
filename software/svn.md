### 基本操作

1. `svn info svn://server.com/svn/repository/trunk`
2. 创建分支
    \`\`\`svn cp svn://server.com/svn/repository/trunk \
   ```
            svn://server.com/svn/repository/branches/your_branch \
            -m "Branching from trunk to your_branch at HEAD_REVISION"
   ```

      \`\`\`
3. 切换分支

   ```
    svn switch --relocate \
      svn://server.com/svn/repository/trunk \
      svn://server.com/svn/repository/branches/your_branch
   ```

4. 更新  
    `svn update`



