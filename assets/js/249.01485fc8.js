(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{785:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("最近要出差,  需要在现场连接到天津的服务器做开发. 现在就需要一个VPN工具.....可恶的是, VPN工具没有Arm版本...只能跟公司申请一台x86的电脑. 但是问题来了....开发环境要重新搞, 操作习惯也需要重新适应...想想算了....带两台电脑吧")]),s._v(" "),n("p",[s._v("用x86的电脑, 做22的端口转发, 用自己的Mac做开发.")]),s._v(" "),n("p",[s._v("接下来, 是我在Windows下的一些操作")]),s._v(" "),n("h3",{attrs:{id:"配置nginx转发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx转发"}},[s._v("#")]),s._v(" 配置Nginx转发")]),s._v(" "),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("stream {\n    # 写法一\n    upstream ssh_backend {\n        server 10.13.144.5:22\n    }\n    server {\n       listen 22;\n       proxy_pass ssh_backend;\n    }\n    # 写法二\n    # server {\n    #    listen 22; \n    #    proxy_connect_timeout 1s;\n    #    proxy_timeout 3s;\n    #    proxy_pass 10.13.144.5:22; \n    # }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"配置-nginx-自启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-自启动"}},[s._v("#")]),s._v(" 配置 Nginx 自启动")]),s._v(" "),n("p",[s._v("下载WinSW.NET4.exe，放至待包装的exe文件夹中，这里就是nginx.exe所在的目录，并修改名字为“nginxservice.exe”")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://images2018.cnblogs.com/blog/45449/201802/45449-20180223101519734-1740176846.png",alt:"img"}})]),s._v(" "),n("p",[s._v("在nginxservice.exe同目录中新建一个同名的xml文件")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://images2018.cnblogs.com/blog/45449/201802/45449-20180223102147962-1217800220.png",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('\x3c!--\n  MIT License\n\n  Copyright (c) 2008-2020 Kohsuke Kawaguchi, Sun Microsystems, Inc., CloudBees,\n  Inc., Oleg Nenashev and other contributors\n\n  Permission is hereby granted, free of charge, to any person obtaining a copy\n  of this software and associated documentation files (the "Software"), to deal\n  in the Software without restriction, including without limitation the rights\n  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n  copies of the Software, and to permit persons to whom the Software is\n  furnished to do so, subject to the following conditions:\n\n  The above copyright notice and this permission notice shall be included in all\n  copies or substantial portions of the Software.\n\n  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n  SOFTWARE.\n--\x3e')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--\n This is an example of a minimal Windows Service Wrapper configuration, which includes only mandatory options.\n \n This configuration file should be placed near the WinSW executable, the name should be the same.\n E.g. for myapp.exe the configuration file name should be myapp.xml\n \n You can find more information about the configuration options here: https://github.com/kohsuke/winsw/blob/master/doc/xmlConfigFile.md\n Full example: https://github.com/kohsuke/winsw/blob/master/examples/sample-allOptions.xml\n--\x3e")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- ID of the service. It should be unique across the Windows system--\x3e")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Nginx"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Display name of the service --\x3e")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("NginxService"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Service description --\x3e")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Nginx 服务"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Path to the executable, which should be started --\x3e")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("executable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("C:\\software\\nginx\\nginx.exe"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("executable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("blockquote",[n("p",[s._v("执行 "),n("code",[s._v("nginxservice.exe install")])])]),s._v(" "),n("p",[s._v("记得配置电源策略, 带电源情况下和上盖子, 电脑继续工作.... 然后就都可以了.....成功的将背包增重了2kg 🥺🥺🥺")]),s._v(" "),n("p",[s._v("参考文章:")]),s._v(" "),n("ul",[n("li",[s._v("https://www.cnblogs.com/merray/p/8460992.html")]),s._v(" "),n("li",[s._v("https://github.com/winsw/winsw/releases")])])])}),[],!1,null,null,null);n.default=e.exports}}]);