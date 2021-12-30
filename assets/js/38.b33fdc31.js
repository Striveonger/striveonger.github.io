(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{533:function(_,t,a){_.exports=a.p+"assets/img/image-20211214000044445.60620914.png"},701:function(_,t,a){"use strict";a.r(t);var v=a(4),s=Object(v.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"一-常识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-常识"}},[_._v("#")]),_._v(" 一. 常识")]),_._v(" "),v("h3",{attrs:{id:"_1-硬盘与内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-硬盘与内存"}},[_._v("#")]),_._v(" 1. 硬盘与内存")]),_._v(" "),v("h4",{attrs:{id:"_1-1-内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内存"}},[_._v("#")]),_._v(" 1.1 内存")]),_._v(" "),v("ul",[v("li",[_._v("寻址: "),v("strong",[_._v("纳秒级")]),_._v("寻址")]),_._v(" "),v("li",[_._v("带宽: GByte/s(以DDR4的双通道举例: "),v("code",[_._v("6.4GB/s")]),_._v(")")])]),_._v(" "),v("h4",{attrs:{id:"_1-2-硬盘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-硬盘"}},[_._v("#")]),_._v(" 1.2 硬盘")]),_._v(" "),v("ul",[v("li",[_._v("寻址: "),v("strong",[_._v("毫秒级")]),_._v("寻址(固态硬盘可能会快一些, 但也在这个级别上)")]),_._v(" "),v("li",[_._v("带宽: Gbit/s(以机械硬盘为例, 查不多能到"),v("code",[_._v("120MB/s")]),_._v("左右)")])]),_._v(" "),v("blockquote",[v("p",[_._v("带宽: 单位时间内可以有多少数据流过\n时间: 秒 > 毫秒 > 微秒 > 纳秒")])]),_._v(" "),v("h4",{attrs:{id:"_1-3-io-buffer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-io-buffer"}},[_._v("#")]),_._v(" 1.3 IO Buffer")]),_._v(" "),v("p",[v("strong",[_._v("磁盘")]),_._v("包含: 磁道与扇区, 一扇区: 512Byte")]),_._v(" "),v("p",[_._v("扇区是磁盘最小的物理存储单元, 但由于操作系统无法对数目众多的扇区进行寻址, 所以操作系统就将相邻的扇区组合在一起, 形成一个簇(或"),v("strong",[_._v("块")]),_._v("), 然后再对簇进行管理. 每个簇(或"),v("strong",[_._v("块")]),_._v(")可以包括2, 4, 8, 16, 32或64个扇区. 显然, 簇是操作系统所使用的逻辑概念, 而非磁盘的物理特性.")]),_._v(" "),v("blockquote",[v("p",[_._v("Windows: 簇, Linux: 块")])]),_._v(" "),v("h5",{attrs:{id:"_1-3-1-成本问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-成本问题"}},[_._v("#")]),_._v(" 1.3.1 成本问题")]),_._v(" "),v("p",[_._v("当磁盘中都是一些小文件时, 磁盘的利用率会大大的降低. 原因如下:")]),_._v(" "),v("ul",[v("li",[_._v("即使文件只有1个字节, 该文件也会占有整个扇区.")]),_._v(" "),v("li",[_._v("操作系统为这些小文件, 也会创建索引. 文件越多, 索引越大")])]),_._v(" "),v("h3",{attrs:{id:"_2-数据存储的发展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据存储的发展"}},[_._v("#")]),_._v(" 2. 数据存储的发展")]),_._v(" "),v("h4",{attrs:{id:"_2-1-文件时代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件时代"}},[_._v("#")]),_._v(" 2.1 文件时代")]),_._v(" "),v("blockquote",[v("p",[_._v("你tm怎么不从纸带打孔机说起呀.....")])]),_._v(" "),v("p",[_._v("数据都存入文件中, 随着文件体积的增大, 检索的速度会降低. (根本原因: 还硬盘的速度瓶颈)")]),_._v(" "),v("h4",{attrs:{id:"_2-2-数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数据库"}},[_._v("#")]),_._v(" 2.2 数据库")]),_._v(" "),v("blockquote",[v("p",[_._v("分而治之的"),v("code",[_._v("DataPages")])])]),_._v(" "),v("p",[v("img",{attrs:{src:a(533),alt:"image-20211214000044445"}})]),_._v(" "),v("p",[_._v("真实数据存入DataPage中, 但是当DataPage数量增加时,")]),_._v(" "),v("p",[_._v("2.3 缓存")]),_._v(" "),v("p",[_._v("2.4 未来")]),_._v(" "),v("p",[_._v("未来IO瓶颈消除, 量子计算机普及...也该入土了吧~")]),_._v(" "),v("blockquote",[v("p",[_._v("但真是"),v("code",[_._v("从入门到入土")]),_._v("哈~\n也不知道, 像这些文字会不会留下. 但是, 这些文字注定是带有能量的. 我相信"),v("code",[_._v("能量守恒")]),_._v("..(你tm戏精上身啊~)")])])])}),[],!1,null,null,null);t.default=s.exports}}]);