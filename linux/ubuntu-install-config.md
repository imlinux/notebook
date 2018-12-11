

### 使用GRUB2安装UBUNTU

1. 按住SHIFT进入GRUB界面
2. ls 查看分区信息和文件系统
3. loopback loop (hd1, msdos5)/dong/Ubuntu-18.04.iso
4. linux (loop)/casper/vmlinuz boot=casper iso-scan/filename=/dong/Ubuntu-18.04.iso
5. initrd (loop)/casper/initrd.lz
6. boot
7. 进入系统后输入sudo umount -l -r -f /isodevice


### 安装后的配置

1. 安装gnome-tweak-tool
	1. sudo apt install gnome-tweak-tool

2. [gnome3主题](https://www.gnome-look.org/)

3. 安装搜狗输入法

4. [electron-ssr](https://github.com/erguotou520)

5. Gnome 扩展
	1. [Hide Top Bar](https://extensions.gnome.org/extension/545/hide-top-bar/)
	2. [OpenWeather](https://extensions.gnome.org/extension/750/openweather/)
	3. [Places Status Indicator](https://extensions.gnome.org/extension/8/places-status-indicator/)
	4. [Screenshot Tool](https://extensions.gnome.org/extension/1112/screenshot-tool/)
	5. [system-monitor](https://extensions.gnome.org/extension/120/system-monitor/)
	6. [TaskBar](https://extensions.gnome.org/extension/584/taskbar/)
	7. [TopIcons Plus遗留版本的系统托盘](https://extensions.gnome.org/extension/1031/topicons/)