(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{605:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("远程测试mysql数据库3306端口报错")]),s._v(" "),a("h3",{attrs:{id:"错误现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误现象"}},[s._v("#")]),s._v(" 错误现象：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# telnet 192.168.10.130 3306")]),s._v("\nTrying "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nConnected to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.130.\nEscape character is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^]'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nGHost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.10.120'")]),s._v(" is not allowed to connect to this MySQL serverConnection closed by foreign "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法：")]),s._v(" "),a("p",[s._v("具体原因是权限问题，需要重新设置外部登陆用户权限")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" with grant option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);