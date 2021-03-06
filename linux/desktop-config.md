# Desktop Config

## x相关的组件

1. display manager   \(dm\)

   **对于ubuntu和其衍生版**可以通过`/etc/X11/default-display-manager`修改使用哪一个DM

2. window manager   \(wm\)
3. destop environment \(de\)
4. `/usr/share/xsessions/`让gdm可以识别桌面环境，里面存放了启动桌面环境的命令

## ubuntu 使用swapfile ,设置hibernate，启动hibernate菜单

1. 创建swapfile 1. sudo dd if=/dev/zero of=/swapfile bs=1024 count=16G 2. sudo chmod 600 /swapfile && sudo mkswap /swapfile 3. sudo swapoff -a 4. sudo swapon /swapfile 5. sudo -b vim /etc/fsta /swapfile none swap sw 0 0 6. swapon -s 查看是否启用了swapfile
2. 默认hibernate功能必须使用swap分区来实现。配置内核参数启用hibernate功能 1. 查看跟分区所在的设备，好swapfile的第一个块 sudo blkid ;\#\# get / -&gt; /dev/... -&gt; partition UUID -&gt; resume=UUID= sudo filefrag -v /swapfile ;\#\# get first "physical" number -&gt; resume\_offset 2. GRUB\_CMDLINE\_LINUX\_DEFAULT="... resume=UUID=xxxxx resume\_offset=xxxx" 3. sudo update-grub 4. sudo update-initramfs -u
3. 电源管理中启用hibernate选项 用文本编辑器创建 /etc/polkit-1/localauthority/50-local.d/com.ubuntu.enable-hibernate.pkla 文件，并填写以下内容保存：

```text
[Re-enable hibernate by default in upower]
Identity=unix-user:*
Action=org.freedesktop.upower.hibernate
ResultActive=yes

[Re-enable hibernate by default in logind]
Identity=unix-user:*
Action=org.freedesktop.login1.hibernate;org.freedesktop.login1.handle-hibernate-key;org.freedesktop.login1;org.freedesktop.login1.hibernate-multiple-sessions;org.freedesktop.login1.hibernate-ignore-inhibit
ResultActive=yes
```

## 进入单用户模式

1. 开机按住shift进入grub界面
2. 选择recovery mode， 按e键进入编辑界面
3. 将 ro recovery nomodeset 改为 rw single init=/bin/bash如下图，修改完ctrl+x启动单用户模式

## pdf教程

1. [Better Font Rendering In Linux With Infinality  _Web Upd8_ Ubuntu \_ Linux blog](https://github.com/imlinux/notebook/tree/ee838cf4dc2c3fb021798b689c408356e35ee99e/assets/pdf/Better%20Font%20Rendering%20In%20Linux%20With%20Infinality%20_%20Web%20Upd8_%20Ubuntu%20_%20Linux%20blog.pdf)
2. [Add a Binary Payload to your Shell Scripts \_ Linux Journal](https://github.com/imlinux/notebook/tree/ee838cf4dc2c3fb021798b689c408356e35ee99e/assets/pdf/Add%20a%20Binary%20Payload%20to%20your%20Shell%20Scripts%20_%20Linux%20Journal.pdf)
3. [Understanding the Load Average on Linux and Other Unix-like Systems](https://github.com/imlinux/notebook/tree/ee838cf4dc2c3fb021798b689c408356e35ee99e/assets/pdf/Understanding%20the%20Load%20Average%20on%20Linux%20and%20Other%20Unix-like%20Systems.pdf)
4. [用grub2引导ISO硬盘安装ubuntu方法两则和利用memdisk引导WinPE](https://github.com/imlinux/notebook/tree/ee838cf4dc2c3fb021798b689c408356e35ee99e/assets/pdf/用grub2引导ISO硬盘安装ubuntu方法两则和利用memdisk引导WinPE.pdf)
5. [grub rescue模式下修复](https://github.com/imlinux/notebook/tree/ee838cf4dc2c3fb021798b689c408356e35ee99e/assets/pdf/grub%20rescue模式下修复.pdf)

## 文档

1. [ubuntu 包管理](https://help.ubuntu.com/lts/serverguide/dpkg.html)

