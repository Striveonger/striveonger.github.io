(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{728:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Spring Boot 使用 MongoDB")]),s._v(" "),t("h4",{attrs:{id:"_1-下载-mongodb-的-docker镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-mongodb-的-docker镜像"}},[s._v("#")]),s._v(" 1. 下载 MongoDB 的 Docker镜像")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("docker pull mongo")])])]),s._v(" "),t("h4",{attrs:{id:"_2-启动本地-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动本地-mongodb"}},[s._v("#")]),s._v(" 2. 启动本地 MongoDB")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("docker run --name mongodb -v /Users/Selfimpr/development/workspace/mongodb:/data/db -p 27017:27017 -d mongo --auth")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-d mongo")]),s._v("  镜像ID")]),s._v(" "),t("li",[t("code",[s._v("--auth")]),s._v("  连接MongoDB时, 需要授权")])]),s._v(" "),t("h4",{attrs:{id:"_3-设置-mongodb-的用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置-mongodb-的用户"}},[s._v("#")]),s._v(" 3. 设置 MongoDB 的用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mongodb /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 MongoDB 控制台")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mongo\nMongoDB shell version v4.0.10\nconnecting to: mongodb://127.0.0.1:27017/?gssapiServiceName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mongodb\nImplicit session: session "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" UUID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96e72aaf-8837-48fc-817b-d5983a0d88b1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMongoDB server version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),s._v(".10\nWelcome to the MongoDB shell.\nFor interactive help, "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nFor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" comprehensive documentation, see\n\thttp://docs.mongodb.org/\nQuestions? Try the support group\n\thttp://groups.google.com/group/mongodb-user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到管理员用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use admin\nswitched to db admin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为 MongoDB 添加管理员用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",pwd:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",roles:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",db:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSuccessfully added user: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出 MongoDB")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);