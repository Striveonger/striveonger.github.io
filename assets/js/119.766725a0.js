(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{637:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("初认 Oracle 存储过程")]),s._v(" "),a("h4",{attrs:{id:"存储过程-基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储过程-基础语法"}},[s._v("#")]),s._v(" 存储过程 – 基础语法")]),s._v(" "),a("h5",{attrs:{id:"创建存储过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建存储过程"}},[s._v("#")]),s._v(" 创建存储过程")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" 存储过程名字 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 数据类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 数据类型\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v("\n变量"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n变量"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h5",{attrs:{id:"变量赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[s._v("#")]),s._v(" 变量赋值")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 列"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" 变量"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n变量"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" V_TEST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" something\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[s._v("#")]),s._v(" 循环")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHILE")]),s._v(" V_TEST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOOP")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" something\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"游标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游标"}},[s._v("#")]),s._v(" 游标")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 定义游标")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURSOR")]),s._v("  游标名  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- FOR ... IN 使用 游标")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" 临时变量名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" 游标名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOOP")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" something\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"存储过程-pl-sql-工具调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储过程-pl-sql-工具调试"}},[s._v("#")]),s._v(" 存储过程 – PL/SQL 工具调试")]),s._v(" "),a("ol",[a("li",[s._v("在 对象 窗口中 右击存储过程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-sql_9_1.png",alt:"node-sql_9_1"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加调试信息")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-sql_9_2.png",alt:"node-sql_9_2"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("重新编译")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-sql_9_3.png",alt:"node-sql_9_3"}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("测试")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-sql_9_4.png",alt:"node-sql_9_4"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);