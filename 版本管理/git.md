
## 阅读[Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)的笔记

1. HEAD指向的是当前分支中的当前版本

### 版本回退

1. `git reset --hard HEAD^`回退到当前版本的上一个版本
2. 如果想还原到最新的版本可以使用 `git reflog`查看commit id 然后再使用`git reset --hard 对应的commit id`

### 撤销修改

1.当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
2.当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。
3.git checkout -- file将工作区中的文件还原为暂存区中的版本，如果暂存区没有，就还原为HEAD版本

### git修改远程仓库url，方法有三种

1. 直接修改`git remote set-url origin [url]`
2. 先删后加
	1. git remote rm origin
	2. git remote add origin [url]

3. 直接修改.git/config文件

### 清理未跟踪的文件和目录

1. git clean -f 清理文件
2. git clean -f -d或git clean -fd清理文件和目录

### git中文编码

1. git config --global core.quotepath false

git ssh代理配置

```text
git config --global http.proxy 'socks5://127.0.0.1:1080' 
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

