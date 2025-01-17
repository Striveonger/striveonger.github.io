(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{630:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("HBase 日常使用命令")]),t._v(" "),s("h4",{attrs:{id:"查看所在组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所在组"}},[t._v("#")]),t._v(" 查看所在组")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("whoami")])])]),t._v(" "),s("h4",{attrs:{id:"查看所在组中的表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所在组中的表"}},[t._v("#")]),t._v(" 查看所在组中的表")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("list")])])]),t._v(" "),s("h4",{attrs:{id:"判断表是否存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断表是否存在"}},[t._v("#")]),t._v(" 判断表是否存在")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("exists 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"将表设为失效状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将表设为失效状态"}},[t._v("#")]),t._v(" 将表设为失效状态")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("disable 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"判断表的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断表的状态"}},[t._v("#")]),t._v(" 判断表的状态")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("is_enabled 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"将表设为正常状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将表设为正常状态"}},[t._v("#")]),t._v(" 将表设为正常状态")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("enable 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"删除表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[t._v("#")]),t._v(" 删除表")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("drop 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"创建表-lishuyu-表名-cluster1-cluster2-簇名-没有具体的列名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建表-lishuyu-表名-cluster1-cluster2-簇名-没有具体的列名"}},[t._v("#")]),t._v(" 创建表(lishuyu –> 表名, cluster1,cluster2 –> 簇名, 没有具体的列名)")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("create 'lishuyu',{NAME => 'cluster1', VERSIONS => 2},{NAME => 'cluster2', VERSIONS => 2}")])])]),t._v(" "),s("h4",{attrs:{id:"查看表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看表结构"}},[t._v("#")]),t._v(" 查看表结构")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("describe 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"插入数据-一次只可以插入一个单元格的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入数据-一次只可以插入一个单元格的值"}},[t._v("#")]),t._v(" 插入数据(一次只可以插入一个单元格的值)")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("put 'lishuyu','rowkey001','cluster1:col1','col1-value-001'")])]),t._v(" "),s("h4",{attrs:{id:"查询数据-lishuyu-表名-cluster2-簇名-col2-列名-查询-rowkey001-行-cluster2-簇-col2-列-的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据-lishuyu-表名-cluster2-簇名-col2-列名-查询-rowkey001-行-cluster2-簇-col2-列-的数据"}},[t._v("#")]),t._v(" 查询数据(lishuyu –> 表名, cluster2 –> 簇名, col2 –> 列名),  查询 rowkey001 行, cluster2 簇, col2 列 的数据")]),t._v(" "),s("p",[s("code",[t._v("get 'lishuyu','rowkey001', 'cluster2:col2'")])])]),t._v(" "),s("h4",{attrs:{id:"查询-rowkey001-行-的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询-rowkey001-行-的数据"}},[t._v("#")]),t._v(" 查询 rowkey001 行 的数据")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("get 'lishuyu','rowkey001'")])])]),t._v(" "),s("h4",{attrs:{id:"扫描表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫描表"}},[t._v("#")]),t._v(" 扫描表")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("scan 'lishuyu',{LIMIT=>1}")]),t._v(" "),s("code",[t._v("scan 'lishuyu', {COLUMNS='cluster2:col1', LIMIT = 1}")])])]),t._v(" "),s("h4",{attrs:{id:"计算lishuyu表合计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算lishuyu表合计"}},[t._v("#")]),t._v(" 计算lishuyu表合计")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("count 'lishuyu'")])])]),t._v(" "),s("h4",{attrs:{id:"显示rowkey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示rowkey"}},[t._v("#")]),t._v(" 显示RowKey")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("count 'lishuyu', {INTERVAL => 1, CACHE => 5}")])])]),t._v(" "),s("h4",{attrs:{id:"删除表中单元格中的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除表中单元格中的内容"}},[t._v("#")]),t._v(" 删除表中单元格中的内容")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("delete 'lishuyu','rowkey001','cluster2:col1'")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);