## rpmbuild

### 宏指令

1. %setup

  默认情况下，即不加任何参数，%setup进入BUILD目录让后解压Source0指定的源文件，最后进入解压后的源文件目录。
  -n :指定源代码目录名，适用场景：默认情况下rpmbuild会假设源代码解压后的名字为name-version，但是有时源代码打包方式可能不符合这种要求，这时可以用-n来告诉rpmbuild解压后的名字。

  -c :解压之前先创建目录，适用场景：有的源码打包可能没有顶级目录，解压后就是一堆文件，这时就需要向创建目录然后将其解压到新建的目录中去。
  -D :不删除上次解压后的文件。
  -T :不执行默认操作.

  -b :指定解压Sourcen个源代码。一般会配合-T来使用。因为如果不加-T则先解压Source0然后再解压Source0
  -a :与-b选项类似，唯一的区别是-b是先解压再进入name-version，而-a是先进入name-version在解压。如果name-version不存在会报错。-a 选项一般需要配置-D选项防止前一个setup的解压的目录被删掉，也需要-T防止多次解压Source0。

2. 



### 相关资料
1. [rpm官方文档](http://rpm.org/documentation.html)
2. [max-rpm](http://rpm.org/max-rpm-snapshot/)

