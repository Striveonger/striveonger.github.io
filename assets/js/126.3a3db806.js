(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{669:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("SQL语句 查看Oracle版本")]),s._v(" "),e("p",[s._v("方法一：v$version")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" v$version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("方法二：product_component_version")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" product_component_version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("方法三：dbms_output.put_line( dbms_db_version.version )")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SERVEROUTPUT "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXEC")]),s._v(" dbms_output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" dbms_db_version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);