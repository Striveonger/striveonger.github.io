(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{551:function(s,t,a){s.exports=a.p+"assets/img/node-db-01_001.d889b426.jpg"},770:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("关于 MongoDB BI Connector 性能测试")]),s._v(" "),n("h4",{attrs:{id:"价格摘要报告查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#价格摘要报告查询"}},[s._v("#")]),s._v(" 价格摘要报告查询")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" l_returnflag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       l_linestatus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_quantity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" sum_qty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_extendedprice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" sum_base_price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_extendedprice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" l_discount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" sum_disc_price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_extendedprice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" l_discount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" l_tax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" sum_charge"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_quantity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" avg_qty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_extendedprice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" avg_price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l_discount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" avg_disc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" count_order\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" lineitem\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" l_shipdate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ADDDATE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1998-12-01'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" l_returnflag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l_linestatus\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" l_returnflag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l_linestatus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("blockquote",[n("p",[s._v("4 rows retrieved starting from 1 in 47s 828ms (execution: 47s 796ms, fetching: 32ms)")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lineitem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 6001215")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("execution: 5s 600ms, fetching: 5ms")])]),s._v(" "),n("p",[s._v("带有分组、排序、聚集操作并存的单表查询操作。")]),s._v(" "),n("h4",{attrs:{id:"最小代价供应者查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最小代价供应者查询"}},[s._v("#")]),s._v(" 最小代价供应者查询")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" s_acctbal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       s_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       n_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       p_partkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       p_mfgr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       s_address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       s_phone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       s_comment\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" part"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" supplier"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" partsupp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" region\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" p_partkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ps_partkey\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s_suppkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ps_suppkey\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" p_size "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" p_type "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%BRASS'")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s_nationkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n_nationkey\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n_regionkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r_regionkey\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" r_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EUROPE'")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" ps_supplycost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("MIN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ps_supplycost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" partsupp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" supplier"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" region\n                         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" p_partkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ps_partkey\n                           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s_suppkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ps_suppkey\n                           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s_nationkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n_nationkey\n                           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n_regionkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r_regionkey\n                           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" r_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EUROPE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" s_acctbal "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p_partkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("blockquote",[n("p",[s._v("时间太久, 终止查询")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("part"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 200000")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("supplier"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 10000")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("partsupp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 800000")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 25")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("region"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 5")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("sql> SELECT COUNT(1) FROM tpch.part\n[2019-07-18 13:50:20] 1 row retrieved starting from 1 in 191ms (execution: 177ms, fetching: 14ms)")]),s._v(" "),n("p",[s._v("sql> SELECT COUNT(1) FROM tpch.supplier\n[2019-07-18 13:50:20] 1 row retrieved starting from 1 in 40ms (execution: 33ms, fetching: 7ms)")]),s._v(" "),n("p",[s._v("sql> SELECT COUNT(1) FROM tpch.partsupp\n[2019-07-18 13:50:21] 1 row retrieved starting from 1 in 484ms (execution: 480ms, fetching: 4ms)")]),s._v(" "),n("p",[s._v("sql> SELECT COUNT(1) FROM tpch.nation\n[2019-07-18 13:50:21] 1 row retrieved starting from 1 in 54ms (execution: 37ms, fetching: 17ms)")]),s._v(" "),n("p",[s._v("sql> SELECT COUNT(1) FROM tpch.region\n[2019-07-18 13:50:21] 1 row retrieved starting from 1 in 54ms (execution: 41ms, fetching: 13ms)")])]),s._v(" "),n("p",[s._v("这个查询给出在给定的区域内，对于指定的零件，应该选择哪个供应者来订货")]),s._v(" "),n("h4",{attrs:{id:"尝试最简单的两表关联查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试最简单的两表关联查询"}},[s._v("#")]),s._v(" 尝试最简单的两表关联查询:")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" l_orderkey\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orders\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" tpch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lineitem "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" l_orderkey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o_orderkey\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" l_shipdate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1995-03-15'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("p",[s._v("[104 虚拟机中] 500 rows retrieved starting from 1 in 23m 28s 986ms (execution: 5m 36s 666ms, fetching: 17m 52s 320ms)")]),s._v(" "),n("p",[s._v("[13 服务器中] 500 rows retrieved starting from 1 in 13m 50s 643ms (execution: 2m 48s 126ms, fetching: 11m 2s 517ms)")])]),s._v(" "),n("p",[s._v("查询期间服务器的状态:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(551),alt:"node-db-01_001"}})]),s._v(" "),n("p",[n("code",[s._v("mongod")]),s._v(" 与 "),n("code",[s._v("mongosqld")]),s._v(" 占据了服务器"),n("code",[s._v("80%")]),s._v("的资源.")]),s._v(" "),n("p",[s._v("这里推测:")]),s._v(" "),n("p",[n("code",[s._v("execution: 5m 36s 666ms")]),s._v(" 执行查询 由 "),n("code",[s._v("mongod")]),s._v(" 进程完成.")]),s._v(" "),n("p",[n("code",[s._v("fetching: 17m 52s 320ms")]),s._v(" 取回查询 由 "),n("code",[s._v("mongosqld")]),s._v(" 进程完成.")]),s._v(" "),n("p",[s._v("可能先由  "),n("code",[s._v("mongod")]),s._v("  根据条件查询出所需数据, 再由  "),n("code",[s._v("mongosqld")]),s._v(" 进行聚合加工出结果数据.")]),s._v(" "),n("blockquote",[n("p",[s._v("Ps: 加工数据时, 会消耗大量的CPU资源")])]),s._v(" "),n("h4",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结:")]),s._v(" "),n("p",[n("code",[s._v("MongoDB BI Connector")]),s._v(" 是对MongoDB 用户SQL需求的补充, 也提供了一定的计算能力. 在没有表关联的需求情况下, 是个不错的选择.")]),s._v(" "),n("p",[s._v("但当业务逻辑中涉及到表间关联时, 还是不要用"),n("code",[s._v("MongoDB BI Connector")]),s._v(" 了")])])}),[],!1,null,null,null);t.default=e.exports}}]);