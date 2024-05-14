(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{730:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("CentOS7 安装MongoDB")]),s._v(" "),t("h4",{attrs:{id:"安装-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb"}},[s._v("#")]),s._v(" 安装 MongoDB")]),s._v(" "),t("ol",[t("li",[s._v("下载安装包")])]),s._v(" "),t("blockquote",[t("p",[s._v("https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.0.10.tgz")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("解压")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("tar -xzvf mongodb-linux-x86_64-rhel70-4.0.10.tgz")])])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("添加环境变量")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("vim /etc/profile")])]),s._v(" "),t("p",[s._v("尾部添加:  "),t("code",[s._v("export PATH=/usr/local/software/mongodb/bin:$PATH")])]),s._v(" "),t("p",[s._v("立即生效:  "),t("code",[s._v("source /etc/profile")])])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("创建目录 与 配置文件")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("mkdir data log config")])]),s._v(" "),t("p",[t("code",[s._v("vim config/mongodb.conf")])])]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库文件位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dbpath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/software/mongodb/data")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logpath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/software/mongodb/log/mongo.log")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否追加写入日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logappend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("27017")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否以守护进程方式运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("fork")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志信息冗余 级别 从vv-vvvvv | vvvv=true,v越多记录越详细")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("verbose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("vv")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否以安全认证方式运行，默认是不认证的非安全方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#noauth = true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#auth = true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定地址,可以用逗号分隔绑定多个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("maxConns")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("100")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进程ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pidfilepath")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/run/mongo.pid")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用定期记录, 每4s报告cpu利用率和io等待")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("cpu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("启动 MongoDB")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("cd bin")])]),s._v(" "),t("p",[t("code",[s._v("./mongod --config ../config/mongodb.conf")])])]),s._v(" "),t("h4",{attrs:{id:"安装-mongodb-connector-for-bi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb-connector-for-bi"}},[s._v("#")]),s._v(" 安装 MongoDB Connector for BI")]),s._v(" "),t("ol",[t("li",[s._v("下载安装包")])]),s._v(" "),t("blockquote",[t("p",[s._v("https://info-mongodb-com.s3.amazonaws.com/mongodb-bi/v2/mongodb-bi-linux-x86_64-rhel70-v2.11.0.tgz")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("解压")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("tar -xzvf mongodb-bi-linux-x86_64-rhel70-v2.11.0.tgz")])])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("添加环境变量")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("vim /etc/profile")])]),s._v(" "),t("p",[s._v("尾部添加:  "),t("code",[s._v("export PATH=/usr/local/software/mongodb-bi/bin:$PATH")])]),s._v(" "),t("p",[s._v("立即生效:  "),t("code",[s._v("source /etc/profile")])])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("创建目录 与 配置文件")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("mkdir logs config")])]),s._v(" "),t("p",[t("code",[s._v("vim config/mongosqld.yml")])])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("systemLog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/software/mongodb-bi/logs/mongosqld.log'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("net")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bindIp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1,10.13.144.104"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("注册并启动 Service")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("cd /bin")])]),s._v(" "),t("p",[t("code",[s._v("mongosqld install --config /usr/local/software/mongodb-bi/config/example-mongosqld-config.yml")])]),s._v(" "),t("p",[t("code",[s._v("systemctl start mongosql.service")])])]),s._v(" "),t("h4",{attrs:{id:"网络问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络问题"}},[s._v("#")]),s._v(" 网络问题")]),s._v(" "),t("p",[s._v("CentOS开放端口号")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("firewall-cmd --permanent --add-port=27017/tcp\nfirewall-cmd --permanent --add-port=3307/tcp\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);