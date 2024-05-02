(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{608:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("ElasticSearch 数据源设计(基于7.x版本)")]),t._v(" "),s("h3",{attrs:{id:"elasticsearch-数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-数据源"}},[t._v("#")]),t._v(" ElasticSearch 数据源")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"13px",float:"right"}},[t._v("基于7.2版本开发, 建议6.x及以上版本使用")])]),t._v(" "),s("h4",{attrs:{id:"创建数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据源"}},[t._v("#")]),t._v(" 创建数据源")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("        所需参数:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("所需信息名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数据源名称")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建的数据源名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("服务器地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于访问ElasticSearch("),s("span",{staticStyle:{"font-size":"13px"}},[t._v("IP或域名皆可, 需公网可访问")]),t._v(")")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("端口号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于访问ElasticSearch("),s("span",{staticStyle:{"font-size":"13px"}},[t._v("需公网可访问")]),t._v(")")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("验证用户")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于标识访问ElasticSearch时, 是否需要验证用户信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("用户名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当需要验证用户信息时, 必填")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("密码")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当需要验证用户信息时, 必填")])])])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("例1:")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datasourceName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.10.13"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9400"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isAuth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("例2:")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datasourceName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.10.13"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9400"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isAuth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("blockquote",[s("p",[t._v("验证失败信息尚未做处理(比如: 连接失败或用户名密码错误未做分类)")])]),t._v(" "),s("h4",{attrs:{id:"创建数据表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据表"}},[t._v("#")]),t._v(" 创建数据表")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("所需参数:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("所需信息名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数据源ID")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("所属的数据源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("表名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建的表名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("索引(index)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ElasticSearch的index名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("类型(type)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定index的type，默认是_doc")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("精确匹配(exactMatch)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否精确匹配index")])])])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("例1:")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datasourceId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("469")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tablename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_Table"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_doc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exactMatch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("span",{staticStyle:{"font-size":"11px","font-weight":"bold"}},[t._v("例2:")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datasourceId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("469")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tablename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES_Table"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user,user_info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_doc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exactMatch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("ol",[s("li",[t._v("建议"),s("code",[t._v("index")]),t._v("与"),s("code",[t._v("type")]),t._v("为一对一关系(这也是ElasticSearch官方的态度).")]),t._v(" "),s("li",[s("code",[t._v("index")]),t._v(" 与 "),s("code",[t._v("type")]),t._v(" 的录入与展示方式:")])]),t._v(" "),s("ul",[s("li",[t._v("后台可以获得所有"),s("code",[t._v("index")]),t._v(", 但无法活得 "),s("code",[t._v("type")]),t._v("信息.")]),t._v(" "),s("li",[s("code",[t._v("index")]),t._v(" 可能会比较多, 建议分页展示.")]),t._v(" "),s("li",[s("code",[t._v("type")]),t._v(" 由于后台无法获取到, 所以要用户自己输入. 用户不输入, 默认为"),s("code",[t._v("_doc")])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("当模糊检索"),s("code",[t._v("index")]),t._v("信息时, 索引名既可以写全名用"),s("code",[t._v(",")]),t._v("隔开也可以用通配符"),s("code",[t._v("*")]),t._v(" (eg: "),s("code",[t._v("use*")]),t._v(", "),s("code",[t._v("*se*")]),t._v(")")]),t._v(" "),s("li",[t._v("从ElasticSearch的语法上是支持只加一个"),s("code",[t._v("*")]),t._v("的(检索所有"),s("code",[t._v("index")]),t._v("), 但我们是不允许这样的(后台会做限制).")]),t._v(" "),s("li",[t._v("若模糊检索"),s("code",[t._v("index")]),t._v(", 表达式匹配到的表结构要求一致.")]),t._v(" "),s("li",[t._v("ElasticSearch 数据源暂时不支持 "),s("code",[t._v("合表")])])])]),t._v(" "),s("h4",{attrs:{id:"预览数据表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览数据表"}},[t._v("#")]),t._v(" 预览数据表")]),t._v(" "),s("blockquote",[s("p",[t._v("入参与其他数据源一致, 这里就不一一罗列了.")])]),t._v(" "),s("p",[s("strong",[t._v("需要注意:")])]),t._v(" "),s("ul",[s("li",[t._v("ElasticSearch 不支持 "),s("code",[t._v("表达式过滤")])]),t._v(" "),s("li",[t._v("在进行精确查询时, 字符串类型数据只支持"),s("code",[t._v("keyword")]),t._v("类型数据")]),t._v(" "),s("li",[t._v("ElasticSearch 数据源暂时不支持 "),s("code",[t._v("添加字段")])])]),t._v(" "),s("h4",{attrs:{id:"预览图表-聚合数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览图表-聚合数据"}},[t._v("#")]),t._v(" 预览图表(聚合数据)")]),t._v(" "),s("blockquote",[s("p",[t._v("入参与其他数据源一致, 这里就不一一罗列了.")])]),t._v(" "),s("p",[s("strong",[t._v("需要注意:")])]),t._v(" "),s("ul",[s("li",[t._v("时间做维度时, 暂时不支持"),s("code",[t._v("按周")]),t._v(", "),s("code",[t._v("按年周")]),t._v(" 聚合")])]),t._v(" "),s("blockquote",[s("p",[s("span",{staticStyle:{"font-size":"23px","font-weight":"bold",color:"red"}},[t._v("注: 上述所需参数只做为示例, 具体传参形式, 后期与前端一起商定.")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"13px"}},[t._v("目前以精确匹配index做的开发, 模糊匹配尚不支持. ")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);