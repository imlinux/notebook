python使用**缩进**来替代**{}**形成代码块


### 创建变量

```
v1=100;
v2="hello"
```

### 类型转换

```
v1 = float('100.0')
v2 = int('100')
v3 = str(100)

type(v1);//可以知道变量的类型
```

### 逻辑运算

python 没有&&，||，!
而是用and,or来代替

### 分支语句

1. if
```
a=100
b=100
if a==b:
    print "a==b"
elif a>b:
    print "a>b"
else:
    print "else"

```

### 循环

1. for循环
```
    //循环打印数组
    for i in [1,2,3,4,5]:
        print i
        
    //使用range()函数,range还有其他参数，请参考手册
    for i in range(1,1000):
        print i
```

2. while循环


