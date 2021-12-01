(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{786:function(e,s,t){"use strict";t.r(s);var o=t(4),_=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Oracle 临时表")]),e._v(" "),t("h4",{attrs:{id:"oracle-临时表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-临时表"}},[e._v("#")]),e._v(" Oracle 临时表")]),e._v(" "),t("p",[e._v("临时表空间分配一块内存空间。也就是说只有向临时表中插入数据时，才会给临时表分配存储空间。\n临时表分事务级临时表和会话级临时表。\n事务级临时表只对当前事务有效，通过语句：ON COMMIT DELETE ROWS 语句指定。\n会话级临时表对当前会话有效，通过语句：ON COMMIT PRESERVE ROWS语句指定。")]),e._v(" "),t("p",[e._v("会话级: 只有该会话可以访问临时表中的内容, 其他Session 无法访问")]),e._v(" "),t("h4",{attrs:{id:"oracle-删除其他session中的临时表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-删除其他session中的临时表"}},[e._v("#")]),e._v(" Oracle 删除其他Session中的临时表")]),e._v(" "),t("p",[e._v("因为表KOL_XX_FIN050_TEMP 为临时表，而且有其他session正在使用。")]),e._v(" "),t("p",[e._v("处理步骤：")]),e._v(" "),t("ol",[t("li",[e._v("先从 dba_objects / user_objects中查询到该表的object_id:")])]),e._v(" "),t("p",[t("code",[e._v("select object_id from dba_objects where object_name=upper(‘KOL_XX_FIN050_TEMP’);")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("根据查到的object_id知道使用该表的session：")])]),e._v(" "),t("p",[t("code",[e._v("select * from v$lock where id1=&object_id;")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("在从v$session视图中查到该session的SID和SERIAL#：")])]),e._v(" "),t("p",[t("code",[e._v("select * from v$session where sid=331;")])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("杀掉这些进程:")])]),e._v(" "),t("p",[t("code",[e._v("alter system kill session ‘SID,SERIAL#’;")])])])}),[],!1,null,null,null);s.default=_.exports}}]);