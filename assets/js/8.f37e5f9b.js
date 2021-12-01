(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{520:function(t,s,a){t.exports=a.p+"assets/img/docker_03_001.0cecc4b6.png"},521:function(t,s,a){t.exports=a.p+"assets/img/docker_03_002.66a2bacd.png"},522:function(t,s,a){t.exports=a.p+"assets/img/docker_03_003.df4c2da5.png"},523:function(t,s,a){t.exports=a.p+"assets/img/docker_03_004.e2a29ee9.png"},524:function(t,s,a){t.exports=a.p+"assets/img/docker_03_005.65aad237.png"},714:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("利用Docker安装Maven私服")]),t._v(" "),e("h4",{attrs:{id:"_1-下载-nexus镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-nexus镜像"}},[t._v("#")]),t._v(" 1. 下载 Nexus镜像")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("docker pull sonatype/nexus3")])])]),t._v(" "),e("h4",{attrs:{id:"_2-创建容器挂载宿主机路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建容器挂载宿主机路径"}},[t._v("#")]),t._v(" 2. 创建容器挂载宿主机路径")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("mkdir /Users/Selfimpr/development/workspace/nexus-data")])]),t._v(" "),e("p",[e("code",[t._v("chmod 777 /Users/Selfimpr/development/workspace/nexus-data")])])]),t._v(" "),e("h4",{attrs:{id:"_3-启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动容器"}},[t._v("#")]),t._v(" 3. 启动容器")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v('docker run -d -p 8081:8081 --name nexus -e NEXUS_CONTEXT=nexus -e INSTALL4J_ADD_VM_PARAMS="-Xms2g -Xmx2g -XX:MaxDirectMemorySize=3g -Djava.util.prefs.userRoot=/some-other-dir" -v /Users/Selfimpr/development/workspace/nexus-data:/nexus-data sonatype/nexus3')])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-e NEXUS_CONTEXT=nexus")]),t._v(" 指定Web访问Nexus3时, URL加的后缀. 默认为: "),e("code",[t._v("/")])]),t._v(" "),e("li",[e("code",[t._v('-e INSTALL4J_ADD_VM_PARAMS="-Xms2g -Xmx2g -XX:MaxDirectMemorySize=3g -Djava.util.prefs.userRoot=/some-other-dir"')]),t._v(" 配置一些 JVM 的参数变量.")]),t._v(" "),e("li",[e("code",[t._v("-v /Users/Selfimpr/development/workspace/nexus-data:/nexus-data")]),t._v(" 将主机目录挂载为卷")])]),t._v(" "),e("h4",{attrs:{id:"_4-查看容器日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看容器日志"}},[t._v("#")]),t._v(" 4. 查看容器日志")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("docker logs -f nexus")])])]),t._v(" "),e("h4",{attrs:{id:"_5-测试连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试连接"}},[t._v("#")]),t._v(" 5. 测试连接")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("curl -u admin:admin123 http://localhost:8081/nexus/service/metrics/ping")])])]),t._v(" "),e("p",[t._v("当控制台显示 "),e("code",[t._v("pong")]),t._v(", 表示Nexus已可以正常使用了")]),t._v(" "),e("p",[t._v("至此, 安装步骤到此结束.")]),t._v(" "),e("blockquote",[e("p",[t._v("容器的官方配置说明: https://hub.docker.com/r/sonatype/nexus3")])]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"_6-配置nexus3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置nexus3"}},[t._v("#")]),t._v(" 6. 配置Nexus3")]),t._v(" "),e("p",[t._v("配置私服的目的有两个:")]),t._v(" "),e("ul",[e("li",[t._v("在项目中使用私服("),e("span",{staticStyle:{"font-size":"14px"}},[t._v("私服中已存在的jar, 直接从中拉取. 私服中没有的, 私服通过代理拉取, 并存到私服中")]),t._v(")")]),t._v(" "),e("li",[t._v("将项目发布到私服中去")])]),t._v(" "),e("h5",{attrs:{id:"_6-1-配置nexus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-配置nexus"}},[t._v("#")]),t._v(" 6.1  配置Nexus")]),t._v(" "),e("blockquote",[e("p",[t._v("打开:  "),e("code",[t._v("http://127.0.0.1:8081/nexus/")]),t._v("\n登录:  "),e("code",[t._v("username: admin")]),t._v(",  "),e("code",[t._v("password: admin123")])])]),t._v(" "),e("p",[e("strong",[t._v("创建自己的资源库")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(520),alt:"创建资源库"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(521),alt:"分别要创建三个资源库"}})]),t._v(" "),e("h6",{attrs:{id:"_1-创建代理资源库-proxy-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建代理资源库-proxy-repository"}},[t._v("#")]),t._v(" ① 创建代理资源库(Proxy Repository)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(522),alt:"创建代理资源库"}})]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Name: maven_proxy")]),t._v(" "),e("code",[t._v("Remote storage: http://maven.aliyun.com/nexus/content/groups/public/")]),t._v(" "),e("code",[t._v("Version policy: Release")])])]),t._v(" "),e("p",[e("strong",[t._v("分别解释含义:")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Name:")]),t._v(" 保持唯一, 见名知意即可\n"),e("code",[t._v("Remote storage:")]),t._v(" 我这里用的阿里提供的Maven仓库, 考虑到国内的下载速度\n"),e("code",[t._v("Version policy:")]),t._v(" 版本策略默认选择发布版本")])]),t._v(" "),e("h6",{attrs:{id:"_2-创建托管资源库-hosted-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建托管资源库-hosted-repository"}},[t._v("#")]),t._v(" ② 创建托管资源库(Hosted Repository)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(523),alt:"创建代理资源库"}})]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Name: maven_hosted")]),t._v(" "),e("code",[t._v("Version policy: Snapshot")]),t._v(" "),e("code",[t._v("Deployment policy: Allow redeploy")])])]),t._v(" "),e("p",[e("strong",[t._v("分别解释含义:")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Name:")]),t._v(" 保持唯一, 见名知意即可\n"),e("code",[t._v("Version policy:")]),t._v(" 版本策略, 这里选择快照版本("),e("span",{staticStyle:{"font-size":"14px"}},[t._v("本地项目, 大多都是快照版本")]),t._v(")\n"),e("code",[t._v("Deployment policy:")]),t._v(" 部署策略, 这里选择允许重新部署("),e("span",{staticStyle:{"font-size":"14px"}},[t._v("本地项目, 修改可能会比较频繁")]),t._v(")")])]),t._v(" "),e("h6",{attrs:{id:"_3-创建组资源库-group-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建组资源库-group-repository"}},[t._v("#")]),t._v(" ③ 创建组资源库(Group Repository)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(524),alt:"创建代理资源库"}})]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("Name: maven_group")]),t._v(" "),e("code",[t._v("Members: 选择的Items与顺序见图")])])]),t._v(" "),e("p",[e("strong",[e("span",{staticStyle:{"font-size":"23px",color:"#f00"}},[t._v("为什么要注意顺序?")])])]),t._v(" "),e("p",[t._v("官方文档中建议：")]),t._v(" "),e("p",[t._v("It is recommended practice to place hosted repositories higher in the list than proxy repositories. For proxy repositories, the repository manager needs to check the remote repository which will incur more overhead than a hosted repository lookup.")]),t._v(" "),e("p",[t._v("希望将hosted repositories【托管资源库】的顺序放在proxy repositories【代理资源库】之前，因为一个group【组资源库】中可以涵括这些托管资源库和代理资源库。而一整个的group是作为一个public，一个接口给别人使用的。所以当查找jar包的时候，如果代理资源库在前面，那就是先从远程去查找jar，而不是先从托管资源库（本地仓库）去查找是否有jar。这样访问外网的消耗比起来在本地查找，当然是将托管资源库放在代理资源库之前的优先位置了。")]),t._v(" "),e("h5",{attrs:{id:"_6-2-配置本地maven-settings-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-配置本地maven-settings-xml"}},[t._v("#")]),t._v(" 6.2  配置本地Maven(settings.xml)")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nexus"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("admin"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("admin123"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nexus"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Nexus Repository"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://127.0.0.1:8081/nexus/repository/maven_group/"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("h5",{attrs:{id:"_6-3-配置项目-pom-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-配置项目-pom-xml"}},[t._v("#")]),t._v(" 6.3  配置项目(pom.xml)")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("distributionManagement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven_hosted"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My Self Maven Hosted Repository"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://127.0.0.1:8081/nexus/repository/maven_hosted/"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("distributionManagement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h5",{attrs:{id:"_6-4-项目打包上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-项目打包上传"}},[t._v("#")]),t._v(" 6.4 项目打包上传")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mvn clean deploy -Dmaven.test.skip"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/docker_03_006.png",alt:"创建代理资源库"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);