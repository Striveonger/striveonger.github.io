(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{615:function(v,_,e){"use strict";e.r(_);var a=e(0),t=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("麒麟出没，必有祥瑞")]),v._v(" "),_("p",[v._v("Apache Kylin采用“预计算”的模式，用户只需要提前定义好查询维度，Kylin将帮助我们进行计算，并将结果存储到HBase中，为海量数据的查询和分析提供亚秒级返回，是一种典型的“空间换时间”的解决方案。")]),v._v(" "),_("h3",{attrs:{id:"apache-kylin-技术架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#apache-kylin-技术架构"}},[v._v("#")]),v._v(" Apache Kylin 技术架构")]),v._v(" "),_("p",[v._v("Apache Kylin系统主要可以分为"),_("code",[v._v("离线构建")]),v._v("和"),_("code",[v._v("在线查询")]),v._v("两部分")]),v._v(" "),_("h4",{attrs:{id:"离线构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#离线构建"}},[v._v("#")]),v._v(" 离线构建")]),v._v(" "),_("p",[v._v("目前Kylin默认的数据源是Hive, 保存着待分析的用户数据.")]),v._v(" "),_("p",[v._v("根据元数据的定义, 构建引擎(MapReduce)从数据源抽取数据, 并构建Cube。数据以"),_("code",[v._v("关系表")]),v._v("的形式输入，并且必须符合星形模型。")]),v._v(" "),_("p",[v._v("构建后的Cube保存到存储引擎中(HBase)")]),v._v(" "),_("h4",{attrs:{id:"在线查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在线查询"}},[v._v("#")]),v._v(" 在线查询")]),v._v(" "),_("p",[v._v("Kylin提供了RESTful API, JDBC/ODBC接口供用户调用.")]),v._v(" "),_("p",[v._v("SQL 由REST Server转交给查询引擎(Query Engine)处理.")]),v._v(" "),_("p",[v._v("查询引擎解析SQL, 生成基于关系表的逻辑执行计划, 然后将其转译为基于Cube的物理执行计划, 最后查询预计算生成的Cube并产生结果.")]),v._v(" "),_("blockquote",[_("p",[v._v("Kylin对"),_("code",[v._v("数据源")]),v._v(", "),_("code",[v._v("执行引擎")]),v._v("和"),_("code",[v._v("Cube存储")]),v._v("三个核心模块抽象提出, 比如:")]),v._v(" "),_("ul",[_("li",[v._v("Spark替代MapReduce作为Cube的构建引擎")]),v._v(" "),_("li",[v._v("Cassandra替代HBase作为Cube计算后数据的存储")])])]),v._v(" "),_("h4",{attrs:{id:"kylin-特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kylin-特性"}},[v._v("#")]),v._v(" Kylin 特性:")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("支持标准SQL")])]),v._v(" "),_("li",[_("p",[v._v("支持超大数据集("),_("span",{staticStyle:{"font-size":"1.69ex"}},[v._v("Kylin在数据集规模上的局限性主要取决于维度的个数和基数, 而不是数据集的大小, 所以Kylin能更好地支持海量数据集的查询.")]),v._v(")")])]),v._v(" "),_("li",[_("p",[v._v("亚秒级响应("),_("span",{staticStyle:{"font-size":"1.69ex"}},[v._v("受益于预计算技术, 复杂的连接, 聚合等操作都在Cube的构建过程中已经完成了")]),v._v(")")])]),v._v(" "),_("li",[_("p",[v._v("可伸缩性和高吞吐率")])])]),v._v(" "),_("blockquote",[_("p",[v._v("以上整理自网络....")]),v._v(" "),_("p",[v._v("个人理解:")]),v._v(" "),_("ol",[_("li",[v._v("Kylin SQL查询的是"),_("code",[v._v("Cube")])]),v._v(" "),_("li",[_("code",[v._v("Cube")]),v._v(" 是由源数据 "),_("code",[v._v("筛选")]),v._v(", "),_("code",[v._v("聚合")]),v._v(" 得来的")]),v._v(" "),_("li",[v._v("问题来了, "),_("code",[v._v("Cube")]),v._v(" 是什么?\n"),_("ol",[_("li",[v._v("所有纬度与度量的所有组合")]),v._v(" "),_("li",[v._v("xxx")])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);