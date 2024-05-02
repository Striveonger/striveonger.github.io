(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{716:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Docker 安装 MySQL容器")]),s._v(" "),a("h4",{attrs:{id:"_1-下载-mysql镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-mysql镜像"}},[s._v("#")]),s._v(" 1. 下载 MySQL镜像")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("docker pull mysql/mysql-server")])])]),s._v(" "),a("h4",{attrs:{id:"_2-启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动容器"}},[s._v("#")]),s._v(" 2. 启动容器")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("docker run -p 3306:3306 --name=mysql -d mysql/mysql-server")])])]),s._v(" "),a("h4",{attrs:{id:"_3-查看mysql默认密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看mysql默认密码"}},[s._v("#")]),s._v(" 3. 查看MySQL默认密码")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("docker logs mysql")])])]),s._v(" "),a("h4",{attrs:{id:"_4-登录后修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-登录后修改密码"}},[s._v("#")]),s._v(" 4. 登录后修改密码")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("set password = password('123456');")])])]),s._v(" "),a("h4",{attrs:{id:"_5-解决一下远程登录的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-解决一下远程登录的问题"}},[s._v("#")]),s._v(" 5. 解决一下远程登录的问题")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("update user set host = '%' where user = 'root';")])])]),s._v(" "),a("h4",{attrs:{id:"_6-安装mysql8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装mysql8-0"}},[s._v("#")]),s._v(" 6. 安装MySQL8.0")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33060")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("docker.mysql0.root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" mysql:8.0 --character-set-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 --collation-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);