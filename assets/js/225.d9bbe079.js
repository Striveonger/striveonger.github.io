(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{748:function(o,s,e){"use strict";e.r(s);var i=e(0),n=Object(i.a)({},(function(){var o=this,s=o._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[s("p",[o._v("Cookie, Session, Token的区别与联系")]),o._v(" "),s("p",[o._v("Cookie, Session, Token 这三者都解决了HTTP协议无状态的问题")]),o._v(" "),s("h2",{attrs:{id:"cookie机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie机制"}},[o._v("#")]),o._v(" Cookie机制")]),o._v(" "),s("p",[o._v("Cookie机制 是采用在"),s("strong",[o._v("客户端保持状态")]),o._v("的方案. Cookie的使用是由浏览器按照一定的原则在后台自动发送给服务器的。浏览器检查所有存储的Cookie，如果某个Cookie所"),s("strong",[o._v("声明的作用范围大于等于将要请求的资源所在的位置")]),o._v("，则把该Cookie附在请求资源的HTTP请求头上发送给服务器。")]),o._v(" "),s("p",[o._v("Cookie的内容主要包括：名字、值、过期时间、路径和域。路径与域一起构成Cookie的作用范围。")]),o._v(" "),s("p",[o._v("若"),s("strong",[o._v("不设置过期时间")]),o._v("，则表示这个Cookie的"),s("strong",[o._v("生命期为浏览器会话期间")]),o._v("，关闭浏览器窗口，Cookie就消失。这种生命期为浏览器会话期的Cookie被称为 "),s("strong",[o._v("会话Cookie")]),o._v(". 会话Cookie一般不存储在硬盘上而是"),s("strong",[o._v("保存在内存里")]),o._v(".")]),o._v(" "),s("p",[o._v("若"),s("strong",[o._v("设置了过期时间")]),o._v("，浏览器就会把Cookie"),s("strong",[o._v("保存在硬盘")]),o._v("上，关闭后再次打开浏览器，这些Cookie仍然有效直到超过设定的过期时间。存储在硬盘上的cookie可以在不同的浏览器进程间共享，比如两个IE窗口。而对于保存在内存里Cookie，不同的浏览器有不同的处理方式。")]),o._v(" "),s("h2",{attrs:{id:"session-机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-机制"}},[o._v("#")]),o._v(" Session 机制")]),o._v(" "),s("p",[o._v("Session机制是一种"),s("strong",[o._v("服务器端")]),o._v("的机制，服务器使用一种类似于散列表的结构（也可能就是使用散列表）来保存信息。")]),o._v(" "),s("p",[o._v("当程序需要为某个客户端的请求创建一个Session时，服务器首先检查这个客户端的请求里是否已包含了一个Session标识（称为session id），如果已包含则说明以前已经为此客户端创建过session,服务器就按照session id把这个session检索出来使用（检索不到，会新建一个），如果客户端请求不包含session id，则为此客户端创建一个session并且生成一个与此session相关联的session id，session id的值应该是一个既不会重复，又不容易被找到规律以伪造的字符串，这个session id将被 在本次响应中返回给客户端保存。保存这个session id的方式可以采用cookie，这样在交互过程中浏览器 可以自动的按照规则把这个标识发送给服务器。一般这个cookie的名字就是类似于"),s("strong",[o._v("SESSIONID")]),o._v("。")]),o._v(" "),s("p",[o._v("由于cookie可以被人为的禁止，必须有其他机制以便在cookie被禁止时仍然能够把session id传递回服务器。")]),o._v(" "),s("p",[o._v("两种方式：")]),o._v(" "),s("p",[o._v("第一种：URL重写（常用），就是把session id直接附加在URL路径的后面。")]),o._v(" "),s("p",[o._v("第二种：表单隐藏字段（现已很少使用）。就是服务器会自动修改表单，添加一个隐藏字段，以便在表单提交时能够把session id传递回服务器。")]),o._v(" "),s("blockquote",[s("p",[o._v('Ps: GitHub 貌似没打算用这两种方式: "Cookies must be enabled to use GitHub."')])]),o._v(" "),s("h2",{attrs:{id:"token机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token机制"}},[o._v("#")]),o._v(" Token机制")]),o._v(" "),s("p",[o._v("Token的意思是“令牌”，是用户身份的验证方式，最简单的Token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名)，由Token的前几位**+盐**以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接Token请求服务器。还可以把不变的参数也放进Token，避免多次查库")]),o._v(" "),s("h2",{attrs:{id:"cookie-与-session-传统身份验证的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-与-session-传统身份验证的方法"}},[o._v("#")]),o._v(" Cookie 与 Session 传统身份验证的方法")]),o._v(" "),s("p",[o._v("HTTP 是一种没有状态的协议，也就是它并不知道是谁是访问应用。这里我们把用户看成是客户端，客户端使用用户名还有密码通过了身份验证，不过下回这个客户端再发送请求时候，还得再验证一下。")]),o._v(" "),s("p",[o._v("解决的方法就是，当用户请求登录的时候，如果没有问题，我们在服务端生成一条记录，这个记录里可以说明一下登录的用户是谁，然后把这条记录的 ID 号发送给客户端，客户端收到以后把这个 ID 号存储在 Cookie 里，下次这个用户再向服务端发送请求的时候，可以带着这个 Cookie ，这样服务端会验证一个这个 Cookie 里的信息，看看能不能在服务端这里找到对应的记录，如果可以，说明用户已经通过了身份验证，就把用户请求的数据返回给客户端。")]),o._v(" "),s("p",[o._v("上面说的就是 Session，我们需要在服务端存储为登录的用户生成的 Session ，这些 Session 可能会存储在内存，磁盘，或者数据库里。我们可能需要在服务端定期的去清理过期的 Session 。")]),o._v(" "),s("h2",{attrs:{id:"基于-token-的身份验证方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-token-的身份验证方法"}},[o._v("#")]),o._v(" 基于 Token 的身份验证方法")]),o._v(" "),s("p",[o._v("使用基于 Token 的身份验证方法，在服务端不需要存储用户的登录记录。大概的流程是这样的：")]),o._v(" "),s("ul",[s("li",[s("p",[o._v("客户端使用用户名跟密码请求登录")])]),o._v(" "),s("li",[s("p",[o._v("服务端收到请求，去验证用户名与密码")])]),o._v(" "),s("li",[s("p",[o._v("验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端")])]),o._v(" "),s("li",[s("p",[o._v("客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里")])]),o._v(" "),s("li",[s("p",[o._v("客户端每次向服务端请求资源的时候需要带着服务端签发的 Token")])]),o._v(" "),s("li",[s("p",[o._v("服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据")])])]),o._v(" "),s("h2",{attrs:{id:"打破误解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打破误解"}},[o._v("#")]),o._v(" 打破误解")]),o._v(" "),s("blockquote",[s("p",[o._v("只要关闭浏览器 ，session就消失了？")])]),o._v(" "),s("p",[o._v("不对。对Session来说，除非程序通知服务器删除一个 Session，否则服务器会一直保留，程序一般都是在用户做log off的时候发个指令去删除Session。")]),o._v(" "),s("p",[o._v("然而浏览器从来不会主动在关闭之前通知服务器它将要关闭，因此服务器根本不会有机会知道浏览器已经关闭，之所以会有这种错觉，是大部分Session机制都使用会话Cookie来保存session id，而关闭浏览器后这个session id就消失了，再次连接服务器时也就无法找到原来的Session。如果服务器设置的Cookie被保存在硬盘上，或者使用某种手段改写浏览器发出的HTTP请求头，把原来的session id发送给服务器，则再次打开浏览器仍然能够打开原来的Session.")]),o._v(" "),s("p",[o._v("恰恰是由于关闭浏览器不会导致Session被删除，迫使服务器为Session设置了一个失效时间，当距离客户端上一次使用Session的时间超过这个失效时间时，服务器就可以以为客户端已经停止了活动，才会把Session删除以节省存储空间。")])])}),[],!1,null,null,null);s.default=n.exports}}]);