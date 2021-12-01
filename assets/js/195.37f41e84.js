(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{721:function(s,t,a){"use strict";a.r(t);var e=a(4),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这几天我在Linux下安装邮件服务器, 百试不通, 最后25端口, 直接崩掉了. 无奈只有重装系统, 这也是一个小白的悲哀吧.")]),s._v(" "),a("h3",{attrs:{id:"_1-重装完之后-设置免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-重装完之后-设置免密登录"}},[s._v("#")]),s._v(" 1. 重装完之后, 设置免密登录")]),s._v(" "),a("p",[a("code",[s._v("ssh-keygen -t rsa")])]),s._v(" "),a("p",[a("code",[s._v("chmod 600 ~/.ssh")])]),s._v(" "),a("p",[a("code",[s._v("chmod 700 ~/.ssh/authorized_keys")])]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("h3",{attrs:{id:"_2-安装上传下载文件的工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装上传下载文件的工具"}},[s._v("#")]),s._v(" 2. 安装上传下载文件的工具")]),s._v(" "),a("p",[a("code",[s._v("yum -y install lrzsz")])]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("h3",{attrs:{id:"_3-安装-shadowsocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-shadowsocks"}},[s._v("#")]),s._v(" 3. 安装 Shadowsocks")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x shadowsocks-all.sh\n./shadowsocks-all.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" shadowsocks-all.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("参考: https://teddysun.com/486.html")])]),s._v(" "),a("ol",[a("li",[s._v("启动脚本")])]),s._v(" "),a("blockquote",[a("p",[s._v("启动脚本后面的参数含义，从左至右依次为：启动，停止，重启，查看状态。")])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-Python 版：\n"),a("code",[s._v("/etc/init.d/shadowsocks-python start | stop | restart | status")])])]),s._v(" "),a("blockquote",[a("p",[s._v("ShadowsocksR 版：\n"),a("code",[s._v("/etc/init.d/shadowsocks-r start | stop | restart | status")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-Go 版：\n"),a("code",[s._v("/etc/init.d/shadowsocks-go start | stop | restart | status")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-libev 版：\n"),a("code",[s._v("/etc/init.d/shadowsocks-libev start | stop | restart | status")])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("各版本默认配置文件")])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-Python 版："),a("code",[s._v("/etc/shadowsocks-python/config.json")])])]),s._v(" "),a("blockquote",[a("p",[s._v("ShadowsocksR 版： "),a("code",[s._v("/etc/shadowsocks-r/config.json")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-Go 版： "),a("code",[s._v("/etc/shadowsocks-go/config.json")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Shadowsocks-libev 版： "),a("code",[s._v("/etc/shadowsocks-libev/config.json")])])]),s._v(" "),a("h3",{attrs:{id:"_4-安装ewomail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装ewomail"}},[s._v("#")]),s._v(" 4. 安装EwoMail")]),s._v(" "),a("h5",{attrs:{id:"_1-关闭selinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-关闭selinux"}},[s._v("#")]),s._v(" 1. 关闭selinux")]),s._v(" "),a("p",[a("code",[s._v("vim /etc/sysconfig/selinux")]),s._v(" 将"),a("code",[s._v("SELINUX=enforcing")]),s._v(" 改为 "),a("code",[s._v("SELINUX=disabled")])]),s._v(" "),a("h5",{attrs:{id:"_2-创建swap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建swap"}},[s._v("#")]),s._v(" 2. 创建swap")]),s._v(" "),a("p",[a("code",[s._v("free -m")]),s._v(" 查看swap")]),s._v(" "),a("p",[a("code",[s._v("dd if=/dev/zero of=/mnt/swap bs=1M count=1024")]),s._v("  创建1G的swap")]),s._v(" "),a("p",[a("code",[s._v("mkswap /mnt/swap")]),s._v("  设置交换分区文件")]),s._v(" "),a("p",[a("code",[s._v("swapon /mnt/swap")]),s._v(" 启动swap")]),s._v(" "),a("p",[a("code",[s._v("vim /etc/fstab")]),s._v(" 添加 "),a("code",[s._v("/mnt/swap swap swap defaults 0 0")]),s._v("  设置开机时自启用 swap 分区")]),s._v(" "),a("h5",{attrs:{id:"_3-修改主机名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改主机名"}},[s._v("#")]),s._v(" 3. 修改主机名")]),s._v(" "),a("p",[s._v("EwoMail在安装后会默认使用域名前缀mail的主机名, 例如: 我的是mail.yuchen.pro")]),s._v(" "),a("p",[a("code",[s._v("vim /etc/sysconfig/network")]),s._v(" 添加 "),a("code",[s._v("HOSTNAME = mail.yuchen.pro")])]),s._v(" "),a("p",[a("code",[s._v("vim /etc/hosts")]),s._v(" 修改 "),a("code",[s._v("127.0.0.1")]),s._v(" 对应的域名")]),s._v(" "),a("p",[a("code",[s._v("hostname mail.yuchen.pro")])]),s._v(" "),a("h5",{attrs:{id:"_4-打开-http-ewomail-com-list-11-html-输入你的域名获取安装代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-打开-http-ewomail-com-list-11-html-输入你的域名获取安装代码"}},[s._v("#")]),s._v(" 4. 打开："),a("a",{attrs:{href:"http://ewomail.com/list-11.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://ewomail.com/list-11.html"),a("OutboundLink")],1),s._v(" 输入你的域名获取安装代码")]),s._v(" "),a("h5",{attrs:{id:"_5-安装完成后-cat-ewomail-config-ini-查看mysql密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装完成后-cat-ewomail-config-ini-查看mysql密码"}},[s._v("#")]),s._v(" 5. 安装完成后, "),a("code",[s._v("cat /ewomail/config.ini")]),s._v(" 查看MySQL密码")]),s._v(" "),a("h3",{attrs:{id:"_5-安装-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-java"}},[s._v("#")]),s._v(" 5. 安装 Java")]),s._v(" "),a("p",[a("code",[s._v("wget http://download.oracle.com/otn/java/jdk/8u151-b12/e758a0de34e24606bca991d704f6dcbf/jdk-8u151-linux-x64.tar.gz?AuthParam=1528779151_b5871543e1cc4204d7d0bb4db6e0b8fd")]),s._v(" 下载JDK")]),s._v(" "),a("p",[a("code",[s._v("tar -zxvf jdk-8u151-linux-x64.tar.gz")]),s._v(" 解压")]),s._v(" "),a("p",[a("code",[s._v("mv jdk1.8.0_151/ /opt/")]),s._v(" 修改目录")]),s._v(" "),a("p",[a("code",[s._v("vim /etc/profile")]),s._v(" 配置环境变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  export JAVA_HOME=/opt/jdk1.8.0_151\n  export PATH=$JAVA_HOME/bin:$PATH\n  export CLASSPATH=.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("source /etc/profile")]),s._v(" 环境变量生效")])])}),[],!1,null,null,null);t.default=o.exports}}]);