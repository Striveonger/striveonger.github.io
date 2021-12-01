(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{894:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("CentOS7 安装MongoDB")]),s._v(" "),a("h4",{attrs:{id:"安装-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb"}},[s._v("#")]),s._v(" 安装 MongoDB")]),s._v(" "),a("ol",[a("li",[s._v("下载安装包")])]),s._v(" "),a("blockquote",[a("p",[s._v("https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.0.10.tgz")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("解压")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("tar -xzvf mongodb-linux-x86_64-rhel70-4.0.10.tgz")])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("添加环境变量")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("vim /etc/profile")])]),s._v(" "),a("p",[s._v("尾部添加:  "),a("code",[s._v("export PATH=/usr/local/software/mongodb/bin:$PATH")])]),s._v(" "),a("p",[s._v("立即生效:  "),a("code",[s._v("source /etc/profile")])])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("创建目录 与 配置文件")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("mkdir data log config")])]),s._v(" "),a("p",[a("code",[s._v("vim config/mongodb.conf")])])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库文件位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("dbpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/usr/local/software/mongodb/data")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/usr/local/software/mongodb/log/mongo.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否追加写入日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("logappend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("27017")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否以守护进程方式运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志信息冗余 级别 从vv-vvvvv | vvvv=true,v越多记录越详细")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("verbose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("vv")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否以安全认证方式运行，默认是不认证的非安全方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#noauth = true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#auth = true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定地址,可以用逗号分隔绑定多个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("bind_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("127.0.0.1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("maxConns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进程ID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("pidfilepath")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/run/mongo.pid")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用定期记录, 每4s报告cpu利用率和io等待")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("cpu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("启动 MongoDB")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("cd bin")])]),s._v(" "),a("p",[a("code",[s._v("./mongod --config ../config/mongodb.conf")])])]),s._v(" "),a("h4",{attrs:{id:"安装-mongodb-connector-for-bi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb-connector-for-bi"}},[s._v("#")]),s._v(" 安装 MongoDB Connector for BI")]),s._v(" "),a("ol",[a("li",[s._v("下载安装包")])]),s._v(" "),a("blockquote",[a("p",[s._v("https://info-mongodb-com.s3.amazonaws.com/mongodb-bi/v2/mongodb-bi-linux-x86_64-rhel70-v2.11.0.tgz")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("解压")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("tar -xzvf mongodb-bi-linux-x86_64-rhel70-v2.11.0.tgz")])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("添加环境变量")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("vim /etc/profile")])]),s._v(" "),a("p",[s._v("尾部添加:  "),a("code",[s._v("export PATH=/usr/local/software/mongodb-bi/bin:$PATH")])]),s._v(" "),a("p",[s._v("立即生效:  "),a("code",[s._v("source /etc/profile")])])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("创建目录 与 配置文件")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("mkdir logs config")])]),s._v(" "),a("p",[a("code",[s._v("vim config/mongosqld.yml")])])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("systemLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/software/mongodb-bi/logs/mongosqld.log'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bindIp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1,10.13.144.104"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("注册并启动 Service")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("cd /bin")])]),s._v(" "),a("p",[a("code",[s._v("mongosqld install --config /usr/local/software/mongodb-bi/config/example-mongosqld-config.yml")])]),s._v(" "),a("p",[a("code",[s._v("systemctl start mongosql.service")])])]),s._v(" "),a("h4",{attrs:{id:"网络问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络问题"}},[s._v("#")]),s._v(" 网络问题")]),s._v(" "),a("p",[s._v("CentOS开放端口号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("firewall-cmd --permanent --add-port=27017/tcp\nfirewall-cmd --permanent --add-port=3307/tcp\nfirewall-cmd --reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);