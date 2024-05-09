(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{467:function(s,t,e){s.exports=e.p+"assets/img/image-20210809191919144.7e9aa27f.png"},468:function(s,t,e){s.exports=e.p+"assets/img/image-20210809202021482.b492bb91.png"},644:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("PostgreSQL 的分库分表方案")]),s._v(" "),t("h2",{attrs:{id:"分库分表的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分库分表的理解"}},[s._v("#")]),s._v(" 分库分表的理解")]),s._v(" "),t("h4",{attrs:{id:"什么时候需要考虑做数据切分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要考虑做数据切分"}},[s._v("#")]),s._v(" 什么时候需要考虑做数据切分")]),s._v(" "),t("h5",{attrs:{id:"_1、能不切分尽量不要切分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、能不切分尽量不要切分"}},[s._v("#")]),s._v(" 1、能不切分尽量不要切分")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('并不是所有表都需要进行切分，主要还是看数据的增长速度。切分后会在某种程度上提升业务的复杂度，数据库除了承载数据的存储和查询外，协助业务更好的实现需求也是其重要工作之一。不到万不得已不用轻易使用分库分表这个大招，避免"过度设计"和"过早优化"。分库分表之前，不要为分而分，先尽力去做力所能及的事情，例如：升级硬件、升级网络、读写分离、索引优化等等。当数据量达到单表的瓶颈时候，再考虑分库分表。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"_2、数据量过大，正常运维影响业务访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、数据量过大，正常运维影响业务访问"}},[s._v("#")]),s._v(" 2、数据量过大，正常运维影响业务访问")]),s._v(" "),t("p",[s._v("这里说的运维，指：")]),s._v(" "),t("ol",[t("li",[s._v("对数据库备份，如果单表太大，备份时需要大量的磁盘IO和网络IO。例如1T的数据，网络传输占50MB时候，需要20000秒才能传输完毕，整个过程的风险都是比较高的")]),s._v(" "),t("li",[s._v("对一个很大的表进行DDL修改时，MySQL会锁住全表，这个时间会很长，这段时间业务不能访问此表，影响很大。如果使用pt-online-schema-change，使用过程中会创建触发器和影子表，也需要很长的时间。在此操作过程中，都算为风险时间。将数据表拆分，总量减少，有助于降低这个风险。")]),s._v(" "),t("li",[s._v("大表会经常访问与更新，就更有可能出现锁等待。将数据切分，用空间换时间，变相降低访问压力")])]),s._v(" "),t("h5",{attrs:{id:"_3、随着业务发展，需要对某些字段垂直拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、随着业务发展，需要对某些字段垂直拆分"}},[s._v("#")]),s._v(" 3、随着业务发展，需要对某些字段垂直拆分")]),s._v(" "),t("p",[s._v("举个例子，假如项目一开始设计的用户表如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("id bigint #用户的ID\n\nname varchar #用户的名字\n\nlast_login_time datetime #最近登录时间\n\npersonal_info text #私人信息\n\n….. #其他信息字段\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("在项目初始阶段，这种设计是满足简单的业务需求的，也方便快速迭代开发。而当业务快速发展时，用户量从10w激增到10亿，用户非常的活跃，每次登录会更新 last_login_name 字段，使得 user 表被不断update，压力很大。而其他字段：id, name, personal_info 是不变的或很少更新的，此时在业务角度，就要将 last_login_time 拆分出去，新建一个 user_time 表。")]),s._v(" "),t("li",[s._v("personal_info 属性是更新和查询频率较低的，并且text字段占据了太多的空间。这时候，就要对此垂直拆分出 user_ext 表了。")])]),s._v(" "),t("h5",{attrs:{id:"_4、数据量快速增长"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、数据量快速增长"}},[s._v("#")]),s._v(" 4、数据量快速增长")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("随着业务的快速发展，单表中的数据量会持续增长，当性能接近瓶颈时，就需要考虑水平切分，做分库分表了。此时一定要选择合适的切分规则，提前预估好数据容量\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"_5、安全性和可用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、安全性和可用性"}},[s._v("#")]),s._v(" 5、安全性和可用性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("鸡蛋不要放在一个篮子里。在业务层面上垂直切分，将不相关的业务的数据库分隔，因为每个业务的数据量、访问量都不同，不能因为一个业务把数据库搞挂而牵连到其他业务。利用水平切分，当一个数据库出现问题时，不会影响到100%的用户，每个库只承担业务的一部分数据，这样整体的可用性就能提高。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"_6、索引效率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、索引效率"}},[s._v("#")]),s._v(" 6、索引效率")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("随着数据量的增加，通过辅助索引查找的数据越来越多，大部分是需要进行回表操作，不能直接通过辅助索引找到数据，当数据量非常大时，回表查找将会消耗大量的时间，由于MySQL查询优化器是基于cost代价模型来设计的，执行优化器会选择走全表扫描获取数据。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参考链接：")]),s._v(" "),t("p",[s._v("https://www.cnblogs.com/butterfly100/p/9034281.html")]),s._v(" "),t("p",[s._v("分库分表插件:")]),s._v(" "),t("ul",[t("li",[t("p",[t("s",[s._v("HybridDB for P")])]),s._v(" "),t("blockquote",[t("p",[s._v("这tm云数据库")])]),s._v(" "),t("ul",[t("li",[s._v("基于数据库的ACID标准设计，是一个整体，支持全局事务。支持全局一致性")]),s._v(" "),t("li",[s._v("任意列JOIN，由于HDB PG数据节点直接可以重分布数据，不需要走MASTER节点，因此，不需要维表，就可以实现任意列的JOIN，GROUP BY，DISTINCT等")]),s._v(" "),t("li",[s._v("复杂查询，核心是MASTER节点的分布式执行计划，MASTER节点收到用户请求后，生成分布式执行计划，并下发给计算节点并行执行。")])])]),s._v(" "),t("li",[t("p",[t("s",[s._v("citus")])]),s._v(" "),t("ul",[t("li",[s._v("不支持分布式事务")])])]),s._v(" "),t("li",[t("p",[t("s",[s._v("Postgres-x2")])]),s._v(" "),t("blockquote",[t("p",[s._v("以修改PostgreSQL代码的方式, 实现分库分表的策略…现在版本停留在了…9.3版本.")])]),s._v(" "),t("ul",[t("li",[s._v("支持分布式事务")]),s._v(" "),t("li",[s._v("可以把datanode通过standby的方式做高可用.")]),s._v(" "),t("li",[s._v("https://github.com/postgres-x2/postgres-x2/releases/tag/XC1_2_1_PG9_3")]),s._v(" "),t("li",[s._v("最新版本, 支持到PostgreSQL 9.3….")])])]),s._v(" "),t("li",[t("p",[t("s",[s._v("MyCat")])]),s._v(" "),t("blockquote",[t("p",[s._v("社区不太活跃了…一开始基于Alibaba的Cobar")])]),s._v(" "),t("ul",[t("li",[s._v("我想试试这个….")]),s._v(" "),t("li",[s._v("http://www.mycat.org.cn/document/mycat-definitive-guide.pdf")]),s._v(" "),t("li",[s._v("https://github.com/MyCATApache/Mycat-Server")])])]),s._v(" "),t("li",[t("p",[s._v("Sharding-JDBC/Proxy")]),s._v(" "),t("blockquote",[t("p",[s._v("当当开源的")])])])]),s._v(" "),t("p",[s._v("开始我的尝试")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("安装postgresql")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run --name PostgresSQL -e POSTGRES_PASSWORD=123456 -d postgres:13\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("绑票sasf")])])]),s._v(" "),t("p",[t("img",{attrs:{src:e(467),alt:"image-20210809191919144"}})]),s._v(" "),t("h2",{attrs:{id:"wal-write-ahead-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wal-write-ahead-logging"}},[s._v("#")]),s._v(" WAL (Write Ahead Logging)")]),s._v(" "),t("p",[s._v("https://www.postgresql.org/docs/current/wal-intro.html")]),s._v(" "),t("p",[s._v("https://www.postgresql.org/docs/13/continuous-archiving.html#BACKUP-PITR-RECOVERY")]),s._v(" "),t("p",[s._v("从抽象意义上讲，正在运行的PostgreSQL系统会产生无限长的 WAL 记录序列。系统将该序列物理地划分为 WAL"),t("em",[s._v("段文件")]),s._v("，每个"),t("em",[s._v("段文件")]),s._v("通常为 16MB（尽管在initdb期间可以更改段大小）。段文件被赋予数字名称，以反映它们在抽象 WAL 序列中的位置。当不使用 WAL 归档时，系统通常只创建几个段文件，然后通过将不再需要的段文件重命名为更高的段号来“回收”它们。假设内容在最后一个检查点之前的段文件不再感兴趣并且可以回收。")]),s._v(" "),t("p",[s._v("在归档 WAL 数据时，我们需要在每个段文件被填充后捕获其内容，并在段文件被回收以供重用之前将该数据保存在某处。根据应用程序和可用的硬件，可能有许多不同的“将数据保存在某处”的方法：我们可以将段文件复制到另一台机器上的 NFS 挂载目录，将它们写入磁带驱动器（确保您有一种识别每个文件的原始名称的方法），或者将它们组合在一起并将它们刻录到 CD 上，或者完全采用其他方式。为了给数据库管理员提供灵活性，PostgreSQL尽量不对归档将如何进行做任何假设。相反，PostgreSQL让管理员指定要执行的 shell 命令，以将完成的段文件复制到它需要去的任何地方。命令可以像 a 一样简单"),t("code",[s._v("cp")]),s._v("，也可以调用复杂的 shell 脚本——这完全取决于您。")]),s._v(" "),t("p",[s._v("要启用 WAL 归档，请将"),t("a",{attrs:{href:"https://www.postgresql.org/docs/13/runtime-config-wal.html#GUC-WAL-LEVEL",target:"_blank",rel:"noopener noreferrer"}},[s._v("wal_level"),t("OutboundLink")],1),s._v("配置参数设置为"),t("code",[s._v("replica")]),s._v("或更高，将"),t("a",{attrs:{href:"https://www.postgresql.org/docs/13/runtime-config-wal.html#GUC-ARCHIVE-MODE",target:"_blank",rel:"noopener noreferrer"}},[s._v("archive_mode 设置"),t("OutboundLink")],1),s._v("为"),t("code",[s._v("on")]),s._v("，并在"),t("a",{attrs:{href:"https://www.postgresql.org/docs/13/runtime-config-wal.html#GUC-ARCHIVE-COMMAND",target:"_blank",rel:"noopener noreferrer"}},[s._v("archive_command"),t("OutboundLink")],1),s._v("配置参数中指定要使用的 shell 命令。在实践中，这些设置将始终放置在"),t("code",[s._v("postgresql.conf")]),s._v("文件中。在"),t("code",[s._v("archive_command")]),s._v(","),t("code",[s._v("%p")]),s._v("替换为要存档的文件的路径名，而"),t("code",[s._v("%f")]),s._v("仅替换为文件名。（路径名相对于当前工作目录，即集群的数据目录。）"),t("code",[s._v("%%")]),s._v("如果需要"),t("code",[s._v("%")]),s._v("在命令中嵌入实际字符，请使用。最简单有用的命令是这样的：")]),s._v(" "),t("p",[t("img",{attrs:{src:e(468),alt:"image-20210809202021482"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);