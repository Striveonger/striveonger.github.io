(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{616:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("HBase 日常使用命令")]),a._v(" "),t("h2",{attrs:{id:"hbase-初体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-初体验"}},[a._v("#")]),a._v(" HBase 初体验")]),a._v(" "),t("h4",{attrs:{id:"安装-hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-hbase"}},[a._v("#")]),a._v(" 安装 HBase")]),a._v(" "),t("p",[t("code",[a._v("docker pull harisekhon/hbase")])]),a._v(" "),t("h4",{attrs:{id:"创建hbase容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建hbase容器"}},[a._v("#")]),a._v(" 创建HBase容器")]),a._v(" "),t("p",[t("code",[a._v("docker run -d --name=hbase -p 2181:2181 -p 8080:8080 -p 8085:8085 -p 9090:9090 -p 9095:9095 -p 16000:16000 -p 16010:16010 -p 16201:16201 -p 16301:16301 harisekhon/hbase")])]),a._v(" "),t("h4",{attrs:{id:"启动-hbase-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-hbase-服务"}},[a._v("#")]),a._v(" 启动 HBase 服务")]),a._v(" "),t("p",[t("code",[a._v("docker start hbase")])]),a._v(" "),t("h4",{attrs:{id:"停止-hbase-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止-hbase-服务"}},[a._v("#")]),a._v(" 停止 HBase 服务")]),a._v(" "),t("p",[t("code",[a._v("docker stop hbase")])]),a._v(" "),t("h4",{attrs:{id:"启动-hbase-命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-hbase-命令行"}},[a._v("#")]),a._v(" 启动 HBase 命令行")]),a._v(" "),t("p",[t("code",[a._v("docker exec -ti hbase /bin/bash")])]),a._v(" "),t("h4",{attrs:{id:"进入-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-shell"}},[a._v("#")]),a._v(" 进入 shell")]),a._v(" "),t("blockquote",[t("p",[a._v("hbase shell")])]),a._v(" "),t("h4",{attrs:{id:"退出-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出-shell"}},[a._v("#")]),a._v(" 退出 shell")]),a._v(" "),t("blockquote",[t("p",[a._v("exit")])]),a._v(" "),t("h4",{attrs:{id:"建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[a._v("#")]),a._v(" 建表")]),a._v(" "),t("blockquote",[t("p",[a._v("create 'SCORE', {NAME => 'F', VERSIONS => 1}, {NAME => 'M', VERSIONS => 1}")])]),a._v(" "),t("h4",{attrs:{id:"删除表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[a._v("#")]),a._v(" 删除表")]),a._v(" "),t("blockquote",[t("p",[a._v("disable 'SCORE'\ndrop 'SCORE'")])]),a._v(" "),t("h4",{attrs:{id:"新增记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增记录"}},[a._v("#")]),a._v(" 新增记录")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("put '<table>', '<row_key>', '<column_family:column_qualifier>', '<cell_value>', [<timestamp>]")])])]),a._v(" "),t("h5",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("blockquote",[t("p",[a._v("put 'SCORE', 'row_key_1', 'M:1', '1'")])]),a._v(" "),t("h4",{attrs:{id:"删除单元格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除单元格"}},[a._v("#")]),a._v(" 删除单元格")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("delete '<table>', '<row_key>', '<column_family:column_qualifier>' [, <timestamp>]")])])]),a._v(" "),t("h5",{attrs:{id:"例子-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子-2"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("blockquote",[t("p",[a._v("delete 'SCORE', 'row_key_1', 'M:1'")])]),a._v(" "),t("h4",{attrs:{id:"删除行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除行"}},[a._v("#")]),a._v(" 删除行")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("deleteall '<table>', '<row_key>' [, '<column_family:column_qualifier>', <timestamp>]")])])]),a._v(" "),t("h5",{attrs:{id:"例子-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子-3"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("blockquote",[t("p",[a._v("deleteall 'SCORE', 'row_key_1'")])]),a._v(" "),t("h4",{attrs:{id:"清空表中数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清空表中数据"}},[a._v("#")]),a._v(" 清空表中数据")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("truncate <table>")])])]),a._v(" "),t("h5",{attrs:{id:"例子-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子-4"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("blockquote",[t("p",[a._v("truncate 'SCORE'")])]),a._v(" "),t("h4",{attrs:{id:"扫描表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扫描表"}},[a._v("#")]),a._v(" 扫描表")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("scan <table>, {COLUMNS => [ <family:column>,.... ], LIMIT => num}")])])]),a._v(" "),t("h5",{attrs:{id:"例子-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子-5"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("blockquote",[t("p",[a._v("scan 'SCORE', {LIMIT=>2}")])]),a._v(" "),t("h4",{attrs:{id:"查询某行记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询某行记录"}},[a._v("#")]),a._v(" 查询某行记录")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("get <table>,<rowkey>,[<family:column>,....]")])])]),a._v(" "),t("h4",{attrs:{id:"注"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注"}},[a._v("#")]),a._v(" 注:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("table")]),a._v("  表")]),a._v(" "),t("li",[t("code",[a._v("row_key")]),a._v("  行")]),a._v(" "),t("li",[t("code",[a._v("column_family")]),a._v("  列簇")]),a._v(" "),t("li",[t("code",[a._v("column_qualifier")]),a._v("  列")])])])}),[],!1,null,null,null);t.default=r.exports}}]);