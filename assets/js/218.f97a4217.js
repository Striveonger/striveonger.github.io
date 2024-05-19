(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{745:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("今天买了三年的腾讯云服务器, 双11特价, 便宜嘛~")]),s._v(" "),t("h2",{attrs:{id:"_1-配置免密登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置免密登录"}},[s._v("#")]),s._v(" 1. 配置免密登录")]),s._v(" "),t("h2",{attrs:{id:"_2-定义路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义路径"}},[s._v("#")]),s._v(" 2. 定义路径")]),s._v(" "),t("ul",[t("li",[s._v("/usr/local/       软件安装目录")]),s._v(" "),t("li",[s._v("/opt/apps/        开发的应用所在目录")]),s._v(" "),t("li",[s._v("/home/down_files/ 下载的文件")])]),s._v(" "),t("blockquote",[t("p",[s._v("持续更新~")])]),s._v(" "),t("h2",{attrs:{id:"_3-安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装nginx"}},[s._v("#")]),s._v(" 3. 安装nginx")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.13.7.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" nginx-1.13.7.tar.gz\n\n//进入目录\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.13.7\n//执行命令\n./configure\n//执行make命令\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n//执行make install命令\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"_4-将nginx注册成系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将nginx注册成系统服务"}},[s._v("#")]),s._v(" 4. 将nginx注册成系统服务")]),s._v(" "),t("h3",{attrs:{id:"_4-1-创建服务文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-创建服务文件"}},[s._v("#")]),s._v(" 4.1 创建服务文件")]),s._v(" "),t("div",{staticClass:"language-awk line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-awk"}},[t("code",[s._v("vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("systemd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("system"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx.service \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-2-文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-文件内容"}},[s._v("#")]),s._v(" 4.2 文件内容")]),s._v(" "),t("div",{staticClass:"language-gradle line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-gradle"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nDescription"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" high performance web server\nAfter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target nss"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lookup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\nExecStart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/usr/")])]),s._v("local"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/nginx/")])]),s._v("sbin"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/nginx -c /")])]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/local/")])]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/conf/")])]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\nExecReload"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/usr/")])]),s._v("local"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/nginx/")])]),s._v("sbin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s reload\nExecStop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/usr/")])]),s._v("local"),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("/nginx/")])]),s._v("sbin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s stop\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nWantedBy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_4-3-文件说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-文件说明"}},[s._v("#")]),s._v(" 4.3 文件说明")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("[Unit]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("服务的说明\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("描述服务\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("依赖，当依赖的服务启动之后再启动自定义的服务\n\n[Service]服务运行参数的设置\nType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking是后台运行的形式\nExecStart为服务的具体运行命令\nExecReload为重启命令\nExecStop为停止命令\nPrivateTmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True表示给服务分配独立的临时空间\n注意：启动、重启、停止命令全部要求使用绝对路径\n\n[Install]服务安装的相关设置，可设置为多用户\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("Type")])]),s._v(" "),t("ul",[t("li",[s._v("Type=simple（默认值）：systemd认为该服务将立即启动。服务进程不会fork。如果该服务要启动其他服务，不要使用此类型启动，除非该服务是socket激活型。")]),s._v(" "),t("li",[s._v("Type=forking：systemd认为当该服务进程fork，且父进程退出后服务启动成功。对于常规的守护进程（daemon），除非你确定此启动方式无法满足需求，使用此类型启动即可。使用此启动类型应同时指定 PIDFile=，以便systemd能够跟踪服务的主进程。")]),s._v(" "),t("li",[s._v("Type=oneshot：这一选项适用于只执行一项任务、随后立即退出的服务。可能需要同时设置 RemainAfterExit=yes使得systemd在服务进程退出之后仍然认为服务处于激活状态")]),s._v(" "),t("li",[s._v("Type=notify：与 Type=simple相同，但约定服务会在就绪后向systemd发送一个信号。这一通知的实现由 libsystemd-daemon.so提供。")]),s._v(" "),t("li",[s._v("Type=dbus：若以此方式启动，当指定的 BusName 出现在DBus系统总线上时，systemd认为服务就绪。")])]),s._v(" "),t("p",[t("strong",[s._v("PIDFile ： pid文件路径")])]),s._v(" "),t("p",[t("strong",[s._v("ExecStartPre ：启动前要做什么，上文中是测试配置文件 －t")])]),s._v(" "),t("h3",{attrs:{id:"_4-4-使用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-使用命令"}},[s._v("#")]),s._v(" 4.4 使用命令")]),s._v(" "),t("h4",{attrs:{id:"_4-4-1-启动nginx服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-启动nginx服务"}},[s._v("#")]),s._v(" 4.4.1 启动nginx服务")]),s._v(" "),t("div",{staticClass:"language-crmsh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl start nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-2-设置开机自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-设置开机自动启动"}},[s._v("#")]),s._v(" 4.4.2 设置开机自动启动")]),s._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl enable nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-3-停止开机自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-3-停止开机自动启动"}},[s._v("#")]),s._v(" 4.4.3 停止开机自动启动")]),s._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl disable nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-4-查看状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-4-查看状态"}},[s._v("#")]),s._v(" 4.4.4 查看状态")]),s._v(" "),t("div",{staticClass:"language-fortran line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-fortran"}},[t("code",[s._v("systemctl status nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-5-重启服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-5-重启服务"}},[s._v("#")]),s._v(" 4.4.5 重启服务")]),s._v(" "),t("div",{staticClass:"language-maxima line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl restart nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-6-停止服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-6-停止服务"}},[s._v("#")]),s._v(" 4.4.6 停止服务")]),s._v(" "),t("div",{staticClass:"language-maxima line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl stop nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-7-查看所有服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-7-查看所有服务"}},[s._v("#")]),s._v(" 4.4.7 查看所有服务")]),s._v(" "),t("div",{staticClass:"language-dsconfig line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl list-units --type=service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装git"}},[s._v("#")]),s._v(" 5. 安装Git")]),s._v(" "),t("h3",{attrs:{id:"_5-1-配置git相关内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-配置git相关内容"}},[s._v("#")]),s._v(" 5.1 配置Git相关内容")]),s._v(" "),t("h2",{attrs:{id:"_6-安装-java-maven-zookeeper-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装-java-maven-zookeeper-node-js"}},[s._v("#")]),s._v(" 6. 安装 Java,  Maven, Zookeeper, node.js")]),s._v(" "),t("h3",{attrs:{id:"_6-1-修改maven的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-修改maven的配置文件"}},[s._v("#")]),s._v(" 6.1 修改Maven的配置文件")]),s._v(" "),t("blockquote",[t("p",[s._v("vim setting.xml")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="UTF-8"?>')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("settings")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://maven.apache.org/SETTINGS/1.2.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xsi:")]),s._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("/root/development/repository"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("pluginGroups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("pluginGroups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("proxies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("proxies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("mirrors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("mirror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("nexus-aliyun"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("mirrorOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("*"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("mirrorOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Nexus aliyun"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("http://maven.aliyun.com/nexus/content/groups/public"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("mirror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("mirrors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("settings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h3",{attrs:{id:"_6-2-配置zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-配置zookeeper"}},[s._v("#")]),s._v(" 6.2 配置Zookeeper")]),s._v(" "),t("blockquote",[t("p",[s._v("cp zoo_sample.cfg zoo.cfg")]),s._v(" "),t("p",[s._v("vim zoo.cfg")])]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of milliseconds of each tick")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("tickTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("2000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that the initial")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# synchronization phase can take")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("initLimit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that can pass between")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sending a request and getting an acknowledgement")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("syncLimit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the directory where the snapshot is stored.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do not use /tmp for storage, /tmp here is just")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example sakes.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dataDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/zookeeper/data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dataLogDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/zookeeper/logs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the port at which the clients will connect")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("clientPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("2181")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the maximum number of client connections.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# increase this if you need to handle more clients")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#maxClientCnxns=60")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Be sure to read the maintenance section of the")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# administrator guide before turning on autopurge.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of snapshots to retain in dataDir")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.snapRetainCount=3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Purge task interval in hours")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set to "0" to disable auto purge feature')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.purgeInterval=1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Metrics Providers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://prometheus.io Metrics Exporter")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metricsProvider.httpPort=7000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metricsProvider.exportJvmInfo=true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("h3",{attrs:{id:"_6-3-配置zookeeper启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-配置zookeeper启动服务"}},[s._v("#")]),s._v(" 6.3 配置Zookeeper启动服务")]),s._v(" "),t("blockquote",[t("p",[s._v("vim /usr/lib/systemd/system/zookeeper.service")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[Unit]\nDescription=Zookeper Server\nAfter=network.target\n\n[Service]\nType=forking\nEnvironment=JAVA_HOME=/usr/local/java/jdk-11.0.13\nExecStart=/usr/local/zookeeper/bin/zkServer.sh --config /usr/local/zookeeper/conf start\nExecReload=/usr/local/zookeeper/bin/zkServer.sh --config /usr/local/zookeeper/conf restart\nExecStop=/usr/local/zookeeper/bin/zkServer.sh --config /usr/local/zookeeper/conf stop\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("blockquote",[t("p",[s._v("/etc/profile或者/etc/security/limit.d这些文件中配置的环境变量仅对通过pam登录的用户生效，而systemd是不读这些配置的，所以这就造成登录到终端时查看环境变量和手动启动应用都一切正常，但是systemd无法正常启动应用")])]),s._v(" "),t("h2",{attrs:{id:"_8-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-配置环境变量"}},[s._v("#")]),s._v(" 8. 配置环境变量")]),s._v(" "),t("p",[s._v("启动命令")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("java -jar -Dspring.profiles.active=dev -Dspring.config.location=./config/application-dev.properties /opt/apps/ksd-manager/ksd-manager.jar")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);