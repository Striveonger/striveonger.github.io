(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{492:function(s,n,a){s.exports=a.p+"assets/img/image-20210216144707368.e90fe89d.png"},493:function(s,n,a){s.exports=a.p+"assets/img/image-20210216150048395.a991c2ec.png"},494:function(s,n,a){s.exports=a.p+"assets/img/image-20210216151703310.1b46805a.png"},495:function(s,n,a){s.exports=a.p+"assets/img/image-20210216160354233.855095c9.png"},745:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("最近使用虚拟机的过程中, 想到之前在做版本拆分时, 前端是通过的返回 "),n("code",[s._v("JSON")]),s._v(" 中 "),n("code",[s._v("module")]),s._v(" 属性来控制的. 我是不是可以通过 "),n("code",[s._v("反向代理")]),s._v(" 的方式, 来骗过前端的验证呢....... 既然提到了 "),n("code",[s._v("反向代理")]),s._v(" , 怎么可能不想到 "),n("code",[s._v("Nginx")]),s._v("  呢.")]),s._v(" "),n("p",[s._v("之前也用过, "),n("code",[s._v("Nginx")]),s._v(" 但是也没有系统的学习过. 借着这个机会, 正好系统的学习一下.")]),s._v(" "),n("h3",{attrs:{id:"nginx-基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-基本概念"}},[s._v("#")]),s._v(" Nginx 基本概念")]),s._v(" "),n("h4",{attrs:{id:"nginx-是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-是什么"}},[s._v("#")]),s._v(" Nginx 是什么")]),s._v(" "),n("p",[s._v("Nginx作为Web服务器. 以事件驱动的方式编写, 所以有非常好的性能, 同时也是一个非常高效的反向代理, 同时支持负载平衡. Nginx专为性能优化而开发, 具有很高的稳定性, 支持热部署.")]),s._v(" "),n("p",[s._v("Nginx采用master-slave模型, 能够充分利用SMP的优势, 且能够减少工作进程在磁盘I/O的阻塞延迟. 当采用select()/poll()调用时, 还可以限制每个进程的连接数")]),s._v(" "),n("blockquote",[n("p",[s._v("Nginx "),n("a",{attrs:{href:"https://lnmp.org/nginx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("介绍"),n("OutboundLink")],1)])]),s._v(" "),n("h4",{attrs:{id:"反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),n("p",[s._v("正常情况下, "),n("code",[s._v("客户端A")]),s._v(" 要访问 "),n("code",[s._v("服务端B")]),s._v(" 时, "),n("code",[s._v("客户端A")]),s._v(" 发请求给 "),n("code",[s._v("服务端B")]),s._v(" , "),n("code",[s._v("服务端B")]),s._v(" 处理请求, 返回响应内容给 "),n("code",[s._v("客户端A")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(492),alt:"image-20210216144707368"}})]),s._v(" "),n("p",[s._v("而加入代理后, "),n("code",[s._v("客户端A")]),s._v(" 要访问 "),n("code",[s._v("服务端B")]),s._v(" 时, "),n("code",[s._v("客户端A")]),s._v(" 发请求给 "),n("code",[s._v("代理C")]),s._v(", 由 "),n("code",[s._v("代理C")]),s._v(" 发请求给  "),n("code",[s._v("服务端B")]),s._v(" , "),n("code",[s._v("服务端B")]),s._v(" 处理请求, 返回响应内容给 "),n("code",[s._v("代理C")]),s._v(" , 再由"),n("code",[s._v("代理C")]),s._v(", 返回给"),n("code",[s._v("客户端A")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(493),alt:"image-20210216150048395"}})]),s._v(" "),n("p",[s._v("正向代理与反向代理")]),s._v(" "),n("p",[n("img",{attrs:{src:a(494),alt:"image-20210216151703310"}})]),s._v(" "),n("h5",{attrs:{id:"正向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[s._v("#")]),s._v(" 正向代理")]),s._v(" "),n("p",[s._v("对服务端透明")]),s._v(" "),n("h5",{attrs:{id:"反向代理-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理-2"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),n("p",[s._v("对客户端透明")]),s._v(" "),n("p",[n("img",{attrs:{src:a(495),alt:"image-20210216160354233"}})]),s._v(" "),n("h4",{attrs:{id:"负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[s._v("#")]),s._v(" 负载均衡")]),s._v(" "),n("h4",{attrs:{id:"动静分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[s._v("#")]),s._v(" 动静分离")]),s._v(" "),n("h3",{attrs:{id:"nginx-安装-常用命令与配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装-常用命令与配置"}},[s._v("#")]),s._v(" Nginx 安装, 常用命令与配置")]),s._v(" "),n("h4",{attrs:{id:"linux-下安装-ngixn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-下安装-ngixn"}},[s._v("#")]),s._v(" Linux 下安装 Ngixn")]),s._v(" "),n("h5",{attrs:{id:"安装所需环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装所需环境"}},[s._v("#")]),s._v(" 安装所需环境")]),s._v(" "),n("p",[n("strong",[s._v("一. gcc 安装")]),s._v("\n安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("二. PCRE pcre-devel 安装")]),s._v("\nPCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" pcre pcre-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("三. zlib 安装")]),s._v("\nzlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" zlib zlib-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("四. OpenSSL 安装")]),s._v("\nOpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。\nnginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" openssl openssl-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h5",{attrs:{id:"下载并安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载并安装nginx"}},[s._v("#")]),s._v(" 下载并安装Nginx")]),s._v(" "),n("p",[n("strong",[s._v("一.下载Nginx")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nginx.org/download/nginx-1.18.0.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("二.解压并安装")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" nginx-1.18.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.18.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置")]),s._v("\n./configure\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译并安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop firewalld\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"ngixn-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ngixn-常用命令"}},[s._v("#")]),s._v(" Ngixn 常用命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("nginx start\nnginx stop\nnginx restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"配置-ngixn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-ngixn"}},[s._v("#")]),s._v(" 配置 Ngixn")]),s._v(" "),n("h5",{attrs:{id:"全局块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局块"}},[s._v("#")]),s._v(" 全局块")]),s._v(" "),n("p",[s._v("配置影响nginx全局的指令. 一般有运行nginx服务器的用户组. nginx进程pid存放路径, 日志存放路径, 配置文件引入, 允许生成worker process数等")]),s._v(" "),n("h5",{attrs:{id:"events-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events-块"}},[s._v("#")]),s._v(" events 块")]),s._v(" "),n("p",[s._v("配置影响nginx服务器或与用户的网络连接. 有每个进程的最大连接数, 选取哪种事件驱动模型处理连接请求, 是否允许同时接受多个网路连接, 开启多个网络连接序列化等.")]),s._v(" "),n("h5",{attrs:{id:"http-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-块"}},[s._v("#")]),s._v(" http 块")]),s._v(" "),n("p",[s._v("可以嵌套多个server, 配置代理, 缓存, 日志定义等绝大多数功能和第三方模块的配置. 如文件引入, mime-type定义, 日志自定义, 是否使用sendfile传输文件, 连接超时时间, 单连接请求数等.")]),s._v(" "),n("h5",{attrs:{id:"server-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-块"}},[s._v("#")]),s._v(" server 块")]),s._v(" "),n("p",[s._v("配置虚拟主机的相关参数, 一个http中可以有多个server.")]),s._v(" "),n("h5",{attrs:{id:"location-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#location-块"}},[s._v("#")]),s._v(" location 块")]),s._v(" "),n("p",[s._v("配置请求的路由, 以及各种页面的处理情况.")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 全局块\nworker_processes 2;  #允许生成的进程数, 默认为1\npid /nginx/pid/nginx.pid;   #指定nginx进程运行文件存放地址\nerror_log log/error.log debug;  #制定日志路径, 级别. 这个设置可以放入全局块, http块, server块, 级别以此为: debug|info|notice|warn|error|crit|alert|emerg\n\n# events 块\nevents {\n    accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on\n    multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off\n    #use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport\n    worker_connections  1024;    #最大连接数，默认为512\n}\n\n# http 块\nhttp {\n    # http 全局块\n    include       mime.types;   #文件扩展名与文件类型映射表\n    default_type  application/octet-stream; #默认文件类型，默认为text/plain\n    # access_log off; #取消服务日志    \n    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式\n    access_log log/access.log myFormat;  #combined为日志格式的默认值\n    sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。\n    sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。\n    keepalive_timeout 60;  #连接超时时间，默认为75s，可以在http，server，location块。\n\n\t  # 负载均衡(轮询, 权重, 总有一款适合你)\n    upstream mysvr {\n      server 127.0.0.1:7878;\n      server 192.168.10.121:3333 backup;  #热备\n    }\n    \n    error_page 404 https://www.baidu.com; #错误页\n    \n    server {\n        keepalive_requests 120; #单连接请求上限次数。\n        listen       4545;   #监听端口\n        server_name  127.0.0.1;   #监听地址\n        location  ~*^.+$ {       #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。\n           #root path;  #根目录\n           #index vv.txt;  #设置默认页\n           proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表\n           deny 127.0.0.1;  #拒绝的ip\n           allow 172.18.5.54; #允许的ip           \n        } \n    }\n}\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);