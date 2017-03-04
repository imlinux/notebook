#### 基本概念

1. 物理卷Physical volume (PV):
    可以在上面建立卷组的媒介，可以是硬盘分区，也可以是硬盘本身或者回环文件（loopback file）。物理卷包括一个特殊的header，其余部分被切割为一块块物理区域
2. 卷组Volume group (VG)：
    将一组物理卷收集为一个管理单元。
3. 逻辑卷Logical volume (LV):
    建立在VG上，作为一个分区使用。
    
    
#### 基本操作命令

1. 创建物理卷（PV）:
    1. `lvmdiskscan`  列出可被用作物理卷的设备
    2. `pvcreate DEVICE` 在列出的设备上创建物理卷
    3. `pvdisplay` 查看已创建好的物理卷
    
    

#### 相关资料
    