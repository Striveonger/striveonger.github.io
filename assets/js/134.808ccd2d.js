(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{778:function(s,t,n){"use strict";n.r(t);var _=n(4),a=Object(_.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("MySQL 5.7 之后, only_full_group_by 默认是打开的.")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出RDS数据")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nSELECT @@sql_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\nSELECT @@GLOBAL.sql_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SESSION")]),s._v(".sql_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\n\nSET GLOBAL "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sql_mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SELECT REPLACE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@@sql_mode,"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ONLY_FULL_GROUP_BY'")]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);