(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{515:function(s,t,e){s.exports=e.p+"assets/img/image-20210618110841692.a5bdf19a.png"},516:function(s,t,e){s.exports=e.p+"assets/img/image-20210618111301640.181c8b52.png"},517:function(s,t,e){s.exports=e.p+"assets/img/image-20210618111513916.58306afc.png"},518:function(s,t,e){s.exports=e.p+"assets/img/image-20210618111550099.efc96be7.png"},519:function(s,t,e){s.exports=e.p+"assets/img/image-20210618112213933.61048805.png"},520:function(s,t,e){s.exports=e.p+"assets/img/image-20210618112504983.227cbe90.png"},521:function(s,t,e){s.exports=e.p+"assets/img/image-20210618112853202.74588492.png"},522:function(s,t,e){s.exports=e.p+"assets/img/image-20210618113613251.d56037cc.png"},523:function(s,t,e){s.exports=e.p+"assets/img/image-20210618150839365.169e3fa0.png"},524:function(s,t,e){s.exports=e.p+"assets/img/image-20210618152048331.cdd79642.png"},525:function(s,t,e){s.exports=e.p+"assets/img/image-20210618153001029.81873082.png"},526:function(s,t,e){s.exports=e.p+"assets/img/image-20210618153219806.667a5721.png"},527:function(s,t,e){s.exports=e.p+"assets/img/image-20210618154714531.82006d74.png"},528:function(s,t,e){s.exports=e.p+"assets/img/image-20210618155240145.d251bf93.png"},768:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("VS Code Remote Development")]),s._v(" "),t("p",[s._v("从原理上讲, "),t("code",[s._v("VS Code Remote Development")]),s._v(" 相当于把开发者自己机器上的 VS Code 原样拷贝到作为目标机器(Remote Host)上, 以服务的形式运行. 而本地的 VS Code 作为客户端, 两者之间通过远程通讯协议彼此协调合作, 实际上的开发工作主要是在服务端完成的.")]),s._v(" "),t("p",[s._v("目前, VS Code 远程开发("),t("code",[s._v("Remote Development")]),s._v(")支持下列三种主要模式:")]),s._v(" "),t("ul",[t("li",[s._v("Remote SSH: 通过 SSH 连接到 Linux 服务器")]),s._v(" "),t("li",[s._v("Remote Container: 连接到 Docker 容器")]),s._v(" "),t("li",[s._v("Remote WSL: 连接到已安装的 WSL 环境")])]),s._v(" "),t("p",[s._v("我们今天着重要看的是 "),t("code",[s._v("Remote SSH")]),s._v(" 和 "),t("code",[s._v("Remote Container")]),s._v(" 两种模式哦.")]),s._v(" "),t("h3",{attrs:{id:"remote-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-ssh"}},[s._v("#")]),s._v(" Remote SSH")]),s._v(" "),t("p",[t("img",{attrs:{src:e(515),alt:"image-20210618110841692"}})]),s._v(" "),t("h4",{attrs:{id:"创建一个ssh连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个ssh连接"}},[s._v("#")]),s._v(" 创建一个SSH连接")]),s._v(" "),t("p",[t("code",[s._v("Ctrl/Cmd + P")]),s._v("  >  "),t("strong",[s._v("Remote-SSH: Add New SSH Host…")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(516),alt:"image-20210618111301640"}})]),s._v(" "),t("p",[t("strong",[s._v("ssh root@192.168.10.14")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(517),alt:"image-20210618111513916"}})]),s._v(" "),t("p",[s._v("选择"),t("strong",[s._v("配置文件")]),s._v("的位置")]),s._v(" "),t("p",[t("img",{attrs:{src:e(518),alt:"image-20210618111550099"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Host 192.168.10.14\n  HostName 192.168.10.14\n  User root\n  # 配置免密登录\n  IdentityFile "C:\\Users\\Administrator\\.ssh\\id_rsa"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("连接成功了…哈哈")]),s._v(" "),t("p",[t("img",{attrs:{src:e(519),alt:"image-20210618112213933"}})]),s._v(" "),t("blockquote",[t("p",[s._v("哈哈…终于可以直接用服务器, 写代码了…")])]),s._v(" "),t("h4",{attrs:{id:"官方给的模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方给的模型"}},[s._v("#")]),s._v(" 官方给的模型")]),s._v(" "),t("p",[t("img",{attrs:{src:e(520),alt:"image-20210618112504983"}})]),s._v(" "),t("h4",{attrs:{id:"用服务器调试代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用服务器调试代码"}},[s._v("#")]),s._v(" 用服务器调试代码")]),s._v(" "),t("p",[s._v("打开项目所在的文件夹 "),t("code",[s._v("Ctrl/Cmd + K")]),s._v(", "),t("code",[s._v("Ctrl/Cmd + O")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(521),alt:"image-20210618112853202"}})]),s._v(" "),t("p",[s._v("运行并调试服务器上的代码")]),s._v(" "),t("p",[t("img",{attrs:{src:e(522),alt:"image-20210618113613251"}})]),s._v(" "),t("blockquote",[t("p",[s._v("Remote SSH 让我们可以利用服务器的环境, 和服务器的资源来做开发.")]),s._v(" "),t("p",[s._v("但是用个问题呀, 在团队开发的过程中, 这个模型, 好容易冲突哦…..也不是不能解决…通过用户来隔离资源…是可以实现的…但是太麻烦, 没必要…..")]),s._v(" "),t("p",[s._v("这个模型下, 在本地, 只需安装一个VS Code, 便可以做开发了, 可以实现本地不存代码呀…哈哈…")])]),s._v(" "),t("h3",{attrs:{id:"remote-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-container"}},[s._v("#")]),s._v(" Remote Container")]),s._v(" "),t("p",[s._v("当然在日常的开发中,  来是希望代码的版本管理放到本地来的…还不希望配置繁杂的开发环境, 还要解决开发环境与部署环境差异带来的烦恼…")]),s._v(" "),t("h4",{attrs:{id:"创建docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建docker容器"}},[s._v("#")]),s._v(" 创建Docker容器")]),s._v(" "),t("p",[t("img",{attrs:{src:e(523),alt:"image-20210618150839365"}})]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据自己的需要, 来构建适合自己的开发环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一层的镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir -p /workspace/data-et-ui")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RUN npm install express")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("@ECHO OFF\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROJECT_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data_et_ui\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORKSPACE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/c/development/workspace/docker_volume/\n\nECHO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>>> 1. Build Docker Image"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" %PROJECT_NAME%_mirror "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nECHO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>>> 2. Generate Docker Container"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" %PROJECT_NAME%_container "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" %WORKSPACE%:/workspace/ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" %PROJECT_NAME%_mirror /bin/bash "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while sleep 1 & wait '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$!")]),s._v('; do :; done"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h5",{attrs:{id:"遇到坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到坑"}},[s._v("#")]),s._v(" 遇到坑")]),s._v(" "),t("p",[s._v("在创建容器时, 需要把本地的文件夹..挂载到Docker容器中, 来实现代码还是自己来管理.")]),s._v(" "),t("p",[s._v("但是在"),t("code",[s._v("Windows")]),s._v("环境下,  Docker不能直接读到路径….需要做"),t("code",[s._v("File Share")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(524),alt:"image-20210618152048331"}})]),s._v(" "),t("p",[s._v("还有, 就是原路径: "),t("code",[s._v("C:\\development\\workspace\\docker_volume\\")]),s._v("  要改写为 "),t("code",[s._v("/c/development/workspace/docker_volume/")])]),s._v(" "),t("blockquote",[t("p",[s._v("老金说, 这个路径, docker 做了转义,  我觉得有很有道理")])]),s._v(" "),t("h4",{attrs:{id:"vs-code-连接容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-连接容器"}},[s._v("#")]),s._v(" VS Code 连接容器")]),s._v(" "),t("p",[t("img",{attrs:{src:e(525),alt:"image-20210618153001029"}})]),s._v(" "),t("p",[s._v("连接成功的样子")]),s._v(" "),t("p",[t("img",{attrs:{src:e(526),alt:"image-20210618153219806"}})]),s._v(" "),t("h4",{attrs:{id:"正确的打开方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正确的打开方式"}},[s._v("#")]),s._v(" 正确的打开方式?")]),s._v(" "),t("p",[s._v("上面的打开方式,  是不是觉得略繁琐了些….")]),s._v(" "),t("p",[s._v("好在VS Code 提供了更简单地方法….有更简单地方法, 为啥还会有上面那一大坨…..(鬼知道呢~~~~~~~)")]),s._v(" "),t("p",[s._v("在已有代码中加入"),t("code",[s._v(".devcontainer")]),s._v(" 文件夹, 其中包含"),t("code",[s._v("devcontainer.json")]),s._v(" 和 "),t("code",[s._v("Dockerfile")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dockerfile"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Dockerfile"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"VARIANT"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "settings": { ')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// \t"terminal.integrated.shell.linux": "/bin/bash"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// },")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extensions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbaeumer.vscode-eslint"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"forwardPorts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postCreateCommand"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn install"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"remoteUser"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" VARIANT="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14-buster"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mcr.microsoft.com/vscode/devcontainers/javascript-node:0-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${VARIANT}")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && export DEBIAN_FRONTEND=noninteractive "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && apt-get install git")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("Ctrl/Cmd + Shift + P")]),s._v("   >  "),t("strong",[s._v("Remote-Containers: Open Folder in Containers…")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(527),alt:"image-20210618154714531"}})]),s._v(" "),t("p",[s._v("选择"),t("code",[s._v("File Share")]),s._v(" 文件夹下的项目(文件夹)")]),s._v(" "),t("p",[t("img",{attrs:{src:e(528),alt:"image-20210618155240145"}})]),s._v(" "),t("p",[s._v("官方提供了很多"),t("code",[s._v(".devcontainer")]),s._v("的"),t("a",{attrs:{href:"https://github.com/microsoft/vscode-dev-containers",target:"_blank",rel:"noopener noreferrer"}},[s._v("模板"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("blockquote",[t("p",[s._v("参考文章:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("https://shuhari.dev/blog/2019/06/vscode-remote-secret")])]),s._v(" "),t("li",[t("p",[s._v("https://code.visualstudio.com/docs/remote/create-dev-container")])]),s._v(" "),t("li",[t("p",[s._v("https://code.visualstudio.com/docs/remote/devcontainerjson-reference")])]),s._v(" "),t("li",[t("p",[s._v("https://github.com/microsoft/vscode-dev-containers")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/361934730",target:"_blank",rel:"noopener noreferrer"}},[s._v("VS Code 连接服务器中的Docker容器"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);