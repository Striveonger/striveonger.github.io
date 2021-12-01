(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{906:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("MacOS 安装与配置 Nginx")]),s._v(" "),a("h3",{attrs:{id:"nginx-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装"}},[s._v("#")]),s._v(" Nginx 安装")]),s._v(" "),a("p",[a("code",[s._v("brew install nginx")])]),s._v(" "),a("h3",{attrs:{id:"nginx-涉及到的路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-涉及到的路径"}},[s._v("#")]),s._v(" Nginx 涉及到的路径")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/usr/local/cellar/nginx/1.13.12")]),s._v("  安装目录")]),s._v(" "),a("li",[a("code",[s._v("/usr/local/etc/nginx")]),s._v("  配置文件")]),s._v(" "),a("li",[a("code",[s._v("/usr/local/var/log/nginx")]),s._v(" 日志文件")])]),s._v(" "),a("h3",{attrs:{id:"配置虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机"}},[s._v("#")]),s._v(" 配置虚拟主机")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    upstream www.yeslx.com {\n        server 127.0.0.1:8880;\n    }\n    server {\n        listen        80;\n        server_name   127.0.0.1 192.168.1.104 www.yeslx.com;\n        charset       utf-8;\n\n        access_log    /usr/local/var/log/nginx/access.log;\n        error_log     /usr/local/var/log/nginx/error.log;\n\n        location / {\n            root      /Users/smile/development/workspace/nginx/yslx_app;\n            index     index.php index.html index.htm;\n        }\n\n        location ~ ^/(backstage)/ {\n            proxy_pass http://www.yeslx.com;\n                proxy_set_header Host $host;\n        }\n        location ~ ^/(proscenium)/ {\n            proxy_pass http://www.yeslx.com;\n            proxy_set_header Host $host;\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"nginx-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令"}},[s._v("#")]),s._v(" Nginx 常用命令")]),s._v(" "),a("ul",[a("li",[s._v("nginx -t 测试配置是否正确")]),s._v(" "),a("li",[s._v("nginx -s reload 重新加载配置文件")]),s._v(" "),a("li",[s._v("nginx -s stop 立即停止服务")]),s._v(" "),a("li",[s._v("nginx -s quit 优雅的停止服务")]),s._v(" "),a("li",[s._v("nginx -s reopen 重新打开日志")])]),s._v(" "),a("h3",{attrs:{id:"nginx-启动失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-启动失败"}},[s._v("#")]),s._v(" Nginx 启动失败")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SmiledeMacBook-Pro:~ smile$ nginx \nnginx: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emerg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80 failed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(": Permission denied"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSmiledeMacBook-Pro:~ smile$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx\nPassword:\nSmiledeMacBook-Pro:~ smile$ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);