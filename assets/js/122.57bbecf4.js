(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{637:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("今天改了个Bug, 要删除历史数据")]),s._v(" "),e("h4",{attrs:{id:"写个删除语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写个删除语句"}},[s._v("#")]),s._v(" 写个删除语句")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DELETE FROM yslx_erp.sys_order_complete WHERE id IN (\n  SELECT\n    max(id)\n  FROM yslx_erp.sys_order_complete\n  GROUP BY order_id\n  HAVING count(1) > 1\n);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("blockquote",[e("p",[s._v("提示: [HY000][1093] You can't specify target table 'sys_order_complete' for update in FROM clause")])]),s._v(" "),e("p",[s._v("记得原来在Oracle中, 写删除时, 这样是可以的呀.... 一脸蒙逼啊....去查了一下,原因"),e("code",[s._v("MySQL 把查询子句一定要是临时表，不可以是实体表")]),s._v(".")]),s._v(" "),e("h4",{attrs:{id:"修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DELETE FROM yslx_erp.sys_order_complete WHERE id IN (\n    SELECT id FROM (SELECT max(id) as id FROM yslx_erp.sys_order_complete GROUP BY order_id HAVING count(1) > 1) t\n);\nCOMMIT ;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);