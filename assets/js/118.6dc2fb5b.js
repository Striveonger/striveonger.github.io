(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{621:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("忽然不会写UPDATE语句了....")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" yslx_erp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sys_order_status os\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" oc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_complete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" code\n               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" yslx_erp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sys_order o\n               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" yslx_erp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sys_order_complete oc "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" oc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("order_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" oc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" yslx_erp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sys_outlay_income_money m "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("order_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("order_id\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);