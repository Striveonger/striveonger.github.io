(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{625:function(s,t,n){"use strict";n.r(t);var _=n(0),a=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("MySQL 5.7 之后, only_full_group_by 默认是打开的.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出RDS数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nSELECT @@sql_mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\nSELECT @@GLOBAL.sql_mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SESSION")]),s._v(".sql_mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),s._v("\n\nSET GLOBAL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sql_mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SELECT REPLACE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@@sql_mode,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ONLY_FULL_GROUP_BY'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);