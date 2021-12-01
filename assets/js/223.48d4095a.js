(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{743:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Nginx 安装与配置")]),s._v(" "),a("h3",{attrs:{id:"nginx-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装"}},[s._v("#")]),s._v(" Nginx 安装")]),s._v(" "),a("p",[a("code",[s._v("yum install nginx -y")])]),s._v(" "),a("h3",{attrs:{id:"查看-nginx-安装路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-nginx-安装路径"}},[s._v("#")]),s._v(" 查看 Nginx 安装路径")]),s._v(" "),a("p",[a("code",[s._v("ps -ef | grep nginx")])]),s._v(" "),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/etc/nginx/nginx.conf")])]),s._v(" "),a("li",[a("code",[s._v("/etc/nginx/conf.d/*.conf")])])]),s._v(" "),a("h3",{attrs:{id:"配置默认根目录跳转8083端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置默认根目录跳转8083端口"}},[s._v("#")]),s._v(" 配置默认根目录跳转8083端口")]),s._v(" "),a("div",{staticClass:"language-s line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;\n    server_name  localhost;\n    \n    location / {\n        proxy_set_header   X-Real-IP $remote_addr;\n        proxy_set_header   Host      $http_host;\n        proxy_pass         http://127.0.0.1:8083;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"配置指定路径跳转8090端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置指定路径跳转8090端口"}},[s._v("#")]),s._v(" 配置指定路径跳转8090端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream wechat {\n    server 127.0.0.1:8090;\n    keepalive 2000;\n}\n\nserver {\n    listen       80;\n    server_name  localhost;\n    \n    location /wechat/ {\n        proxy_pass http://wechat/;\n        proxy_set_header Host $host:$server_port;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);