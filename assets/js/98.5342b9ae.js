(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{596:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Spring Boot 使用 MongoDB")]),s._v(" "),n("h4",{attrs:{id:"_1-下载-mongodb-的-docker镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-mongodb-的-docker镜像"}},[s._v("#")]),s._v(" 1. 下载 MongoDB 的 Docker镜像")]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("docker pull mongo")])])]),s._v(" "),n("h4",{attrs:{id:"_2-启动本地-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动本地-mongodb"}},[s._v("#")]),s._v(" 2. 启动本地 MongoDB")]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("docker run --name mongodb -v /Users/Selfimpr/development/workspace/mongodb:/data/db -p 27017:27017 -d mongo --auth")])])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("-d mongo")]),s._v("  镜像ID")]),s._v(" "),n("li",[n("code",[s._v("--auth")]),s._v("  连接MongoDB时, 需要授权")])]),s._v(" "),n("h4",{attrs:{id:"_3-设置-mongodb-的用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置-mongodb-的用户"}},[s._v("#")]),s._v(" 3. 设置 MongoDB 的用户")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mongodb /bin/bash\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 MongoDB 控制台")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mongo\nMongoDB shell version v4.0.10\nconnecting to: mongodb://127.0.0.1:27017/?gssapiServiceName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mongodb\nImplicit session: session "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" UUID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96e72aaf-8837-48fc-817b-d5983a0d88b1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMongoDB server version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),s._v(".10\nWelcome to the MongoDB shell.\nFor interactive help, "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nFor "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" comprehensive documentation, see\n\thttp://docs.mongodb.org/\nQuestions? Try the support group\n\thttp://groups.google.com/group/mongodb-user\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到管理员用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use admin\nswitched to db admin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为 MongoDB 添加管理员用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",pwd:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",roles:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",db:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSuccessfully added user: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出 MongoDB")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);