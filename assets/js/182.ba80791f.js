(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{850:function(t,o,e){"use strict";e.r(o);var n=e(4),v=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("关于 JDBC 自动提交")]),t._v(" "),e("p",[t._v("设置 JDBC 连接对象关闭 自动提交 "),e("code",[t._v("conn.setAutoCommit(false);")])]),t._v(" "),e("p",[t._v("在执行完SQL后, 要提交一下, "),e("code",[t._v("conn.commit();")])]),t._v(" "),e("p",[t._v("记得这个连接对象, 一定要是公共的一个连接对象, 关闭自动提交, 一定是要在初始化连接对象时设置的.")]),t._v(" "),e("p",[e("code",[t._v("conn.rollback();")]),t._v(" 是在SQL语句执行错误时，做数据回滚用的")]),t._v(" "),e("p",[t._v("在执行完你的逻辑算法后, 提交一下")]),t._v(" "),e("p",[t._v("在一个处理逻辑中，打开一个数据库连接，处理结束时，关闭这个连接")]),t._v(" "),e("p",[e("code",[t._v("conn.setAutoCommit(true);")]),t._v(" 是控制是否每条SQL执行完后自动提交")])])}),[],!1,null,null,null);o.default=v.exports}}]);