(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{854:function(t,s,e){"use strict";e.r(s);var n=e(4),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("CSS 内使用 JavaScript")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("_position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("_top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document.documentElement.scrollTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("这一段是CSS（层叠样式表）的代码，常用于网页的样式设计中")]),t._v(" "),e("p",[e("code",[t._v("_position:absolute;")]),t._v(" 这句代码的意思是“位置：绝对定位”，也就是说元素的位置是相对于整个浏览器窗口的，而不是相对于父元素。一般要配合top、left属性使用。")]),t._v(" "),e("p",[e("code",[t._v("_top:expression(eval(document.documentElement.scrollTop));")]),t._v("top属性是定义元素的顶部在网页中的位置，而CSS中的expression属性是用来调用Javascript代码。所以expression后面的括号中就是一行Javascript代码。"),e("code",[t._v("eval(document.documentElement.scrollTop);")])]),t._v(" "),e("p",[t._v("其中，"),e("code",[t._v("document.documentElement.scrollTop")]),t._v(" 的意思是获取当前页面滚动条所滚动到的位置的数值，而再用eval()函数把它计算成数值。 所以这句代码最终的意思就是：你浏览器窗口的滚动条滑到哪，这个元素的位置就在哪。")]),t._v(" "),e("p",[t._v("前面的下划线是CSS Hack中的用法，用来区分不同的浏览器以解决兼容问题，此处的下划线只有IE6能识别，而IE7、IE8、Firefox等浏览器是识别不了的，所以这两行代码只对IE6有效，其他浏览器是忽略它们的。要了解更多关于CSS Hack的信息")])])}),[],!1,null,null,null);s.default=a.exports}}]);