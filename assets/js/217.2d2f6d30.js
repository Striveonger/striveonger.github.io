(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{747:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("近期经常要根据日志排查线上问题, 日志动辄就是几百兆,VSCode和Sublime都太慢了.  这里记录一下用VIM检索日志的技巧...")]),s._v(" "),t("blockquote",[t("p",[s._v("平时,  VIM 用的确实不多...这类技能, 不用就容易忘. 还是記一下吧...")])]),s._v(" "),t("h4",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<1>this is a Book;\n<2>this is a dog;\n<3>this is a english book;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("eg: test.txt")])]),s._v(" "),t("h4",{attrs:{id:"需求一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求一"}},[s._v("#")]),s._v(" 需求一:")]),s._v(" "),t("p",[s._v("根据特征检索日志, 进行分析.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" test.txt\n:g/book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c/.w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("out.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("将匹配到的行, 输出(追加)到 out.txt文件中")]),s._v(" "),t("p",[t("code",[s._v("\\c")]),s._v(" 是忽略大小写")])]),s._v(" "),t("h4",{attrs:{id:"需求二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求二"}},[s._v("#")]),s._v(" 需求二:")]),s._v(" "),t("p",[s._v("逐条分析检索出的日志")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" out.txt\n/^"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("Y")]),s._v(" "),t("code",[s._v("Y")]),s._v(" 复制当前行")])])])}),[],!1,null,null,null);t.default=n.exports}}]);