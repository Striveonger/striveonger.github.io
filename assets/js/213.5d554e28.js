(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{876:function(e,t,_){"use strict";_.r(t);var o=_(4),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("今天释怀了我的服务器端口问题之后, 开始搞一些常用的软件")]),e._v(" "),_("h3",{attrs:{id:"_1-安装docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装docker"}},[e._v("#")]),e._v(" 1. 安装Docker")]),e._v(" "),_("p",[e._v("因为我的系统是 CentOS 7, Docker 要求 CentOS 系统的内核版本高于 3.10. 所以先查看一下内核版本"),_("code",[e._v("uname -r")]),e._v("满足条件后, 直接安装"),_("code",[e._v("yum -y install docker")]),e._v(" . 安装完后, 启动服务........")]),e._v(" "),_("p",[e._v("在CentOS 7下, 启动服务不再是 "),_("code",[e._v("service docker start")]),e._v(" 这样的方式的.而是: "),_("code",[e._v("systemctl start docker.service")]),e._v(".")]),e._v(" "),_("p",[e._v("设置开机启动: "),_("code",[e._v("systemctl enable docker.service")])]),e._v(" "),_("h3",{attrs:{id:"_2-下载镜像-创建容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载镜像-创建容器"}},[e._v("#")]),e._v(" 2. 下载镜像, 创建容器")]),e._v(" "),_("p",[e._v("下载镜像: "),_("code",[e._v("docker pull centos:6.7")])]),e._v(" "),_("p",[e._v("创建容器: "),_("code",[e._v('docker run --name=linux -d centos:6.7 /bin/bash -c "while true; do echo hello; sleep 1; done"')])]),e._v(" "),_("h3",{attrs:{id:"_3-容器里的事故"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-容器里的事故"}},[e._v("#")]),e._v(" 3. 容器里的事故")]),e._v(" "),_("p",[e._v("进入容器: "),_("code",[e._v("docker exec -ti linux /bin/bash")])]),e._v(" "),_("p",[e._v("进入之后本来是想在容器里, 再运行起一个Docker 来玩玩的, 结果发现这条路行不通.\n原因和解决办法: "),_("code",[e._v("http://www.wangtianyi.top/blog/2017/01/29/docker-in-docker/")]),e._v(" , 我在这找到了答案.")]),e._v(" "),_("p",[e._v("玩不了, 就中规中矩的安装些软件吧. 下载个JDK来玩玩. 先"),_("code",[e._v("ping")]),e._v(" 下, 结果 "),_("code",[e._v("-bash: ping: command not found")]),e._v(" 我去..心里一万只草泥马, 在奔腾.......还要另安装 "),_("code",[e._v("yum -y install iputils")])]),e._v(" "),_("p",[e._v("看了一下时间, 那边的任务, 估计快执行完了, 这边只能晚上回去继续搞了, 就先记到这.....")])])}),[],!1,null,null,null);t.default=v.exports}}]);