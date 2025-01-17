(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{510:function(s,a,t){s.exports=t.p+"assets/img/image-20250108160424520.15ca22ed.png"},766:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Lima 初体验")]),s._v(" "),a("h2",{attrs:{id:"安装-lima"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-lima"}},[s._v("#")]),s._v(" 安装 Lima")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n❯ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lima\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我本地环境是 aarch64 所以需要 安装 qemu 模拟 x86_64 ")]),s._v("\n❯ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" qemu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查")]),s._v("\n❯ qemu-system-x86_64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\nQEMU emulator version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.2")]),s._v(".0\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2003")]),s._v("-2024 Fabrice Bellard and the QEMU Project developers\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[s._v("下载系统镜像的文件地址: "),a("code",[s._v("~/Library/Caches/lima/download/")])]),s._v(" "),a("p",[s._v("启动虚拟机的文件地址: "),a("code",[s._v("~/.lima/")])])]),s._v(" "),a("h2",{attrs:{id:"配置网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置网络"}},[s._v("#")]),s._v(" 配置网络")]),s._v(" "),a("blockquote",[a("p",[s._v("文件路径: "),a("code",[s._v("~/.lima/_config/networks.yaml")])])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to socket_vmnet executable. Because socket_vmnet is invoked via sudo it should be")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# installed where only root can modify/replace it. This means also none of the")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parent directories can be writable by the user.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The varRun directory also must not be writable by the user because it will")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include the socket_vmnet pid file. Those will be terminated via sudo, so replacing")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the pid file would allow killing of arbitrary privileged processes. varRun")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# however MUST be writable by the daemon user.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# None of the paths segments may be symlinks, why it has to be /private/var")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# instead of /var etc.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# socketVMNet requires Lima >= 0.12 .")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("socketVMNet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/socket_vmnet/bin/socket_vmnet"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("varRun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /private/var/run/lima\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sudoers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /private/etc/sudoers.d/lima\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" everyone\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user-v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.104.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("netmask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 255.255.255.0\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user-v2 network is experimental network mode which supports all functionalities of default usernet network and also allows vm -> vm communication.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Doesn't support configuration of custom gateway; hardcoded to 192.168.5.0/24")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" shared\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.105.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dhcpEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.105.254\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("netmask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 255.255.255.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bridged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridged\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" en0\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bridged mode doesn't have a gateway; dhcp is managed by outside network")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" host\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.20.0.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dhcpEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.20.255.254\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("netmask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 255.255.0.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mova")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.30.0.9\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dhcpEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.30.255.254\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("netmask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 255.255.0.0\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("mova")]),s._v(" 为自定义配置(自用的B级网络)")])]),s._v(" "),a("h2",{attrs:{id:"配置机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置机器"}},[s._v("#")]),s._v(" 配置机器")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("os")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Linux\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vmType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qemu"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# arch: "aarch64"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# arch: "x86_64"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("images")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cloud-images.ubuntu.com/releases/24.04/release/ubuntu-24.04-server-cloudimg-amd64.img"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("arch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cloud-images.ubuntu.com/releases/24.04/release/ubuntu-24.04-server-cloudimg-arm64.img"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("arch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aarch64"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 4GiB\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20GiB\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lima")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mova\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"启动机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动机器"}},[s._v("#")]),s._v(" 启动机器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("❯ limactl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--arch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aarch64 ubuntu.yaml\n❯ limactl start master\n❯ limactl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("agent "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--arch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86_64 ubuntu.yaml\n❯ limactl start agent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("在启动命令中指定, 实例名和CPU架构, 会更灵活一点")])]),s._v(" "),a("p",[s._v("验证是否正确安装")]),s._v(" "),a("p",[a("img",{attrs:{src:t(510),alt:"image-20250108160424520"}})]),s._v(" "),a("h2",{attrs:{id:"官方模版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方模版"}},[s._v("#")]),s._v(" 官方模版")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("❯ limactl start --list-templates\nalmalinux-8\nalmalinux-9\nalmalinux\nalpine-iso\nalpine\napptainer-rootful\napptainer\narchlinux\nbuildkit\ncentos-stream-10\ncentos-stream-9\ncentos-stream\ndebian-11\ndebian-12\ndebian\ndefault\ndocker-rootful\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nexperimental/alsa\nexperimental/gentoo\nexperimental/opensuse-tumbleweed\nexperimental/rke2\nexperimental/u7s\nexperimental/vnc\nexperimental/wsl2\nfaasd\nfedora\nk3s\nk8s\nopensuse-leap\nopensuse\noraclelinux-8\noraclelinux-9\noraclelinux\npodman-rootful\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("podman")]),s._v("\nrocky-8\nrocky-9\nrocky\nubuntu-20.04\nubuntu-22.04\nubuntu-24.04\nubuntu-24.10\nubuntu-lts\nubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("blockquote",[a("p",[s._v("这个 "),a("code",[s._v("k8s")]),s._v(" 可以有呀")])]),s._v(" "),a("p",[s._v("日常使用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个虚拟机")]),s._v("\n❯ limactl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--arch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86_64 template://ubuntu-24.04\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看虚拟机列表")]),s._v("\n❯ limactl list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个虚拟机")]),s._v("\n❯ limactl start ubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个虚拟机")]),s._v("\n❯ limactl shell ubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止虚拟机")]),s._v("\n❯ limactl stop ubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除虚拟机")]),s._v("\n❯ limactl delete ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("参考文章:")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/lima-vm/lima?tab=readme-ov-file")]),s._v(" "),a("li",[s._v("https://lima-vm.io/docs/reference/limactl_start")])])])}),[],!1,null,null,null);a.default=e.exports}}]);