(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{728:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("源于我想知道Docker当前运行的容器的IP")]),s._v(" "),t("h4",{attrs:{id:"首先获取docker容器ip的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先获取docker容器ip的命令"}},[s._v("#")]),s._v(" 首先获取Docker容器IP的命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{ .NetworkSettings.IPAddress }}'")]),s._v(" 1f7d8f36523c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"方法的扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法的扩展"}},[s._v("#")]),s._v(" 方法的扩展")]),s._v(" "),t("p",[s._v("在 ~/.bashrc 中写一个 bash 函数：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("docker_ip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{ .NetworkSettings.IPAddress }}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("source ~/.bashrc")]),s._v(" 生效, 然后:")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("docker_ip 1f7d8f36523c")])])]),s._v(" "),t("h4",{attrs:{id:"由此之后-继续的想象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#由此之后-继续的想象"}},[s._v("#")]),s._v(" 由此之后, 继续的想象")]),s._v(" "),t("p",[s._v("因为在Linux下用命令时查看文件列表时用习惯了"),t("code",[s._v("ll")]),s._v(", 换到MacOS后, 却没有"),t("code",[s._v("ll")]),s._v("命令. 经此法, 想试试, 又是好一番寻觅.")]),s._v(" "),t("ol",[t("li",[s._v("编辑 .bash_profile 文件：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("若没有该文件请手动创建。")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加内容")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -la'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("立即生效\n"),t("code",[s._v("source ~/.bash_profile")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);