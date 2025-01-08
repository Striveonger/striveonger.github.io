(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{491:function(s,n,a){s.exports=a.p+"assets/img/image-20241219171249075.9b8b036f.png"},739:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("现在测试环境中的 "),n("code",[s._v("Kubernetes")]),s._v(" 集群, 有  "),n("code",[s._v("10.2")]),s._v(", "),n("code",[s._v("10.8")]),s._v("  两台机器")]),s._v(" "),n("h3",{attrs:{id:"前情提要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前情提要"}},[s._v("#")]),s._v(" 前情提要")]),s._v(" "),n("p",[s._v("为了统一镜像源. 就引入了 "),n("code",[s._v("Docker Registry")]),s._v(" ,  并修改镜像拉取策略为"),n("code",[s._v("IfNotPresent")]),s._v(" . 但是 "),n("code",[s._v("10.8")]),s._v(" 机器始终拉取不到 "),n("code",[s._v("Docker Registry")]),s._v(" 中的镜像. 就导致调度到 "),n("code",[s._v("10.8")]),s._v(" 的服务部署失败. 为了不影响服务的正常访问, 就要给 "),n("code",[s._v("10.8")]),s._v(" 加个污点, 不让服务调度到这台机器.")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("kubectl taint "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value:NoSchedule\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"开始今天的记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始今天的记录"}},[s._v("#")]),s._v(" 开始今天的记录")]),s._v(" "),n("p",[n("img",{attrs:{src:a(491),alt:"image-20241219171249075"}})]),s._v(" "),n("p",[s._v("因为  "),n("code",[s._v("10.2")]),s._v("  资源耗尽了, 新部署的服务一直处在 "),n("code",[s._v("Pinging")]),s._v(" 状态.")]),s._v(" "),n("p",[s._v("临时的解决方案是, 镜像拉取模式改为: "),n("code",[s._v("Always")]),s._v(" , 清掉 "),n("code",[s._v("10.8")]),s._v(" 的污点, 让服务调度到这台机器.")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 10.8 的污点")]),s._v("\n❯ kubectl taint nodes "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8 key-\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 10.8 机器的详情")]),s._v("\n❯ kubectl describe "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\nName:               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\nRoles:              "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nLabels:             beta.kubernetes.io/arch"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n                    beta.kubernetes.io/instance-type"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k3s\n                    beta.kubernetes.io/os"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\n                    kubernetes.io/arch"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n                    kubernetes.io/hostname"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n                    kubernetes.io/os"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\n                    node.kubernetes.io/instance-type"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k3s\nAnnotations:        alpha.kubernetes.io/provided-node-ip: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n                    flannel.alpha.coreos.com/backend-data: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VNI"')]),s._v(":1,"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VtepMAC"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3a:e6:a8:04:80:e9"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                    flannel.alpha.coreos.com/backend-type: vxlan\n                    flannel.alpha.coreos.com/kube-subnet-manager: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n                    flannel.alpha.coreos.com/public-ip: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n                    k3s.io/hostname: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n                    k3s.io/internal-ip: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n                    k3s.io/node-args: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agent"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--data-dir"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/rancher/k3s"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--server"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://10.40.10.2:6443"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--token"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"********"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    k3s.io/node-config-hash: "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M43OC3ONSHZXLZ2IBB6U4SCP5SRIIYFE42JRQ5QYNM3KRKHSMUYQ")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n                    k3s.io/node-env: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"K3S_DATA_DIR"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/rancher/k3s/data/13f9723ffde84ba41d08658d407a523bcf32698f179c9ab30cc0534e1e5d2c1a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                    node.alpha.kubernetes.io/ttl: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                    volumes.kubernetes.io/controller-managed-attach-detach: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nCreationTimestamp:  Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":35:19 +0800\nTaints:             "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nUnschedulable:      "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nLease:\n  HolderIdentity:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n  AcquireTime:     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("unset"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  RenewTime:       Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":43:26 +0800\nConditions:\n  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message\n  ----             ------  -----------------                 ------------------                ------                       -------\n  MemoryPressure   False   Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":41:26 +0800   Mon, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" 04:49:59 +0800   KubeletHasSufficientMemory   kubelet has sufficient memory available\n  DiskPressure     False   Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":41:26 +0800   Mon, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" 04:49:59 +0800   KubeletHasNoDiskPressure     kubelet has no disk pressure\n  PIDPressure      False   Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":41:26 +0800   Mon, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" 04:49:59 +0800   KubeletHasSufficientPID      kubelet has sufficient PID available\n  Ready            True    Thu, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":41:26 +0800   Tue, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":07:57 +0800   KubeletReady                 kubelet is posting ready status\nAddresses:\n  InternalIP:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\n  Hostname:    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.40")]),s._v(".10.8\nCapacity:\n  cpu:                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n  ephemeral-storage:  506210820Ki\n  hugepages-1Gi:      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  hugepages-2Mi:      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             31596900Ki\n  pods:               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nAllocatable:\n  cpu:                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n  ephemeral-storage:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("492441885310")]),s._v("\n  hugepages-1Gi:      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  hugepages-2Mi:      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  memory:             31596900Ki\n  pods:               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nSystem Info:\n  Machine ID:                 e40653e9f03a4b6993154fb8bb7d4c99\n  System UUID:                e40653e9f03a4b6993154fb8bb7d4c99\n  Boot ID:                    4985cddb-f229-4215-b5ec-87254745df1c\n  Kernel Version:             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.19")]),s._v(".90-24.4.v2101.ky10.x86_64\n  OS Image:                   Kylin Linux Advanced Server V10 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Sword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Operating System:           linux\n  Architecture:               amd64\n  Container Runtime Version:  containerd://1.7.11-k3s2\n  Kubelet Version:            v1.28.6+k3s2\n  Kube-Proxy Version:         v1.28.6+k3s2\nPodCIDR:                      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.42")]),s._v(".3.0/24\nPodCIDRs:                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.42")]),s._v(".3.0/24\nProviderID:                   k3s://10.40.10.8\nNon-terminated Pods:          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Namespace                   Name                                              CPU Requests  CPU Limits  Memory Requests  Memory Limits  Age\n  ---------                   ----                                              ------------  ----------  ---------------  -------------  ---\n  kube-system                 svclb-traefik-7fdb195f-mh78c                      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         7d2h\n  monitoring                  kube-prometheus-node-exporter-nnjzs               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         7d2h\n  monitoring                  grafana-loki-promtail-7zcb9                       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         7d2h\n  omm                         omm-ui-86cf74b685-xbtjq                           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\n  omm                         omm-gateway-67768684bb-2zw7s                      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\n  omm                         omm-monitor-view-7f7b855cd6-6h746                 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\n  omm                         omm-indicator-data-6ddfdcf8d8-8blhh               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\n  omm                         omm-alert-manage-6fdbfb964b-lqqkp                 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\n  omm                         omm-dispose-manage-5df847fc45-44vvw               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         94m\nAllocated resources:\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Total limits may be over "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" percent, i.e., overcommitted."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Resource           Requests  Limits\n  --------           --------  ------\n  cpu                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  memory             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  ephemeral-storage  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  hugepages-1Gi      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  hugepages-2Mi      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nEvents:              "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br")])]),n("p",[s._v("可以看到, omm 下的所有服务, 都已经调度到了 "),n("code",[s._v("10.8")])]),s._v(" "),n("blockquote",[n("p",[s._v("回头 "),n("code",[s._v("Docker Registry")]),s._v(" 这个坑踩过去之后, 会再记录...")])])])}),[],!1,null,null,null);n.default=e.exports}}]);