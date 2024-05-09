(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{600:function(t,e,r){"use strict";r.r(e);var o=r(0),_=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Spring Security OAuth2 Example… 有通过AccessToken实现的, 也有通过JWT实现的…今天我们先用Access Token来实现一下吧.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth"),e("OutboundLink")],1),t._v("是一种用来规范令牌(Token)发放的授权机制, 主要包含了四种授权模式: 授权码模式, 简化模式, 密码模式和, 户端模式. Spring Security OAuth2对这四种授权模式进行了实现. 这节主要记录下什么是OAuth2以及Spring Security OAuth2的基本使用")]),t._v(" "),e("h2",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("p",[t._v('有一个"云冲印"的网站, 可以将用户储存在Google相册的照片, 冲印出来. 用户为了使用该服务. 必须让"云冲印"读取自己储存在Google相册上的照片.')]),t._v(" "),e("p",[t._v('问题是只有得到用户的授权, Google相册才会同意"云冲印"读取这些照片. 那么, "云冲印"怎样获得用户的授权呢?')]),t._v(" "),e("p",[t._v('传统方法是, 用户将自己的Google用户名和密码告诉"云冲印", 后者就可以读取用户的照片了. 这样的做法有以下几个严重的缺点:')]),t._v(" "),e("ol",[e("li",[t._v('"云冲印"为了后续的服务, 会保存用户的密码. 这样很不安全')]),t._v(" "),e("li",[t._v("Google不得不部署密码登录. 而我们知道, 单纯的密码登录并不安全")]),t._v(" "),e("li",[t._v('"云冲印"拥有了获取用户储存在Google所有资料的权力, 用户没法限制"云冲印"获得授权的范围和有效期.')]),t._v(" "),e("li",[t._v('用户只有修改密码, 才能收回赋予"云冲印"的权力. 但是这样做, 会使得其他所有获得用户授权的第三方应用程序全部失效')]),t._v(" "),e("li",[t._v("只要有一个第三方应用程序被破解, 就会导致用户密码泄漏, 以及所有被密码保护的数据泄漏")])]),t._v(" "),e("h3",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),e("h2",{attrs:{id:"四种授权模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四种授权模式"}},[t._v("#")]),t._v(" 四种授权模式")]),t._v(" "),e("blockquote",[e("p",[t._v("参考文章:")]),t._v(" "),e("ul",[e("li",[t._v("http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html")]),t._v(" "),e("li",[t._v("https://mrbird.cc/Spring-Security-OAuth2-Guide.html")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);