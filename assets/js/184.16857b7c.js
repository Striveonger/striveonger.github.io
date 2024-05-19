(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{706:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("父页面获取iframe 子页面的js变量值, 以及子页面获取父页面js变量")]),t._v(" "),a("h4",{attrs:{id:"父页面获取iframe-子页面的js变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父页面获取iframe-子页面的js变量值"}},[t._v("#")]),t._v(" 父页面获取iframe 子页面的js变量值")]),t._v(" "),a("p",[t._v("方法只有一种：")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("p",[t._v("1、获取iframe节点")]),t._v(" "),a("p",[t._v("2、获取iframe中的变量")]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("p",[t._v("a.html\n"),a("code",[t._v("<iframe id='x' name='x' src='b.html'/>")])]),t._v(" "),a("p",[t._v("b.html")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<script>\n   var y='1';\n<\/script>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("在a.html中获取y，则可以通过以下方式\n"),a("code",[t._v("document.frames['x'].y")]),t._v("  //先获取frame,在获取y")]),t._v(" "),a("h4",{attrs:{id:"子页面获取父页面js变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子页面获取父页面js变量"}},[t._v("#")]),t._v(" 子页面获取父页面js变量")]),t._v(" "),a("p",[t._v("父页面")]),t._v(" "),a("p",[a("code",[t._v('<input type="hidden" id="result" name="result" value="" />')])]),t._v(" "),a("p",[t._v("子页面")]),t._v(" "),a("p",[a("code",[t._v('<input type="hidden" id="_bh${da.bh}" value=\'${da.bh},${da.name},${da.sfzh},${da.lxdh}\'/>')])]),t._v(" "),a("p",[t._v("在子页面取得父页面的对象，并赋值")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);