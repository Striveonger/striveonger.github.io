(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{606:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("系统随着数据量的增长, 变得越来越慢. 慢到了不能忍受的地步, 故有了这次调优.")]),s._v(" "),a("h4",{attrs:{id:"查找问题点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找问题点"}},[s._v("#")]),s._v(" 查找问题点")]),s._v(" "),a("ol",[a("li",[s._v("从日志里拿出SQL, 执行了一下 10.8s.有点惊呆")]),s._v(" "),a("li",[s._v("开始端详SQL...")]),s._v(" "),a("li",[s._v("将SQL拆开, 一部分一部分的执行. 找到慢的点")])]),s._v(" "),a("blockquote",[a("p",[s._v("影响速度是是一个判断订单状态的子SQL. 执行耗时竟然占用了 7.8s.")])]),s._v(" "),a("h4",{attrs:{id:"处理慢sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理慢sql"}},[s._v("#")]),s._v(" 处理慢SQL")]),s._v(" "),a("p",[s._v("先创建关联条件的联合索引, 试试水. 从 7.8s 减到了 6.3s")]),s._v(" "),a("p",[s._v("又创建了判断条件的联合索引, 这次减到 0.24s. 大喜....")]),s._v(" "),a("p",[s._v("整体执行 0.37s")]),s._v(" "),a("h4",{attrs:{id:"创建索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[s._v("#")]),s._v(" 创建索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" 索引名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);