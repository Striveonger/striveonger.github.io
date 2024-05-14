(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{528:function(t,a,s){t.exports=s.p+"assets/img/image-20210730103021242.8f9a83aa.png"},529:function(t,a,s){t.exports=s.p+"assets/img/image-20210730103041097.ae242ed4.png"},773:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("记一次线上FTPClient事故")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("某Java项目使用Apache的commons.net包下的FTPClient从远程ftp服务器下载文件进行处理，在windows平台运行正常，部署至docker后，可以正常连接到ftp服务器，下载文件内容为空。")]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("在使用 FTP 时，如果客户端机器和 FTP 服务器双方之间的所有端口都是开放的，那么连接不存在问题。如果客户端与服务器之间有防火墙，如果没配置好防火墙策略和采用合适的连接模式，会导致登录成功但无法进行数据传输。要避免出现这样的问题，首先要了解 FTP 的工作模式：FTP的请求机制有主动模式和被动模式两种。")]),t._v(" "),a("h3",{attrs:{id:"ftp主动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp主动模式"}},[t._v("#")]),t._v(" FTP主动模式")]),t._v(" "),a("p",[t._v("FTP客户端向服务器的FTP控制端口(默认是21)发送连接请求，服务器接受连接，建立一条命令链路；当需要传送数据时，客户端在命令链路上用PORT的命令告诉服务器我开放了某端口，你过来连接我。于是服务器从20端口向客户端的该端口发送连接请求，建立一条数据链路来传送数据。在数据链路建立过程中是服务器主动请求，所以称为主动模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(528),alt:"image-20210730103021242"}})]),t._v(" "),a("h3",{attrs:{id:"ftp被动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp被动模式"}},[t._v("#")]),t._v(" FTP被动模式")]),t._v(" "),a("p",[t._v("FTP客户端向服务器的FTP控制端口(默认21)发送连接请求，服务器接受连接，建立一条命令链路；当需要传送数据时，服务器在命令链路上用PASV命令告诉客户端，我打开了某端口，你过来连我。于是客户端向服务器的该端口发送连接请求，建立一条数据链路来传送数据。在数据链路建立的过程中是服务器被动等待客户机的请求，所以称被动模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(529),alt:"image-20210730103041097"}})]),t._v(" "),a("h4",{attrs:{id:"两种模式比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种模式比较"}},[t._v("#")]),t._v(" 两种模式比较")]),t._v(" "),a("p",[t._v("主动模式和被动模式的不同，简单概述为：主动模式传送数据时是 “ 服务器 ” 连接到 “ 客户端 ” 的端口；被动模式传送数据时是 “ 客户端 ” 连接到 “ 服务器 ” 的端口。")]),t._v(" "),a("p",[t._v("主动模式需要客户端必须开放端口给服务器，被动模式需要服务器端开放端口给客户端。")]),t._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("p",[t._v("在使用FTPClient连接到ftp服务器后，每次传输数据之前，调用如下方法，启用被动模式：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ftpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enterLocalPassiveMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);