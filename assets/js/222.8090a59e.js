(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{783:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天把系统升到了 MacOS Big Sur 11.1 版本, 结果"),a("code",[s._v("VirtualBox")]),s._v(" 不能运行了...升级后, VM也还是跑不起来....决定弃坑, 换到 "),a("code",[s._v("VMware Fusion")]),s._v(" .")]),s._v(" "),a("p",[s._v("那么问题了, 装好了系统后, 默认IP是"),a("code",[s._v("192.168.87.1")]),s._v(" 原来的IP用熟了, 就感觉这个新的很怪异...")]),s._v(" "),a("p",[s._v("改起来吧")]),s._v(" "),a("h3",{attrs:{id:"修改网卡ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改网卡ip"}},[s._v("#")]),s._v(" 修改网卡IP")]),s._v(" "),a("h5",{attrs:{id:"打开-vmware-fusion-的网卡文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开-vmware-fusion-的网卡文件"}},[s._v("#")]),s._v(" 打开 "),a("code",[s._v("VMware Fusion")]),s._v(" 的网卡文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /Library/Preferences/VMware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Fusion/networking\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-config line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("VERSION=1,0\nanswer VNET_1_DHCP yes\nanswer VNET_1_DHCP_CFG_HASH E296FFB011377971A5054508226C7F8EE89C5A7C\nanswer VNET_1_HOSTONLY_NETMASK 255.255.255.0\nanswer VNET_1_HOSTONLY_SUBNET 192.168.135.0\nanswer VNET_1_VIRTUAL_ADAPTER yes\nanswer VNET_8_DHCP no\nanswer VNET_8_DHCP_CFG_HASH 27587C2414FAA714951196A664B669ABBA39F927\nanswer VNET_8_HOSTONLY_NETMASK 255.255.255.0\nanswer VNET_8_HOSTONLY_SUBNET 10.13.144.0\nanswer VNET_8_NAT yes\nanswer VNET_8_VIRTUAL_ADAPTER yes\nadd_bridge_mapping en0 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("VNET_8")]),s._v(" 是虚拟机所使用的网卡.")])]),s._v(" "),a("h3",{attrs:{id:"修改虚拟机ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改虚拟机ip"}},[s._v("#")]),s._v(" 修改虚拟机IP")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-config line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('TYPE="Ethernet"\nPROXY_METHOD="none"\nBROWSER_ONLY="no"\nBOOTPROTO="static"\nDEFROUTE="yes"\nIPV4_FAILURE_FATAL="no"\nIPV6INIT="yes"\nIPV6_AUTOCONF="yes"\nIPV6_DEFROUTE="yes"\nIPV6_FAILURE_FATAL="no"\nIPV6_ADDR_GEN_MODE="stable-privacy"\nNAME="ens33"\nUUID="27d6aab2-22e2-454d-bdd9-6c308d4a7bf1"\nDEVICE="ens33"\nONBOOT="yes"\nIPV6_PRIVACY="noi"\nIPADDR="10.13.144.104"\nNETMASK="255.255.255.0"\nGATEWAY="10.13.144.1"\nDNS1="8.8.8.8"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);