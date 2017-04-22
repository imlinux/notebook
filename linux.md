### 配置ntp服务

1. 服务端配置

   权限设置

   ```
   restrict default kod nomodify notrap nopeer
   restrict -6 default kod nomodify notrap nopeer
   ```
   
### linux 动态库路径配置（3中方法）
1. 在配置文件 /etc/ld.so.conf 中指定动态库搜索路径。每次编辑完该文件后，都必须运行命令 ldconfig 使修改后的配置生效
2. 通过环境变量 LD_LIBRARY_PATH 指定动态库搜索路径。
3. 在编译目标代码时指定该程序的动态库搜索路径。

**注**：
搜索动态库的先后顺序  
编译目标代码时指定的动态库搜索路径  
LD_LIBRARY_PATH  
/etc/ld.so.cache  
default path /lib, and then /usr/lib.
   
#### 备份/还原 操作系统

1. `sudo dd if=/dev/sdb of=/media/dong/Elements/w7.dd bs=4k conv=notrunc,noerror,sync`
2. `sudo dd if=w7.dd of=/dev/sdb`

#### 移动/切换home分区
1. 	`cp -ax /home  /new_home`





