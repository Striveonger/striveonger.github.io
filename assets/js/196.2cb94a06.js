(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{725:function(_,t,v){"use strict";v.r(t);var e=v(4),s=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("前几天, 百度搞活动, 1折促销, 就抢了个服务器.")]),_._v(" "),v("h3",{attrs:{id:"_1-遇到的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-遇到的问题"}},[_._v("#")]),_._v(" 1. 遇到的问题")]),_._v(" "),v("p",[_._v("用公司的网, SSH 登录不了.")]),_._v(" "),v("h3",{attrs:{id:"_2-漫长的解决之路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-漫长的解决之路"}},[_._v("#")]),_._v(" 2. 漫长的解决之路")]),_._v(" "),v("p",[_._v("刚买时, 在公司发工单, 说让我重启路由和电脑, 毕竟不是我自己的网络, 就想晚上回家再试试吧. 晚上回到家里. 结果直接就连上了. 当时就感叹. 这么神奇呀, 换个网络真的可以呀.")]),_._v(" "),v("p",[_._v("这个周末相安无事, 我装了些常用的软件.")]),_._v(" "),v("p",[_._v("今天去到公司, 尝试连了一下, 又不通了. 瞬间感觉有种被坑的感觉.")]),_._v(" "),v("p",[_._v("我尝试 "),v("code",[_._v("ping")]),_._v(" 了下, 是通的. 然后 "),v("code",[_._v("telnet 22")]),_._v(" 端口, 就不通了. 我TM想哭的心, 都有了. 用 "),v("code",[_._v("traceroute -d")]),_._v(" 查了一下路由路径, 也是正常的. 不得不发工单, 问一下情况.")]),_._v(" "),v("p",[_._v("工单里, 我说清楚情况后, 给我的回复是, 让我修改 ssh 的端口. 改了之后, 果然就可以了, 继续追问...."),v("code",[_._v("无果")])]),_._v(" "),v("h3",{attrs:{id:"_3-在这个过程中-学到的东西"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-在这个过程中-学到的东西"}},[_._v("#")]),_._v(" 3. 在这个过程中, 学到的东西")]),_._v(" "),v("p",[v("code",[_._v("traceroute -d")]),_._v(" 查询路由路径")]),_._v(" "),v("p",[_._v("修改SSH端口, "),v("code",[_._v("/etc/ssh/sshd_config")]),_._v("  添加 "),v("code",[_._v("Port=22")]),_._v(", "),v("code",[_._v("Port=1048")]),_._v(" 保存")]),_._v(" "),v("p",[_._v("重启服务 "),v("code",[_._v("service sshd restart")])])])}),[],!1,null,null,null);t.default=s.exports}}]);