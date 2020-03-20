
# 基本用法

gradle init初始化当前目录，生成build.gradle以及其他配置文件

## [任务](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html)

gradle项目是有task来组成的，通过编写task来构建项目。 gradle附带了一些task库，可以方便使用。

```groovy

task hello {
    doLast {
        println 'Hello world!'
    }
}

```

### 任务依赖

```groovy

task taskX {
    dependsOn 'taskY'
    doLast {
        println 'taskX'
    }
}
task taskY {
    doLast {
        println 'taskY'
    }
}

执行taskX任务时taskY先执行
```

## 插件

task集合


## 配置国内

gradle/wrapper/gradle-wrapper.properties文件中添加属性`services.gradle.org=http\://downloads.gradle-dn.com`