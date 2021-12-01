(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{728:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我本来想用Docker, 组个局域网的. 原来公司就是这么玩的. 结果了解到MacOS和Linux的Docker实现不一样. Docker for Mac 用了一个虚拟机, 把Docker包起来提供服务, 所以在Mac下不能直接访问Docker容器.")]),t._v(" "),a("p",[t._v("我的解决方案: 在Mac上安装虚拟机, 在虚拟机中安装Docker. 然后用虚拟机做路由转发. 连通Mac与Docker.")]),t._v(" "),a("h4",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualBox - v5.2.2"),a("OutboundLink")],1),t._v("：虚拟机")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vagrant - v2.0.1"),a("OutboundLink")],1),t._v("：通过配置文件来快速创建定制的虚拟机")])])]),t._v(" "),a("h4",{attrs:{id:"安装虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装虚拟机"}},[t._v("#")]),t._v(" 安装虚拟机")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载虚拟机镜像"),a("OutboundLink")],1),t._v(" : CentOS 7")])]),t._v(" "),a("blockquote",[a("p",[t._v("移动到工作空间:  "),a("code",[t._v("mv ~/Downloads/centos-7.0-x86_64.box ~/development/workspace/vm/box/")])])]),t._v(" "),a("blockquote",[a("p",[t._v("添加镜像: "),a("code",[t._v("vagrant box add centos7 ~/development/workspace/vm/box/centos-7.0-x86_64.box")])])]),t._v(" "),a("blockquote",[a("p",[t._v("进入vagrant工作空间: "),a("code",[t._v("cd ~/development/workspace/vm/vagrant/centos")])])]),t._v(" "),a("blockquote",[a("p",[t._v("初始化镜像: "),a("code",[t._v("vagrant init centos7")])])]),t._v(" "),a("blockquote",[a("p",[t._v("配置虚拟机:  "),a("code",[t._v("vim Vagrantfile")])])]),t._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Vagrant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"centos7"')]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"centos7"')]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private_network"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.13.144.104"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" netmask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.255.255.0"')]),t._v("\n\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"virtualbox"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"centos7"')]),t._v("\n    v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1024"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("blockquote",[a("p",[t._v("启动虚拟机: "),a("code",[t._v("vagrant up")])])]),t._v(" "),a("blockquote",[a("p",[t._v("进入虚拟机: "),a("code",[t._v("vagrant ssh")])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" root\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" root\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" authorized_keys\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("blockquote",[a("p",[t._v("使用SSH登录虚拟机: "),a("code",[t._v("ssh root@10.13.144.104")])])]),t._v(" "),a("h4",{attrs:{id:"在虚拟机中安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在虚拟机中安装docker"}},[t._v("#")]),t._v(" 在虚拟机中安装Docker")]),t._v(" "),a("blockquote",[a("p",[t._v("安装Docker: "),a("code",[t._v("yum -y install docker")])])]),t._v(" "),a("blockquote",[a("p",[t._v("创建容器: "),a("code",[t._v('docker run --name=linux -d centos:6.7 /bin/bash -c "while true; do echo hello; sleep 1; done"')])])]),t._v(" "),a("blockquote",[a("p",[t._v("出错了:")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("/usr/bin/docker-current: Error response from daemon: error creating overlay "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" to /var/lib/docker/overlay2/65f3c109fb903539820f84856d2725af784f2f03f95b1f0214e34184e4d61ff7-init/merged: invalid argument.\nSee "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/docker-current run --help'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在网上搜索一番后，一个可行的方案如下(改变storage driver类型， 禁用"),a("a",{attrs:{href:"https://www.centos.bz/tag/selinux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("selinux"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("blockquote",[a("p",[t._v("停止docker服务: "),a("code",[t._v("systemctl stop docker")])])]),t._v(" "),a("blockquote",[a("p",[t._v("清理镜像: "),a("code",[t._v("rm -rf /var/lib/docker")])])]),t._v(" "),a("blockquote",[a("p",[t._v("修改存储类型: vi "),a("code",[t._v("/etc/sysconfig/docker-storage")])])]),t._v(" "),a("blockquote",[a("p",[t._v("把空的DOCKER_STORAGE_OPTIONS参数改为overlay:  "),a("code",[t._v('DOCKER_STORAGE_OPTIONS="--storage-driver overlay"')])])]),t._v(" "),a("blockquote",[a("p",[t._v("禁用selinux: "),a("code",[t._v("vi /etc/sysconfig/docker")]),t._v(" 去掉option的 "),a("code",[t._v("–selinux-enabled")])])]),t._v(" "),a("blockquote",[a("p",[t._v("启动docker应该就可以了: "),a("code",[t._v("systemctl start docker")])])]),t._v(" "),a("blockquote",[a("p",[t._v("重新创建容器: "),a("code",[t._v('docker run --name=linux -d centos:6.7 /bin/bash -c "while true; do echo hello; sleep 1; done"')])])]),t._v(" "),a("blockquote",[a("p",[t._v("查看容器信息")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos7 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps")]),t._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\nb3c81e022a22        centos:6.7          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/bash -c \'whi..."')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" seconds                            linux\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos7 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker inspect --format '{{ .NetworkSettings.IPAddress }}' b3c81e022a22")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos7 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping 172.17.0.2")]),t._v("\nPING "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.075")]),t._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.076")]),t._v(" ms\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"现在的网络拓扑图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在的网络拓扑图"}},[t._v("#")]),t._v(" 现在的网络拓扑图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-linux_012.jpg",alt:"node-linux_012"}})]),t._v(" "),a("blockquote",[a("p",[t._v("A 是我的MacBook, B 是我安装的虚拟机, C 和 D 是虚拟机中安装的Docker容器.")])]),t._v(" "),a("p",[t._v("A添加静态路由，让特定地址或者网断流量路由到B，然后 B开启内核转发，同时调整 iptable forward 链规则")]),t._v(" "),a("p",[t._v("结果到这就不会弄了......")]),t._v(" "),a("p",[t._v("想哭........")]),t._v(" "),a("h4",{attrs:{id:"注-vagrant命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注-vagrant命令详解"}},[t._v("#")]),t._v(" 注: Vagrant命令详解")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant box add")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加box的操作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant init")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始化box的操作，会生成vagrant的配置文件Vagrantfile")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant up")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启动本地环境")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant ssh")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过ssh登录本地环境所在虚拟机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant halt")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭本地环境")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant suspend")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("暂停本地环境")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant resume")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("恢复本地环境")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant reload")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改了Vagrantfile后，使之生效（相当于先 halt，再 up）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant destroy")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("彻底移除本地环境")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant box list")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前已经添加的box列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant box remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除相应的box")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant package")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打包命令，可以把当前的运行的虚拟机环境进行打包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant plugin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于安装卸载插件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant status")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取当前虚拟机的状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vagrant global-status")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前用户Vagrant的所有环境状态")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);