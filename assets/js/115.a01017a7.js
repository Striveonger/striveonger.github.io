(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{627:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("远程测试mysql数据库3306端口报错")]),s._v(" "),t("h3",{attrs:{id:"错误现象："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误现象："}},[s._v("#")]),s._v(" 错误现象：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# telnet 192.168.10.130 3306")]),s._v("\nTrying "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.130"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nConnected to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.130.\nEscape character is "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^]'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nGHost "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.10.120'")]),s._v(" is not allowed to connect to this MySQL serverConnection closed by foreign "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"解决方法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法："}},[s._v("#")]),s._v(" 解决方法：")]),s._v(" "),t("p",[s._v("具体原因是权限问题，需要重新设置外部登陆用户权限")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" with grant option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);