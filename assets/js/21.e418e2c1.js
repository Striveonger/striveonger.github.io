(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{501:function(s,t,a){s.exports=a.p+"assets/img/image-20240529211947525.b85c627c.png"},502:function(s,t,a){s.exports=a.p+"assets/img/image-20240529212115147.f7ec53a6.png"},503:function(s,t,a){s.exports=a.p+"assets/img/image-20240529212509086.60e6299b.png"},504:function(s,t,a){s.exports=a.p+"assets/img/image-20240529212901849.53e6a2ac.png"},754:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("最近接触Kubernetes比较多, 记录一下吧")]),s._v(" "),t("h3",{attrs:{id:"_1-修改-nodeport-端口范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改-nodeport-端口范围"}},[s._v("#")]),s._v(" 1.  修改 NodePort 端口范围")]),s._v(" "),t("p",[s._v("Kubernetes 默认 "),t("code",[s._v("node-port-range=30000-32767")]),s._v(" 端口限制")]),s._v(" "),t("h4",{attrs:{id:"_1-1-k3s-的修改方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-k3s-的修改方式"}},[s._v("#")]),s._v(" 1.1 K3s 的修改方式")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl stop k3s\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/systemd/system/k3s.service  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置，保存并退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#----- 修改配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin/k3s server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         --kube-apiserver-arg service-node-port-range"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("-65535 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加配置, 修改 NodePort 端口范围")]),s._v("\n         --data-dir /var/lib/rancher/k3s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" mytoken\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----")]),s._v("\nsystemctl daemon-reload\nsystemctl start k3s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"_1-2-k8s-的修改方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-k8s-的修改方式"}},[s._v("#")]),s._v(" 1.2 K8s 的修改方式")]),s._v(" "),t("p",[s._v("端口范围是由"),t("code",[s._v("kube-apiserver")]),s._v("控制的, 它是一个运行在k8s集群内的"),t("code",[s._v("pod")]),s._v(".  "),t("code",[s._v("kube-apiserver pod")]),s._v(" 基于 "),t("code",[s._v("/etc/kubernetes/manifests/kube-apiserver.yaml")]),s._v(" 创建.")]),s._v(" "),t("p",[s._v("更新文件 "),t("code",[s._v("/etc/kubernetes/manifests/kube-apiserver.yaml")]),s._v(" 并添加行 "),t("code",[s._v("--service-node-port-range=30000-65535")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("annotations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168."),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.*:")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6443")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creationTimestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" control"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plane\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("range=30000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("advertise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("address=192.168."),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.*")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("allow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("privileged=true\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("authorization"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mode=Node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("RBAC\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ca"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("file=/etc/kubernetes/pki/ca.crt\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admission"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plugins=NodeRestriction\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bootstrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("auth=true\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cafile=/etc/kubernetes/pki/etcd/ca.crt\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certfile=/etc/kubernetes/pki/apiserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client.crt\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("keyfile=/etc/kubernetes/pki/apiserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client.key\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("servers=https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2379")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("feature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gates=TTLAfterFinished=true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h4",{attrs:{id:"_1-3-校验修改后的nodeport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-校验修改后的nodeport"}},[s._v("#")]),s._v(" 1.3  校验修改后的NodePort")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Service"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo-gateway-service"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo-gateway"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NodePort"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# type 改为 NodePort")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TCP"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28080")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28080")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodePort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65534")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加对外暴露的端口号")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo-gateway"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("然后调用 "),t("code",[s._v("http://10.40.10.5:65534/api/v1/consumer/hello?name=tom")]),s._v(" 测试")]),s._v(" "),t("h3",{attrs:{id:"_2-修改-configmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-configmap"}},[s._v("#")]),s._v(" 2.  修改 ConfigMap")]),s._v(" "),t("h4",{attrs:{id:"_2-1-修改指定的configmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改指定的configmap"}},[s._v("#")]),s._v(" 2.1 修改指定的ConfigMap")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApiClient")]),s._v(" client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defaultClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setDefaultApiClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CoreV1Api")]),s._v(" api "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CoreV1Api")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" namespace "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo-config"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V1ConfigMap")]),s._v(" configMap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" api"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readNamespacedConfigMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" namespace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconfigMap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo-commons.yaml"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        logging:\n          level:\n            root: "info"\n        spring:\n          datasource:\n            driver-class-name: "org.postgresql.Driver"\n            base-url: "jdbc:postgresql://192.168.10.32:5432/omm2"\n            username: "postgres"\n            password: "A123456a"\n        """')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replaceNamespacedConfigMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" namespace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" configMap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"_2-2-修改后配置生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改后配置生效"}},[s._v("#")]),s._v(" 2.2 修改后配置生效")]),s._v(" "),t("p",[s._v("修改2~3秒后, 挂在到"),t("code",[s._v("Pod")]),s._v(" 中的配置文件内容得到更新...但是问题, 程序里没有更新呀....")]),s._v(" "),t("p",[s._v("现在的方案是利用 "),t("code",[s._v("Deployment")]),s._v("  重启 "),t("code",[s._v("Pod")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 Deployment 中的 Pod")]),s._v("\nkubectl rollout restart deployment demo-consumer-deployment "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" demo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("存在问题: 更新 "),t("code",[s._v("ConfigMap")]),s._v(" 是明确的, 但是重启 "),t("code",[s._v("Deployment")]),s._v(" 是tm模糊的呀....")])]),s._v(" "),t("p",[s._v("待探究的方案:")]),s._v(" "),t("p",[s._v("Kubernetes 中 配置规则..."),t("code",[s._v("Deployment")]),s._v(" 下面 "),t("code",[s._v("Pod")]),s._v(" 中使用的 "),t("code",[s._v("ConfigMap")]),s._v(" 发生变化时, 重启其下的所有 "),t("code",[s._v("Pod")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"_3-helm-初体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-helm-初体验"}},[s._v("#")]),s._v(" 3. Helm 初体验")]),s._v(" "),t("h3",{attrs:{id:"_4-一些命令行工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-一些命令行工具"}},[s._v("#")]),s._v(" 4. 一些命令行工具")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fzf\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bat\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ranger\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zoxide\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_4-1-fzf-查找文件或资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-fzf-查找文件或资源"}},[s._v("#")]),s._v(" 4.1 fzf 查找文件或资源")]),s._v(" "),t("p",[s._v("检索历史命令: "),t("code",[s._v("crtl + R")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(501),alt:"image-20240529211947525"}})]),s._v(" "),t("p",[s._v("检索当前文件中的文件: "),t("code",[s._v("crtl + T")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(502),alt:"image-20240529212115147"}})]),s._v(" "),t("h4",{attrs:{id:"_4-2-bat-查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-bat-查看文件"}},[s._v("#")]),s._v(" 4.2 bat 查看文件")]),s._v(" "),t("p",[t("code",[s._v("bat docker/app/namespace.yaml README.md")]),s._v(" 可以查看多个文件, 逐行查看, 与vim操作逻辑一致.")]),s._v(" "),t("p",[t("img",{attrs:{src:a(503),alt:"image-20240529212509086"}})]),s._v(" "),t("h4",{attrs:{id:"_4-3-ranger-查看目录及文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-ranger-查看目录及文件"}},[s._v("#")]),s._v(" 4.3 ranger 查看目录及文件")]),s._v(" "),t("p",[t("code",[s._v("ranger docker")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(504),alt:"image-20240529212901849"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);