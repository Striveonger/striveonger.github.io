(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{705:function(t,a,e){"use strict";e.r(a);var r=e(4),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Docker 日常使用命令")]),t._v(" "),e("h2",{attrs:{id:"docker-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[t._v("#")]),t._v(" Docker 常用命令")]),t._v(" "),e("h4",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[t._v("#")]),t._v(" "),e("strong",[t._v("下载镜像")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker pull centos")])]),t._v(" "),e("h4",{attrs:{id:"查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[t._v("#")]),t._v(" "),e("strong",[t._v("查看镜像")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker images")])]),t._v(" "),e("h4",{attrs:{id:"删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[t._v("#")]),t._v(" "),e("strong",[t._v("删除镜像")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker rmi "),e("image",{attrs:{id:""}})])]),t._v(" "),e("h4",{attrs:{id:"备份镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份镜像"}},[t._v("#")]),t._v(" "),e("strong",[t._v("备份镜像")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker commit -p 36b7b593a0e2 hbase-backup")])]),t._v(" "),e("ul",[e("li",[e("p",[e("em",[t._v("36b7b593a0e2")]),t._v(" 为"),e("strong",[t._v("容器id")]),t._v(",")])]),t._v(" "),e("li",[e("p",[e("em",[t._v("hbase-backup")]),t._v(" 为 "),e("strong",[t._v("备份名")])])])]),t._v(" "),e("h4",{attrs:{id:"备份镜像到文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份镜像到文件"}},[t._v("#")]),t._v(" "),e("strong",[t._v("备份镜像到文件")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker save -o ~/hbase-backup.tar hbase-backup")])]),t._v(" "),e("h4",{attrs:{id:"恢复镜像文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像文件"}},[t._v("#")]),t._v(" "),e("strong",[t._v("恢复镜像文件")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker load -i ~/Downloads/hbase-backup.tar")])]),t._v(" "),e("h4",{attrs:{id:"创建并启动交互型容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建并启动交互型容器"}},[t._v("#")]),t._v(" "),e("strong",[t._v("创建并启动交互型容器")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker run -ti --name=docker_centos centos:latest /bin/bash")])]),t._v(" "),e("ul",[e("li",[t._v("t: 告诉docker为容器建立一个命令行终端")]),t._v(" "),e("li",[t._v("i: 打开容器的标准输入")]),t._v(" "),e("li",[t._v("name: 指定容器名称，可以不填(随机)，建议根据具体使用功能命名，便于管理")]),t._v(" "),e("li",[e("code",[t._v("/bin/bash")]),t._v(":告诉docker要在容器里面执行此命令")])]),t._v(" "),e("h4",{attrs:{id:"创建并启动后台型容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建并启动后台型容器"}},[t._v("#")]),t._v(" "),e("strong",[t._v("创建并启动后台型容器")])]),t._v(" "),e("blockquote",[e("p",[t._v('docker run --name linux -d centos /bin/bash -c "while true; do echo hello; sleep 1; done"')])]),t._v(" "),e("ul",[e("li",[t._v("d:使用-d参数，使容器在后台运行")]),t._v(" "),e("li",[t._v("c: 通过-c可以调整容器的CPU优先级")]),t._v(" "),e("li",[t._v("-c后的命令是循环，从而保持容器的运行")])]),t._v(" "),e("h4",{attrs:{id:"进入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[t._v("#")]),t._v(" "),e("strong",[t._v("进入容器")])]),t._v(" "),e("blockquote",[e("p",[t._v("docker exec -ti CentOS /bin/bash")])]),t._v(" "),e("h4",{attrs:{id:"退出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[t._v("#")]),t._v(" "),e("strong",[t._v("退出容器")])]),t._v(" "),e("blockquote",[e("p",[t._v("先按，ctrl+p;  再按，ctrl+q")])]),t._v(" "),e("h4",{attrs:{id:"平时进入hbase的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平时进入hbase的命令"}},[t._v("#")]),t._v(" "),e("strong",[t._v("平时进入HBase的命令")])]),t._v(" "),e("blockquote",[e("p",[t._v("$ docker start hbase")]),t._v(" "),e("p",[t._v("$ docker exec -ti hbase /bin/bash")])])])}),[],!1,null,null,null);a.default=s.exports}}]);