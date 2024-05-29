(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{763:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("初见 Kubernetes")]),s._v(" "),a("h4",{attrs:{id:"查看pod列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pod列表"}},[s._v("#")]),s._v(" 查看pod列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl get pods --all-namespaces "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查看svc列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看svc列表"}},[s._v("#")]),s._v(" 查看svc列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl get svc --all-namespaces "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"进入指定pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入指定pod"}},[s._v("#")]),s._v(" 进入指定Pod")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" grafana-operator-grafana-deployment-5958dd6dc5-rjbv9 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" monitoring /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("grafana-operator-grafana-deployment-5958dd6dc5-rjbv9")]),s._v(" "),a("strong",[s._v("pod-id")]),s._v(" "),a("code",[s._v("-n monitoring")]),s._v(" 所在的命名空间")])]),s._v(" "),a("h4",{attrs:{id:"查看pod日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pod日志"}},[s._v("#")]),s._v(" 查看Pod日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" omm-service-indicator-6c699dff46-t99qs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("omm-service-indicator-6c699dff46-t99qs")]),s._v(" "),a("strong",[s._v("pod-id")])])]),s._v(" "),a("h4",{attrs:{id:"端口转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口转发"}},[s._v("#")]),s._v(" 端口转发")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl port-forward "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" infrastructure "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.5  svc/postgres-postgresql "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55432")]),s._v(":5432\nkubectl port-forward "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.5 svc/nacos-cs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(":8848 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9848")]),s._v(":9848\nkubectl port-forward "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" omm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.5 svc/omm-service-gateway "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58082")]),s._v(":58082\nkubectl port-forward "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" monitoring "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.5 svc/grafana-loki-querier "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3100")]),s._v(":3100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("注意哦, "),a("code",[s._v("nacos-cs")]),s._v(" 不是pod-name哦, 而是 svc(类似域名的东西) K8s-dns搞出来的新名词")])]),s._v(" "),a("h4",{attrs:{id:"重新打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新打包"}},[s._v("#")]),s._v(" 重新打包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.更新前后端代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/ops_helm/img_build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 确保后端代码docker目录下, 有`liquibase-4.26.0.tar.gz`文件")]),s._v("\n➜  img_build ll operate-monitor-middleware/docker \n总用量 102M\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":58 bin\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".6K  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":58 Dockerfile\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root 102M  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":11 liquibase-4.26.0.tar.gz\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".0K  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":58 README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 分别制作前后端的Docker镜像并导入K3s")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.1 后端")]),s._v("\nmvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DskipTests")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ./docker/Dockerfile  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" omm-service:1.3.0 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" omm-service-1_3_0.tar omm-service:1.3.0\nk3s ctr image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" omm-service-1_3_0.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.2 前端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" i \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ./docker/Dockerfile "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" omm-service-ui:1.3.0 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" omm-service-ui-1_3_0.tar omm-service-ui:1.3.0\nk3s ctr image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" omm-service-ui-1_3_0.tar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 复制到.2服务器, 并导入K3s ( Cecbrain@230814 )")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" omm-service-1_3_0.tar root@10.40.10.2:/opt/ops_helm/image/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" omm-service-ui-1_3_0.tar root@10.40.10.2:/opt/ops_helm/image/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去.2服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/ops_helm/image/\nk3s ctr image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" omm-service-1_3_0.tar\nk3s ctr image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" omm-service-ui-1_3_0.tar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 在.5服务器上卸载omm的应用")]),s._v("\nhelm uninstall omm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" omm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6. 重新安装 omm 应用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/ops_helm/omm-k8s\nhelm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" omm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" omm ./helm  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/values.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("Pod、Deployment 和 Service 是 K8s 中最常用的三个资源对象。它们之间的关系如下:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Pod")]),s._v(" 是 K8s 中最小的调度单元，一个 Pod 代表一个或多个容器的运行实例。 Pod 中的容器共享网络、IPC 和存储等资源。")]),s._v(" "),a("li",[a("code",[s._v("Deployment")]),s._v(" 是 Kubernetes 中用于管理 Pod 的资源对象。 Deployment 可以确保运行指定数量的 Pod 副本，并可以进行滚动更新和回滚。")]),s._v(" "),a("li",[a("code",[s._v("Service")]),s._v(" 是 Kubernetes 中用于提供服务的资源对象。 Service 为 Pod 提供了一个统一的访问入口，并可以进行负载均衡。")])]),s._v(" "),a("p",[s._v("Pod 与 Deployment 的关系:")]),s._v(" "),a("ul",[a("li",[s._v("Deployment 可以控制 Pod 的数量和 Pod 的副本的规格。")]),s._v(" "),a("li",[s._v("Deployment 可以保证 Pod 的副本数始终与预期值一致。")]),s._v(" "),a("li",[s._v("Deployment 可以进行滚动更新和回滚。")])]),s._v(" "),a("p",[s._v("Deployment 与 Service 的关系:")]),s._v(" "),a("ul",[a("li",[s._v("Service 可以为 Deployment 中的 Pod 提供一个统一的访问入口。")]),s._v(" "),a("li",[s._v("Service 可以进行负载均衡，将流量分发到多个 Pod 副本上。")])]),s._v(" "),a("p",[s._v("Pod、Deployment 和 Service 的使用场景:")]),s._v(" "),a("ul",[a("li",[s._v("Pod: 用于运行应用程序。")]),s._v(" "),a("li",[s._v("Deployment: 用于管理 Pod，保证 Pod 的运行状态。")]),s._v(" "),a("li",[s._v("Service: 用于对外提供服务。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);