(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{646:function(s,e,t){"use strict";t.r(e);var o=t(0),_=Object(o.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Oracle 临时表")]),s._v(" "),e("h4",{attrs:{id:"oracle-临时表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle-临时表"}},[s._v("#")]),s._v(" Oracle 临时表")]),s._v(" "),e("p",[s._v("临时表空间分配一块内存空间。也就是说只有向临时表中插入数据时，才会给临时表分配存储空间。\n临时表分事务级临时表和会话级临时表。\n事务级临时表只对当前事务有效，通过语句：ON COMMIT DELETE ROWS 语句指定。\n会话级临时表对当前会话有效，通过语句：ON COMMIT PRESERVE ROWS语句指定。")]),s._v(" "),e("p",[s._v("会话级: 只有该会话可以访问临时表中的内容, 其他Session 无法访问")]),s._v(" "),e("h4",{attrs:{id:"oracle-删除其他session中的临时表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle-删除其他session中的临时表"}},[s._v("#")]),s._v(" Oracle 删除其他Session中的临时表")]),s._v(" "),e("p",[s._v("因为表KOL_XX_FIN050_TEMP 为临时表，而且有其他session正在使用。")]),s._v(" "),e("p",[s._v("处理步骤：")]),s._v(" "),e("ol",[e("li",[s._v("先从 dba_objects / user_objects中查询到该表的object_id:")])]),s._v(" "),e("p",[e("code",[s._v("select object_id from dba_objects where object_name=upper(‘KOL_XX_FIN050_TEMP’);")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("根据查到的object_id知道使用该表的session：")])]),s._v(" "),e("p",[e("code",[s._v("select * from v$lock where id1=&object_id;")])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("在从v$session视图中查到该session的SID和SERIAL#：")])]),s._v(" "),e("p",[e("code",[s._v("select * from v$session where sid=331;")])]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("杀掉这些进程:")])]),s._v(" "),e("p",[e("code",[s._v("alter system kill session ‘SID,SERIAL#’;")])])])}),[],!1,null,null,null);e.default=_.exports}}]);