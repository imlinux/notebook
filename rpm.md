## rpmbuild

### 宏指令

1. %setup

  默认情况下，即不加任何参数，%setup进入BUILD目录让后解压Source0指定的源文件，最后进入解压后的源文件目录。
  -n :指定源代码目录名，适用场景：默认情况下rpmbuild会假设源代码解压后的名字为name-version，但是有时源代码打包方式可能不符合这种要求，这时可以用-n来告诉rpmbuild解压后的名字。


