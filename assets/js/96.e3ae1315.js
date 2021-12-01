(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{603:function(_,v,e){"use strict";e.r(v);var a=e(4),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("麒麟出没，必有祥瑞")]),_._v(" "),e("p",[_._v("Apache Kylin采用“预计算”的模式，用户只需要提前定义好查询维度，Kylin将帮助我们进行计算，并将结果存储到HBase中，为海量数据的查询和分析提供亚秒级返回，是一种典型的“空间换时间”的解决方案。")]),_._v(" "),e("h3",{attrs:{id:"apache-kylin-技术架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-kylin-技术架构"}},[_._v("#")]),_._v(" Apache Kylin 技术架构")]),_._v(" "),e("p",[_._v("Apache Kylin系统主要可以分为"),e("code",[_._v("离线构建")]),_._v("和"),e("code",[_._v("在线查询")]),_._v("两部分")]),_._v(" "),e("p",[e("img",{attrs:{src:"/Users/selfimpr/development/workspace/blog/images/node-kylin_001_01.png",alt:"node-kylin_001_01"}})]),_._v(" "),e("h4",{attrs:{id:"离线构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线构建"}},[_._v("#")]),_._v(" 离线构建")]),_._v(" "),e("p",[_._v("目前Kylin默认的数据源是Hive, 保存着待分析的用户数据.")]),_._v(" "),e("p",[_._v("根据元数据的定义, 构建引擎(MapReduce)从数据源抽取数据, 并构建Cube。数据以"),e("code",[_._v("关系表")]),_._v("的形式输入，并且必须符合星形模型。")]),_._v(" "),e("p",[_._v("构建后的Cube保存到存储引擎中(HBase)")]),_._v(" "),e("h4",{attrs:{id:"在线查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线查询"}},[_._v("#")]),_._v(" 在线查询")]),_._v(" "),e("p",[_._v("Kylin提供了RESTful API, JDBC/ODBC接口供用户调用.")]),_._v(" "),e("p",[_._v("SQL 由REST Server转交给查询引擎(Query Engine)处理.")]),_._v(" "),e("p",[_._v("查询引擎解析SQL, 生成基于关系表的逻辑执行计划, 然后将其转译为基于Cube的物理执行计划, 最后查询预计算生成的Cube并产生结果.")]),_._v(" "),e("blockquote",[e("p",[_._v("Kylin对"),e("code",[_._v("数据源")]),_._v(", "),e("code",[_._v("执行引擎")]),_._v("和"),e("code",[_._v("Cube存储")]),_._v("三个核心模块抽象提出, 比如:")]),_._v(" "),e("ul",[e("li",[_._v("Spark替代MapReduce作为Cube的构建引擎")]),_._v(" "),e("li",[_._v("Cassandra替代HBase作为Cube计算后数据的存储")])])]),_._v(" "),e("h4",{attrs:{id:"kylin-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kylin-特性"}},[_._v("#")]),_._v(" Kylin 特性:")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("支持标准SQL")])]),_._v(" "),e("li",[e("p",[_._v("支持超大数据集("),e("span",{staticStyle:{"font-size":"1.69ex"}},[_._v("Kylin在数据集规模上的局限性主要取决于维度的个数和基数, 而不是数据集的大小, 所以Kylin能更好地支持海量数据集的查询.")]),_._v(")")])]),_._v(" "),e("li",[e("p",[_._v("亚秒级响应("),e("span",{staticStyle:{"font-size":"1.69ex"}},[_._v("受益于预计算技术, 复杂的连接, 聚合等操作都在Cube的构建过程中已经完成了")]),_._v(")")])]),_._v(" "),e("li",[e("p",[_._v("可伸缩性和高吞吐率")])])]),_._v(" "),e("blockquote",[e("p",[_._v("以上整理自网络....")]),_._v(" "),e("p",[_._v("个人理解:")]),_._v(" "),e("ol",[e("li",[_._v("Kylin SQL查询的是"),e("code",[_._v("Cube")])]),_._v(" "),e("li",[e("code",[_._v("Cube")]),_._v(" 是由源数据 "),e("code",[_._v("筛选")]),_._v(", "),e("code",[_._v("聚合")]),_._v(" 得来的")]),_._v(" "),e("li",[_._v("问题来了, "),e("code",[_._v("Cube")]),_._v(" 是什么?\n"),e("ol",[e("li",[_._v("所有纬度与度量的所有组合")]),_._v(" "),e("li",[_._v("xxx")])])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);