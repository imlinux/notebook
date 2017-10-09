#### x相关的组件

1. display manager   \(dm\)
   **对于ubuntu和其衍生版**可以通过`/etc/X11/default-display-manager`修改使用哪一个DM
2. window manager   \(wm\)
3. destop environment    \(de\)

4. `/usr/share/xsessions/`让gdm可以识别桌面环境，里面存放了启动桌面环境的命令




#### ubuntu 使用swapfile ,设置hibernate，启动hibernate菜单

1. 创建swapfile
   1. sudo dd if=/dev/zero of=/swapfile bs=1024 count=16G
   2. sudo chmod 600 /swapfile && sudo mkswap /swapfile
   3. sudo swapoff -a
   4. sudo swapon /swapfile
   5. sudo -b vim /etc/fsta
      /swapfile   none   swap   sw   0   0
   6. swapon -s 查看是否启用了swapfile

2. 默认hibernate功能必须使用swap分区来实现。配置内核参数启用hibernate功能 
   1. 查看跟分区所在的设备，好swapfile的第一个块
   sudo blkid    ;## get / -> /dev/... -> partition UUID -> resume=UUID=
   sudo filefrag -v /swapfile	;## get first "physical" number -> resume_offset
   2. GRUB_CMDLINE_LINUX_DEFAULT="... resume=UUID=xxxxx resume_offset=xxxx"
   3. sudo update-grub
   4. sudo update-initramfs -u
   
3. 电源管理中启用hibernate选项
用文本编辑器创建 /etc/polkit-1/localauthority/50-local.d/com.ubuntu.enable-hibernate.pkla 文件，并填写以下内容保存：

```
[Re-enable hibernate by default in upower]
Identity=unix-user:*
Action=org.freedesktop.upower.hibernate
ResultActive=yes

[Re-enable hibernate by default in logind]
Identity=unix-user:*
Action=org.freedesktop.login1.hibernate;org.freedesktop.login1.handle-hibernate-key;org.freedesktop.login1;org.freedesktop.login1.hibernate-multiple-sessions;org.freedesktop.login1.hibernate-ignore-inhibit
ResultActive=yes

```

#### 配置字体
2. {% pdf width="100%", height="1024", src="assets/Better Font Rendering In Linux With Infinality _ Web Upd8_ Ubuntu _ Linux blog.pdf" %}{% endpdf %}

   
   

