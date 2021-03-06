# Python

python使用**缩进**来替代**{}**形成代码块

## 创建变量

```text
v1=100;
v2="hello"
```

## 类型转换

```text
v1 = float('100.0')
v2 = int('100')
v3 = str(100)

type(v1);//可以知道变量的类型
```

## 逻辑运算

python 没有&&，||，!  
而是用and,or来代替

## 分支语句

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

## 循环

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

`while`

## 容器类型

### 列表list`l1 = [1,2,3,4,5,6]`

1. **列表可以同时保存不同类型的数据** `l2 = [1,2,3,4,5,'hello'];`
2. 向列表增加元素

   ```text
   l1.append(100);
   l1.extend(100);//向末尾添加多个元素
   l1.insert(2,100);
   ```

3. 修改元素 `l1[0]=100`
4. 删除元素

   ```text
   l1.remove(100)
   l1.pop();从最后一个位置取出
   del l1[0]
   ```

5. 获得保存在列表中的数据 `l1[0];`
6. 列表切片

   ```text
   l1[1:4]
   //切片简写
   l1[:4]
   l1[2:]
   l1[:]//获得一个copy
   ```

7. 搜索列表  
   1. 查询元素是否在里表中

   ```
    100 in l1
   ```

   1. 查询元素在列表中的位置

      `l1.index(100)`

8. 列表排序

   ```
   l1.sort()
   l1.reverse()
   //不修改原始的列表，返回排好序的列表
   sorted(l1);
   ```

### 双重列表

```
l1 = 
[
    [1,2,3],
    [11,22,33]
    [111,222,222]
]
```

### 元组tuple`(1,2,3,4,5,6)`

元组创建后就不能再改变了。

### 字典`{}`

1. 创建字典

   ```
   m1 = {}
   m2 = {'a': 100, 'b': 200}
   ```

2. 添加/修改

   ```
   m1['a']=100;
   m1['b']=200;
   ```

3. 删除

   ```
   del m1['a']
   m1.clear();
   ```

4. 搜索key是否在

   ```
   'a' in m1;
   ```

5. 字典常用的方法

   ```
   m1.keys()
   m1.values()
   ```

6. 排序

   ```
   for key in sorted(m1.keys()):
    print key
   ```

7. 注意事项 字典的键只能使用**不可变类型**如：布尔，整数，浮点，字符

### 函数

1. 定义函数

   ```
    def sayHello():
        print 'hello` 

    def greet(message):
        print message;

    def add(a1,a2):
        return a1+a2;
   ```

2. 作用域

   ```
   a=100//全局变量
   def add(v):
       return a+v;
   a=add(1);//a==101

   //在函数内部修改全局变量
   def add(v):
       global a=101;
       reutrn a+v;
   add(1);
   print a;
   ```

3. **可修改类型**默认为**引用**，**不可修改类型**为**值传递**

   ```
   a=[1,2,3,4,5]
   def add(a):
       a.append(6);  
   add(a);
   print a;
   ```

## 类/对象

1. 定义类

   ```
   class C1:
      def m1(self):
         print self
   ```

2. 创建对象

   ```
      o1 = C1();
   ```

3. 定义属性

   ```
      o1.name="o1";
   ```

4. 构造方法

   ```
   __init()__
   __init(a1,a2)__
   ```

   **一般构造方法用于设置属性和初始化值**

5. 多态和继承

   ```
   class C1:
      def m1(self):
         print "c1"

   class C2(C1):
      def m1(self):
         printf("c2");
   ```

6. 注意事项

   ```
   类的方法必须定义self参数 
   class C1:
      def m1(self):
         print self

   o1 = C1();
   o1.c1()等价与C1.m1(o1)
   ```

## 模块/包

模块就是一个普通的python文件

```
   # this is the file "my_module.py"
   # we're going to use it in another program
      def c_to_f(celsius):
      fahrenheit = celsius * 9.0 / 5 + 32
      return fahrenheit

   创建另一个使用my_module.py的python文件

   import my_module ;
   my_module.c_to_f(1);
```

## 文件输入输出

1. 读取文件

```
my_file = open('/home/dong/1.txt', 'r');
my_file.readlines();
my_file.close();
```

1. 写文件

   `my_file.write("hello")`

2. 序列化对象

```
import pickle;

my_list = [1,2,3]

pickle.dump(my_list, my_file);
```

1. 反序列化

```
import pickle;
my_list = pickle.load(my_file);
```

## ipython
### 魔术命令（Magic command）
以%号开头的命令
1. %paste， %cpaste运行剪切板上的python代码
2. %quickref, %magic查看魔术命令的手册


## NumPy

## matplotlib


## pandas





[python 2.7 lib reference](https://docs.python.org/2/library/index.html)

## Python3与python2.7的差异

### 工具

反编译工具uncompyle6，`sudo pip install uncompyle6`

