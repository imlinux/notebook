### 工具
1. node 运行代码
2. npm  项目管理

#### npm的使用
npm类似与maven,npm使用package.json来描述项目与maven的pom.xml类似
构建一个项目的步骤
1. npm init 生成package.json
```
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^1.15.1"
  },
  "dependencies": {
    "node-mime": "^1.0.0",
    "ws": "^4.1.0"
  }
}
```