(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{729:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("近期经常要根据日志排查线上问题, 日志动辄就是几百兆,VSCode和Sublime都太慢了.  这里记录一下用VIM检索日志的技巧...")]),s._v(" "),a("blockquote",[a("p",[s._v("平时,  VIM 用的确实不多...这类技能, 不用就容易忘. 还是記一下吧...")])]),s._v(" "),a("h4",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<1>this is a Book;\n<2>this is a dog;\n<3>this is a english book;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("eg: test.txt")])]),s._v(" "),a("h4",{attrs:{id:"需求一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求一"}},[s._v("#")]),s._v(" 需求一:")]),s._v(" "),a("p",[s._v("根据特征检索日志, 进行分析.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" test.txt\n:g/book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c/.w"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("out.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("将匹配到的行, 输出(追加)到 out.txt文件中")]),s._v(" "),a("p",[a("code",[s._v("\\c")]),s._v(" 是忽略大小写")])]),s._v(" "),a("h4",{attrs:{id:"需求二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求二"}},[s._v("#")]),s._v(" 需求二:")]),s._v(" "),a("p",[s._v("逐条分析检索出的日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" out.txt\n/^"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("Y")]),s._v(" "),a("code",[s._v("Y")]),s._v(" 复制当前行")])])])}),[],!1,null,null,null);t.default=n.exports}}]);