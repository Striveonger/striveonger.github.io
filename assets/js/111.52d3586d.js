(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{621:function(e,t,s){"use strict";s.r(t);var a=s(0),l=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("es配置x-pack使用账号密码验证")]),e._v(" "),t("p",[e._v("1.修改配置添加如下选项")]),e._v(" "),t("blockquote",[t("p",[e._v("xpack.security.enabled: true")])]),e._v(" "),t("p",[e._v("2.启动测试")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -H "Content-Type:application/json" -XPOST http://172.16.10.61:29200/_xpack/license/start_trial?acknowledge=true\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("blockquote",[t("p",[e._v('{"acknowledged":true,"trial_was_started":true,"type":"trial"}')])]),e._v(" "),t("p",[e._v("3.设置密码")]),e._v(" "),t("blockquote",[t("p",[e._v("[esuser@esuser-9e96168 bin]$ ./elasticsearch-setup-passwords interactive")])]),e._v(" "),t("blockquote",[t("p",[e._v("转载自: https://www.cnblogs.com/hxlasky/p/11721494.html")])])])}),[],!1,null,null,null);t.default=l.exports}}]);