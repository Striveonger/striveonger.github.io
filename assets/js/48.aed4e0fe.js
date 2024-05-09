(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{483:function(s,a,t){s.exports=t.p+"assets/img/image-20210619230414030.bcaae979.png"},710:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Docker 日常使用命令")]),s._v(" "),a("h2",{attrs:{id:"docker-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" Docker 常用命令")]),s._v(" "),a("h4",{attrs:{id:"下载镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("下载镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker pull centos")])]),s._v(" "),a("h4",{attrs:{id:"查看镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("查看镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker images")])]),s._v(" "),a("h4",{attrs:{id:"删除镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("删除镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker rmi "),a("image",{attrs:{id:""}})])]),s._v(" "),a("h4",{attrs:{id:"备份镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("备份镜像")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker commit -p 36b7b593a0e2 hbase-backup")])]),s._v(" "),a("ul",[a("li",[a("p",[a("em",[s._v("36b7b593a0e2")]),s._v(" 为"),a("strong",[s._v("容器id")]),s._v(",")])]),s._v(" "),a("li",[a("p",[a("em",[s._v("hbase-backup")]),s._v(" 为 "),a("strong",[s._v("备份名")])])])]),s._v(" "),a("h4",{attrs:{id:"备份镜像到文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份镜像到文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("备份镜像到文件")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker save -o ~/hbase-backup.tar hbase-backup")])]),s._v(" "),a("h4",{attrs:{id:"恢复镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("恢复镜像文件")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker load -i ~/Downloads/hbase-backup.tar")])]),s._v(" "),a("h4",{attrs:{id:"创建并启动交互型容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建并启动交互型容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建并启动交互型容器")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker run -ti --name=docker_centos centos:latest /bin/bash")])]),s._v(" "),a("ul",[a("li",[s._v("t: 告诉docker为容器建立一个命令行终端")]),s._v(" "),a("li",[s._v("i: 打开容器的标准输入")]),s._v(" "),a("li",[s._v("name: 指定容器名称，可以不填(随机)，建议根据具体使用功能命名，便于管理")]),s._v(" "),a("li",[a("code",[s._v("/bin/bash")]),s._v(":告诉docker要在容器里面执行此命令")])]),s._v(" "),a("h4",{attrs:{id:"创建并启动后台型容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建并启动后台型容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建并启动后台型容器")])]),s._v(" "),a("blockquote",[a("p",[s._v('docker run --name linux -d centos /bin/bash -c "while true; do echo hello; sleep 1; done"')])]),s._v(" "),a("ul",[a("li",[s._v("d:使用-d参数，使容器在后台运行")]),s._v(" "),a("li",[s._v("c: 通过-c可以调整容器的CPU优先级")]),s._v(" "),a("li",[s._v("-c后的命令是循环，从而保持容器的运行")])]),s._v(" "),a("h4",{attrs:{id:"进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("进入容器")])]),s._v(" "),a("blockquote",[a("p",[s._v("docker exec -ti CentOS /bin/bash")])]),s._v(" "),a("h4",{attrs:{id:"退出容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("退出容器")])]),s._v(" "),a("blockquote",[a("p",[s._v("先按，ctrl+p;  再按，ctrl+q")])]),s._v(" "),a("h4",{attrs:{id:"平时进入hbase的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平时进入hbase的命令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("平时进入HBase的命令")])]),s._v(" "),a("blockquote",[a("p",[s._v("$ docker start hbase")]),s._v(" "),a("p",[s._v("$ docker exec -ti hbase /bin/bash")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(483),alt:"image-20210619230414030"}})]),s._v(" "),a("blockquote",[a("p",[s._v("常用命令总览")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除镜像命令(Linux的骚操作).")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aq")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除容器命令(Linux的骚操作).")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 文件占比")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 元数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect \n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把容器提交成镜像")]),s._v("\n$ ~ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit b1945d74751c striveonger/tomcat:1.1\nsha256:fa472c779b357a120efcda11f9772bb51faa9788c2c5d6e09fa3071bc85b8e1d\n$ ~ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\nREPOSITORY                TAG       IMAGE ID       CREATED         SIZE\nstriveonger/tomcat        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("       fa472c779b35   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" seconds ago   578MB\nstriveonger/tomcat        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("       5fab5f22edd7   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" hours ago     578MB\nstriveonger/linux         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("       a49198bdfaa0   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago      204MB\nnginx                     latest    d1a364dc548d   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago     133MB\nmysql                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("         c0cdc95609f1   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" weeks ago     556MB\ncentos                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("         8652b9f0cb4c   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" months ago    204MB\nlinux                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("       5f78411ae0c1   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" months ago    204MB\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);