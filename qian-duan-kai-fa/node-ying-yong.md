# Node应用

1. node 运行代码
2. npm  项目管理

## npm的使用

npm类似与maven,npm使用package.json来描述项目与maven的pom.xml类似 构建一个项目的步骤 1. npm init 生成package.json

```text
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
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

1. npm install 包名，会将依赖的包下载到项目里，同时会在dependencies中添加
2. npm install --save-dev 包名，与npm install 的区别是它将依赖的包信息加在dependencies
3. npm install 下载项目依赖的包
4. scripts里面可以定义一些常用的命令，然后就可以直接使用npm run start来运行的，

