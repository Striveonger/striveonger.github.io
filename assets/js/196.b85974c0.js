(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{857:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("父页面获取iframe 子页面的js变量值, 以及子页面获取父页面js变量")]),t._v(" "),s("h4",{attrs:{id:"父页面获取iframe-子页面的js变量值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父页面获取iframe-子页面的js变量值"}},[t._v("#")]),t._v(" 父页面获取iframe 子页面的js变量值")]),t._v(" "),s("p",[t._v("方法只有一种：")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("p",[t._v("1、获取iframe节点")]),t._v(" "),s("p",[t._v("2、获取iframe中的变量")]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("p",[t._v("a.html\n"),s("code",[t._v("<iframe id='x' name='x' src='b.html'/>")])]),t._v(" "),s("p",[t._v("b.html")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script>\n   var y='1';\n<\/script>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("在a.html中获取y，则可以通过以下方式\n"),s("code",[t._v("document.frames['x'].y")]),t._v("  //先获取frame,在获取y")]),t._v(" "),s("h4",{attrs:{id:"子页面获取父页面js变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子页面获取父页面js变量"}},[t._v("#")]),t._v(" 子页面获取父页面js变量")]),t._v(" "),s("p",[t._v("父页面")]),t._v(" "),s("p",[s("code",[t._v('<input type="hidden" id="result" name="result" value="" />')])]),t._v(" "),s("p",[t._v("子页面")]),t._v(" "),s("p",[s("code",[t._v('<input type="hidden" id="_bh${da.bh}" value=\'${da.bh},${da.name},${da.sfzh},${da.lxdh}\'/>')])]),t._v(" "),s("p",[t._v("在子页面取得父页面的对象，并赋值")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);