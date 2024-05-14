(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{715:function(v,_,n){"use strict";n.r(_);var e=n(0),o=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("Linux 笔记")]),v._v(" "),_("p",[v._v("在Linux下，你所能看到的都以文件形式存在（包括文件和设备）\n文件在Linux下，被看做文件设备(二进制文件和字符形式的文件)\n"),_("code",[v._v("pwd")]),v._v(" 查看当前路径\n"),_("code",[v._v("whoami")]),v._v(" 我是谁?")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("hd")]),v._v(" 代表IDE硬盘\n"),_("code",[v._v("hda")]),v._v(" 代表 IDE的第一个接口\n"),_("code",[v._v("hdb")]),v._v(" 代表 IDE的第二个接口\n"),_("code",[v._v("hda2")]),v._v(" 代表扩展分区,\n"),_("code",[v._v("hda5")]),v._v(" 代表第一块硬盘上的第一个逻辑分区")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("挂载\n"),_("code",[v._v("mount /dev/cdrom /mnt/cdr")]),v._v(" ( /dev/cdrom 设备路径, /mnt/cdr 设备映射路径[理论上 映射路径可以是任何位置,但约定俗成的把设备的映射路径放在 /mnt 下] )")]),v._v(" "),_("p",[v._v("取消挂载\n"),_("code",[v._v("umount /dev/cdrom")]),v._v("(参数可以是设备,也可以是 挂载点)")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("rmdir")]),v._v(" 删除路径\n"),_("code",[v._v("mkdir")]),v._v(" 添加路径")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("Linux 启动过程")]),v._v(" "),_("ol",[_("li",[v._v("load bios —— 加载BIOS")]),v._v(" "),_("li",[v._v("read MBR´s config to find out the OS —— 读取硬盘的引导扇区")]),v._v(" "),_("li",[v._v("load the kernel of the OS —— 根据引导扇区查找操作系统")]),v._v(" "),_("li",[v._v("init process starts —— 启动第一个进程")]),v._v(" "),_("li",[v._v("execute /etc/rc.d/sysinit —— rc.d （run command 运行命令 后台运行的命令）")]),v._v(" "),_("li",[v._v("start other modules(etc/modules.conf) —— 加载设备的驱动程序")]),v._v(" "),_("li",[v._v("execute the run level scripts —— 系统启动时会运行相应层次的脚本。")]),v._v(" "),_("li",[v._v("execute /etc/rc.d/rc.local —— 可以设置自启软件")]),v._v(" "),_("li",[v._v("execute /bin/login —— 登录")]),v._v(" "),_("li",[v._v("shell started....")])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"linux-分区方式（手动分区和自动分区）手动分区：-根分区-usr-应用软件存放位置-home-用户宿主目录的父目录-var-存放临时文件-boot-存放启动文件-128m-is-enoughswap-交换分区（相当于windows的虚拟内存）理论上交换分区的大小是物理内存的两倍可以不建，但不建议，因为有的程序会默认使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-分区方式（手动分区和自动分区）手动分区：-根分区-usr-应用软件存放位置-home-用户宿主目录的父目录-var-存放临时文件-boot-存放启动文件-128m-is-enoughswap-交换分区（相当于windows的虚拟内存）理论上交换分区的大小是物理内存的两倍可以不建，但不建议，因为有的程序会默认使用"}},[v._v("#")]),v._v(" Linux 分区方式（手动分区和自动分区）\n手动分区：\n/       ——　根分区\n/usr    ——　　应用软件存放位置\n/home　  ——  用户宿主目录的父目录\n/var    ——  存放临时文件\n/boot   ——  存放启动文件 128M is enough\nSWAP    ——  交换分区（相当于windows的虚拟内存）\n理论上交换分区的大小是物理内存的两倍\n可以不建，但不建议，因为有的程序会默认使用")]),v._v(" "),_("p",[v._v("Inti\n0 - 系统停机状态\n1 - 单用户工作状态\n2 - 多用户状态（没有NFS - 网络文件系统）\n3 - 多用户状态（有NFS）\n4 - 系统未使用，留给用户\n5 - 图形界面\n6 - 系统正常关闭并重启")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("Linux 常用命令：")]),v._v(" "),_("p",[_("code",[v._v("shutdown now")]),v._v(" 现在关机\n"),_("code",[v._v("ls")]),v._v(" 列出当前目录中的所有文件和子目录（以d开头的是目录，以 — 开头的是文件,以l打头的是一个链接）\n"),_("code",[v._v("cd")]),v._v(" 既可以用决对路径，也可以是相对路径（cd.. 上层路径）\n"),_("code",[v._v("pwd")]),v._v("　显示当前路径\n"),_("code",[v._v("mkdir")]),v._v("　创建一个目录\n"),_("code",[v._v("rmdir")]),v._v("　删除一个目录（只能删除空目录）\n"),_("code",[v._v("rm -rf")]),v._v("  强制递归删除（全部删除 r —— 递归 f —— 强制）\n"),_("code",[v._v("touch")]),v._v("　创建文件（从linux技术角度，扩展命，没有意义，在linux下的扩展名只有提示意义）\n"),_("code",[v._v("cp")]),v._v(" 复制\n"),_("code",[v._v("mv")]),v._v(" 移动\n"),_("code",[v._v("cat")]),v._v(" 查看文件内容\n"),_("code",[v._v("tac")]),v._v(" 倒序输出文件内容\n"),_("code",[v._v("more")]),v._v(" 查看文件里的内容(分屏显示)\n"),_("code",[v._v("head [-n] <文件名>")]),v._v(" 查看指定文件的前n行\n"),_("code",[v._v("find")]),v._v(" 查找文件（可以按文件名，日期，大小。。。。总之非常强大）\n"),_("code",[v._v("whereis <命令>")]),v._v(" 命令存放的位置，已经这个命令的帮助文档的位置\n"),_("code",[v._v("ln <v.txt> <lv.txt>")]),v._v(" 创建lv.txt的硬链接，指向v.txt（所谓硬链接，就是把v.txt中了内容复制到lv.txt中，不管其中哪个文件的内容被修改了，两个文件中的内容都是最后修改过的内容）\n"),_("code",[v._v("ln -s <v.txt> <lsv.txt>")]),v._v(" 创建v.txt乱链接（相当于给v.txt加了一个快捷方式）\n"),_("code",[v._v("echo $PATH")]),v._v(" 查看PATH 环境变量\n"),_("code",[v._v("chown <username> <filename>")]),v._v("  修改文件所有者\n"),_("code",[v._v("grep <要查找的内容> <要查找的文件>")]),v._v(" 显示内容在文件的一整行\n"),_("code",[v._v("date")]),v._v(" 显示和设置日期时间\n"),_("code",[v._v("stat")]),v._v(" 显示指定文件的相关信息\n"),_("code",[v._v("who\\w")]),v._v(" 显示在线登录用户\n"),_("code",[v._v("whoami")]),v._v(" 显示用户自己的身份\n"),_("code",[v._v("id")]),v._v(" 显示当前用户的id信息\n"),_("code",[v._v("hostname")]),v._v(" 显示主机信息\n"),_("code",[v._v("uname")]),v._v(" 显示操作系统信息\n"),_("code",[v._v("dmesg")]),v._v(" 显示系统启动信息\n"),_("code",[v._v("du")]),v._v(" 显示指定文件(目录)已使用的磁盘空间的总量\n"),_("code",[v._v("df")]),v._v(" 显示文件系统磁盘空间的使用情况\n"),_("code",[v._v("free")]),v._v(" 显示当前内存和交换空间的使用情况\n"),_("code",[v._v("fdisk -l")]),v._v(" 显示磁盘信息\n"),_("code",[v._v("locale")]),v._v(" 显示当前语言环境\n"),_("code",[v._v("wall")]),v._v(" 警告所有用户")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("VIM\n如果当前目录里有这个文件，就会打开这文件，如果没有，就会创建这个文件并打开\nvi编辑器，有两种模式（编辑模式，命令模式），刚一打开为命令模式，只能敲命令，\n在命令模式下按　a　添加内容，进入编辑模式，\n按２次 ESC 退出编辑模式，\n回到命令模式按 ：  及可输入命令\nw 保存\nq 退出\nq！ 不保存退出\nwq 保存退出\ndd 删除一行\ndw 删除一个单词\nwc 统计指定文件的行数,字数,字符数")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("etc目录下的passwd文件实际存放的是所有用户-\n类似于 "),_("code",[v._v("testuser:x:501:502:/home/testuser:bin/bash")]),v._v("\ntestuser 用户名\nx\n组为 501\nid为 502\n主目录 /home/testuser\nshell bin/bash (shell 解释命令,和内核交流)[注:除了bash外,还有csh,ksh,bsh,和最原始的sh]")]),v._v(" "),_("p",[v._v("添加用户时,没有指定组的说,默认会添加一个和用户名相同的组\nlinux 可以对用户组进行增删改操作\n当删除用户时,用户的文件不会被删除")]),v._v(" "),_("p",[_("strong",[v._v("文件权限")]),v._v(" (共 10 位的权限描述) [ 第1位单独自己,往后每三个一组 ]\n[ r 可读, w 可写, x 可执行, - 没有任何权限 ]")]),v._v(" "),_("p",[v._v("第 1位: 以d开头的是目录, 以 — 开头的是文件, 以l打头的是一个链接")]),v._v(" "),_("p",[v._v("第 2位: 这个文件的所有者,有没有读的权限(有的话 r 没有的话 - )\n第 3位: 这个文件的所有者,有没有写的权限(有的话 w 没有的话 - )\n第 4位: 这个文件的所有者,有没有执行的权限(有的话 x 没有的话 - )")]),v._v(" "),_("p",[v._v("第 5位: 这个文件的所有者同组的其他人,有没有读的权限(有的话 r 没有的话 - )\n第 6位: 这个文件的所有者同组的其他人,有没有写的权限(有的话 w 没有的话 - )\n第 7位: 这个文件的所有者同组的其他人,有没有执行的权限(有的话 x 没有的话 - )")]),v._v(" "),_("p",[v._v("第 8位: 其他人,有没有读的权限(有的话 r 没有的话 - )\n第 9位: 其他人,有没有写的权限(有的话 w 没有的话 - )\n第10位: 其他人,有没有执行的权限(有的话 x 没有的话 - )")]),v._v(" "),_("p",[v._v("一般: 拥有这个文件的人,可读可写,其他人只读,拥有这个目录的人,可读可写可执行,其他人可读可执行,")]),v._v(" "),_("p",[_("code",[v._v("u")]),v._v(" 文件拥有者\n"),_("code",[v._v("g")]),v._v(" 同组的个\n"),_("code",[v._v("o")]),v._v(" 其他人")]),v._v(" "),_("p",[_("code",[v._v("chmod")]),v._v(" 修改权限(可直接 + - )例如: "),_("code",[v._v("chmod g+w v.txt")]),v._v(" (其含义:给同组的人加可写权限)")]),v._v(" "),_("p",[v._v("linux 用3个8进制数代表这三组权限,1 代表有权限, 0 代表没权限(例如 rwxr-xr--,就可以是111101100,也就是754)")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("管道\n例子: "),_("code",[v._v("ls -Rl | more")]),v._v("  (把上一个命令的结果,交给 | 后的命令去处理)\n"),_("code",[v._v("dmesg | grep eth0")]),v._v("   (检查启动时的第一块网卡的信息)")]),v._v(" "),_("p",[v._v("命令替换 `(大键盘1左边的键)包起的命令,替换成执行结果,交给下面的管道")]),v._v(" "),_("p",[v._v("重定向\n重定向输入\n"),_("code",[v._v(">")]),v._v("把执行结果的内容,输出到指定的文件(原文件内容清空)(例如: "),_("code",[v._v("ls -l > v.txt")]),v._v(")\n"),_("code",[v._v(">>")]),v._v(" 追加内容\n命令找不到的话,就不会做输出了\n重定向输出\n"),_("code",[v._v("<")]),v._v(" (例如: wall < a.txt) 将a.txt中的内容作为警告信息")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("修改启动文件\n输入命令\n"),_("code",[v._v("sudo gedit /etc/default/grub")]),v._v("\n修改grub文件中内容:\n"),_("code",[v._v('GRUB_CMDLINE_LINUX_DEFAULT="text"')]),v._v("\n更新grub\n"),_("code",[v._v("sudo update-grub")]),v._v("\n重启\n"),_("code",[v._v("sudo reboot")])])])}),[],!1,null,null,null);_.default=o.exports}}]);