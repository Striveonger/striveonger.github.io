(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{890:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("今天买了三年的腾讯云服务器, 双11特价, 便宜嘛~")]),s._v(" "),t("h2",{attrs:{id:"_1-配置免密登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置免密登录"}},[s._v("#")]),s._v(" 1. 配置免密登录")]),s._v(" "),t("h2",{attrs:{id:"_2-定义路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义路径"}},[s._v("#")]),s._v(" 2. 定义路径")]),s._v(" "),t("ul",[t("li",[s._v("/usr/local/       软件安装目录")]),s._v(" "),t("li",[s._v("/opt/apps/        开发的应用所在目录")]),s._v(" "),t("li",[s._v("/home/down_files/ 下载的文件")])]),s._v(" "),t("blockquote",[t("p",[s._v("持续更新~")])]),s._v(" "),t("h2",{attrs:{id:"_3-安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装nginx"}},[s._v("#")]),s._v(" 3. 安装nginx")]),s._v(" "),t("h2",{attrs:{id:"_4-将nginx注册成系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将nginx注册成系统服务"}},[s._v("#")]),s._v(" 4. 将nginx注册成系统服务")]),s._v(" "),t("h3",{attrs:{id:"_4-1-创建服务文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-创建服务文件"}},[s._v("#")]),s._v(" 4.1 创建服务文件")]),s._v(" "),t("div",{staticClass:"language-awk line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim /usr/lib/systemd/system/nginx.service \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-2-文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-文件内容"}},[s._v("#")]),s._v(" 4.2 文件内容")]),s._v(" "),t("div",{staticClass:"language-gradle line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[Unit]\nDescription=nginx - high performance web server\nAfter=network.target remote-fs.target nss-lookup.target\n\n[Service]\nType=forking\nExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\nExecReload=/usr/local/nginx/sbin/nginx -s reload\nExecStop=/usr/local/nginx/sbin/nginx -s stop\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_4-3-文件说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-文件说明"}},[s._v("#")]),s._v(" 4.3 文件说明")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("[Unit]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("服务的说明\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("描述服务\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("依赖，当依赖的服务启动之后再启动自定义的服务\n\n[Service]服务运行参数的设置\nType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking是后台运行的形式\nExecStart为服务的具体运行命令\nExecReload为重启命令\nExecStop为停止命令\nPrivateTmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True表示给服务分配独立的临时空间\n注意：启动、重启、停止命令全部要求使用绝对路径\n\n[Install]服务安装的相关设置，可设置为多用户\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("Type")])]),s._v(" "),t("ul",[t("li",[s._v("Type=simple（默认值）：systemd认为该服务将立即启动。服务进程不会fork。如果该服务要启动其他服务，不要使用此类型启动，除非该服务是socket激活型。")]),s._v(" "),t("li",[s._v("Type=forking：systemd认为当该服务进程fork，且父进程退出后服务启动成功。对于常规的守护进程（daemon），除非你确定此启动方式无法满足需求，使用此类型启动即可。使用此启动类型应同时指定 PIDFile=，以便systemd能够跟踪服务的主进程。")]),s._v(" "),t("li",[s._v("Type=oneshot：这一选项适用于只执行一项任务、随后立即退出的服务。可能需要同时设置 RemainAfterExit=yes使得systemd在服务进程退出之后仍然认为服务处于激活状态")]),s._v(" "),t("li",[s._v("Type=notify：与 Type=simple相同，但约定服务会在就绪后向systemd发送一个信号。这一通知的实现由 libsystemd-daemon.so提供。")]),s._v(" "),t("li",[s._v("Type=dbus：若以此方式启动，当指定的 BusName 出现在DBus系统总线上时，systemd认为服务就绪。")])]),s._v(" "),t("p",[t("strong",[s._v("PIDFile ： pid文件路径")])]),s._v(" "),t("p",[t("strong",[s._v("ExecStartPre ：启动前要做什么，上文中是测试配置文件 －t")])]),s._v(" "),t("h3",{attrs:{id:"_4-4-使用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-使用命令"}},[s._v("#")]),s._v(" 4.4 使用命令")]),s._v(" "),t("h4",{attrs:{id:"_4-4-1-启动nginx服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-启动nginx服务"}},[s._v("#")]),s._v(" 4.4.1 启动nginx服务")]),s._v(" "),t("div",{staticClass:"language-crmsh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl start nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-2-设置开机自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-设置开机自动启动"}},[s._v("#")]),s._v(" 4.4.2 设置开机自动启动")]),s._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl enable nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-3-停止开机自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-3-停止开机自动启动"}},[s._v("#")]),s._v(" 4.4.3 停止开机自动启动")]),s._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl disable nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-4-查看状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-4-查看状态"}},[s._v("#")]),s._v(" 4.4.4 查看状态")]),s._v(" "),t("div",{staticClass:"language-fortran line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-fortran"}},[t("code",[s._v("systemctl status nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-5-重启服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-5-重启服务"}},[s._v("#")]),s._v(" 4.4.5 重启服务")]),s._v(" "),t("div",{staticClass:"language-maxima line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl restart nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-6-停止服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-6-停止服务"}},[s._v("#")]),s._v(" 4.4.6 停止服务")]),s._v(" "),t("div",{staticClass:"language-maxima line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl stop nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-4-7-查看所有服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-7-查看所有服务"}},[s._v("#")]),s._v(" 4.4.7 查看所有服务")]),s._v(" "),t("div",{staticClass:"language-dsconfig line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl list-units --type=service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装git"}},[s._v("#")]),s._v(" 5. 安装Git")]),s._v(" "),t("h3",{attrs:{id:"_5-1-配置git相关内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-配置git相关内容"}},[s._v("#")]),s._v(" 5.1 配置Git相关内容")]),s._v(" "),t("h2",{attrs:{id:"_6-安装java-待办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装java-待办"}},[s._v("#")]),s._v(" 6. 安装Java(待办)")])])}),[],!1,null,null,null);a.default=n.exports}}]);