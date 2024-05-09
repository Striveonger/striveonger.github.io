(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{729:function(e,v,l){"use strict";l.r(v);var _=l(0),c=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("CentOS7使用firewalld打开关闭防火墙与端口")]),e._v(" "),v("p",[e._v("1、firewalld的基本使用")]),e._v(" "),v("p",[e._v("启动： "),v("code",[e._v("systemctl start firewalld")])]),e._v(" "),v("p",[e._v("关闭： "),v("code",[e._v("systemctl stop firewalld")])]),e._v(" "),v("p",[e._v("查看状态： "),v("code",[e._v("systemctl status firewalld")])]),e._v(" "),v("p",[e._v("开机禁用  ： "),v("code",[e._v("systemctl disable firewalld")])]),e._v(" "),v("p",[e._v("开机启用  ： "),v("code",[e._v("systemctl enable firewalld")])]),e._v(" "),v("p",[e._v("2.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。")]),e._v(" "),v("p",[e._v("启动一个服务："),v("code",[e._v("systemctl start firewalld.service")]),e._v("\n关闭一个服务："),v("code",[e._v("systemctl stop firewalld.service")]),e._v("\n重启一个服务："),v("code",[e._v("systemctl restart firewalld.service")]),e._v("\n显示一个服务的状态："),v("code",[e._v("systemctl status firewalld.service")]),e._v("\n在开机时启用一个服务："),v("code",[e._v("systemctl enable firewalld.service")]),e._v("\n在开机时禁用一个服务："),v("code",[e._v("systemctl disable firewalld.service")]),e._v("\n查看服务是否开机启动："),v("code",[e._v("systemctl is-enabled firewalld.service")]),e._v("\n查看已启动的服务列表："),v("code",[e._v("systemctl list-unit-files|grep enabled")]),e._v("\n查看启动失败的服务列表："),v("code",[e._v("systemctl —failed")])]),e._v(" "),v("p",[e._v("3.配置firewalld-cmd")]),e._v(" "),v("p",[e._v("查看版本： "),v("code",[e._v("firewall-cmd —version")])]),e._v(" "),v("p",[e._v("查看帮助： "),v("code",[e._v("firewall-cmd —help")])]),e._v(" "),v("p",[e._v("显示状态： "),v("code",[e._v("firewall-cmd —state")])]),e._v(" "),v("p",[e._v("查看所有打开的端口： "),v("code",[e._v("firewall-cmd --zone=public --list-ports")])]),e._v(" "),v("p",[e._v("更新防火墙规则： "),v("code",[e._v("firewall-cmd —reload")])]),e._v(" "),v("p",[e._v("查看区域信息:  "),v("code",[e._v("firewall-cmd --get-active-zones")])]),e._v(" "),v("p",[e._v("查看指定接口所属区域： "),v("code",[e._v("firewall-cmd --get-zone-of-interface=eth0")])]),e._v(" "),v("p",[e._v("拒绝所有包："),v("code",[e._v("firewall-cmd --panic-on")])]),e._v(" "),v("p",[e._v("取消拒绝状态： "),v("code",[e._v("firewall-cmd --panic-off")])]),e._v(" "),v("p",[e._v("查看是否拒绝： "),v("code",[e._v("firewall-cmd --query-panic")])]),e._v(" "),v("p",[e._v("那怎么开启一个端口呢")]),e._v(" "),v("p",[e._v("添加")]),e._v(" "),v("p",[v("code",[e._v("firewall-cmd --zone=public --add-port=80/tcp —permanent")]),e._v("    （--permanent永久生效，没有此参数重启后失效）")]),e._v(" "),v("p",[e._v("重新载入")]),e._v(" "),v("p",[v("code",[e._v("firewall-cmd —reload")])]),e._v(" "),v("p",[e._v("查看")]),e._v(" "),v("p",[v("code",[e._v("firewall-cmd --zone= public --query-port=80/tcp")])]),e._v(" "),v("p",[e._v("删除")]),e._v(" "),v("p",[v("code",[e._v("firewall-cmd --zone= public --remove-port=80/tcp —permanent")])])])}),[],!1,null,null,null);v.default=c.exports}}]);