(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{590:function(t,v,_){"use strict";_.r(v);var s=_(4),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("最近面试被问到, DB与Cache数据同步问题. 当时感觉答得不好, 就回来科普一下, 结果就颠覆了认知. 正所谓: "),_("code",[t._v("学然后知不足")]),t._v("......")]),t._v(" "),_("h5",{attrs:{id:"原来更新缓存的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原来更新缓存的方法"}},[t._v("#")]),t._v(" 原来更新缓存的方法")]),t._v(" "),_("p",[t._v("更新缓存数据代码时，"),_("strong",[t._v("先删除缓存")]),t._v("，然后"),_("strong",[t._v("再更新数据库")]),t._v("，而后续的操作会把数据再装载的缓存中。")]),t._v(" "),_("p",[t._v("试想一下, 现在有两个线程的并发操作, "),_("strong",[t._v("线程A")]),t._v("修改数据库中数据, "),_("strong",[t._v("线程B")]),t._v("读取数据.")]),t._v(" "),_("p",[_("strong",[t._v("线程A")]),t._v("删除缓存后, 线程挂起, "),_("strong",[t._v("线程B")]),t._v("开始查询, 查询没有命中,  就去数据库Load并放到缓存中.")])])}),[],!1,null,null,null);v.default=n.exports}}]);