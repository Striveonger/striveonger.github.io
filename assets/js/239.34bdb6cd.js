(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{770:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("MacOS 安装与配置 Nginx")]),s._v(" "),n("h3",{attrs:{id:"nginx-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装"}},[s._v("#")]),s._v(" Nginx 安装")]),s._v(" "),n("p",[n("code",[s._v("brew install nginx")])]),s._v(" "),n("h3",{attrs:{id:"nginx-涉及到的路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-涉及到的路径"}},[s._v("#")]),s._v(" Nginx 涉及到的路径")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("/usr/local/cellar/nginx/1.13.12")]),s._v("  安装目录")]),s._v(" "),n("li",[n("code",[s._v("/usr/local/etc/nginx")]),s._v("  配置文件")]),s._v(" "),n("li",[n("code",[s._v("/usr/local/var/log/nginx")]),s._v(" 日志文件")])]),s._v(" "),n("h3",{attrs:{id:"配置虚拟主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机"}},[s._v("#")]),s._v(" 配置虚拟主机")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    upstream www.yeslx.com {\n        server 127.0.0.1:8880;\n    }\n    server {\n        listen        80;\n        server_name   127.0.0.1 192.168.1.104 www.yeslx.com;\n        charset       utf-8;\n\n        access_log    /usr/local/var/log/nginx/access.log;\n        error_log     /usr/local/var/log/nginx/error.log;\n\n        location / {\n            root      /Users/smile/development/workspace/nginx/yslx_app;\n            index     index.php index.html index.htm;\n        }\n\n        location ~ ^/(backstage)/ {\n            proxy_pass http://www.yeslx.com;\n                proxy_set_header Host $host;\n        }\n        location ~ ^/(proscenium)/ {\n            proxy_pass http://www.yeslx.com;\n            proxy_set_header Host $host;\n        }\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"nginx-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令"}},[s._v("#")]),s._v(" Nginx 常用命令")]),s._v(" "),n("ul",[n("li",[s._v("nginx -t 测试配置是否正确")]),s._v(" "),n("li",[s._v("nginx -s reload 重新加载配置文件")]),s._v(" "),n("li",[s._v("nginx -s stop 立即停止服务")]),s._v(" "),n("li",[s._v("nginx -s quit 优雅的停止服务")]),s._v(" "),n("li",[s._v("nginx -s reopen 重新打开日志")])]),s._v(" "),n("h3",{attrs:{id:"nginx-启动失败"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-启动失败"}},[s._v("#")]),s._v(" Nginx 启动失败")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("SmiledeMacBook-Pro:~ smile$ nginx \nnginx: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emerg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80 failed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(": Permission denied"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSmiledeMacBook-Pro:~ smile$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx\nPassword:\nSmiledeMacBook-Pro:~ smile$ \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);