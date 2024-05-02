(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{520:function(v,_,t){v.exports=t.p+"assets/img/image-20210621165549259.b60add08.png"},521:function(v,_,t){v.exports=t.p+"assets/img/image-20210621151337535.824e2e99.png"},522:function(v,_,t){v.exports=t.p+"assets/img/image-20210622141318615.ecab96ed.png"},523:function(v,_,t){v.exports=t.p+"assets/img/image-20210622134950570.6a24fc12.png"},524:function(v,_,t){v.exports=t.p+"assets/img/image-20210622152404288.c9538057.png"},525:function(v,_,t){v.exports=t.p+"assets/img/image-20210622162907324.76581b7d.png"},652:function(v,_,t){"use strict";t.r(_);var r=t(4),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("p",[v._v("有位好朋友去美团面试. 他说, 被问到Redis与MySQL写一致性如何保证? 其实就是在问缓存和数据库在双写场景下, 一致性是如何保证的?")]),v._v(" "),r("p",[v._v("当我们在生产线上, 用一台服务器来"),r("strong",[v._v("提供数据服务")]),v._v("的时候, 我会遇到如下的两个问题:")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("一台服务器的性能不足以提供足够的能力服务于所有的网络请求")])]),v._v(" "),r("li",[r("p",[v._v("我们总是害怕我们的这台服务器停机, 造成服务不可用或是数据丢失")])])]),v._v(" "),r("p",[v._v("于是我们不得不对我们的服务器进行扩展, 加入更多的机器来分担性能上的问题, 以及来解决单点故障问题.")]),v._v(" "),r("p",[v._v("通常, 我们会通过两种手段来扩展我们的"),r("strong",[v._v("数据服务")]),v._v(":")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("数据分区")]),v._v(": 就是把数据分块放在不同的服务器上(如:一致性哈希等)")]),v._v(" "),r("li",[r("strong",[v._v("数据镜像")]),v._v(": 让所有的服务器都有相同的数据, 提供相当的服务")])]),v._v(" "),r("p",[v._v("对于"),r("strong",[v._v("数据分区")]),v._v("的解决方案, 我们无法解决数据丢失的问题, 单台服务器出问题时, 会有部分数据丢失. 所以, "),r("strong",[v._v("数据服务的高可用性只能通过 "),r("code",[v._v("数据镜像的方案")]),v._v(" 来完成 — 数据的冗余存储")]),v._v("(一般工业界认为比较安全的备份数应该是3份. 如: Hadoop, Dynamo)")]),v._v(" "),r("p",[r("strong",[v._v("但是, 加入更多的机器, 会让我们的数据服务变得很复杂, 尤其是跨服务器的事务处理, 也就是跨服务器的数据一致性.")])]),v._v(" "),r("p",[v._v("这个是一个很难的问题. 让我们用最经典的Use Case:  “A帐号向B帐号汇钱” 来说明一下,")]),v._v(" "),r("p",[v._v("熟悉RDBMS事务的都知道从帐号A到帐号B需要6个操作:")]),v._v(" "),r("ol",[r("li",[v._v("从A帐号中把余额读出来")]),v._v(" "),r("li",[v._v("对A帐号做减法操作")]),v._v(" "),r("li",[v._v("把结果写回A帐号中")]),v._v(" "),r("li",[v._v("从B帐号中把余额读出来")]),v._v(" "),r("li",[v._v("对B帐号做加法操作")]),v._v(" "),r("li",[v._v("把结果写回B帐号中")])]),v._v(" "),r("p",[v._v("为了数据的一致性, 这6件事, 要么都成功做完, 要么都不成功. 而且这个操作的过程中, 对A, B帐号的其它访问必需锁死, 所谓锁死就是要排除其它的读写操作, 不然会有脏数据的问题, 这就是事务. 那么, 我们在加入了更多的机器后, 这个事情会变得复杂起来:")]),v._v(" "),r("ol",[r("li",[r("p",[r("strong",[v._v("在数据分区的方案中")]),v._v(": 如果A帐号和B帐号的数据不在同一台服务器上怎么办? 我们需要一个跨机器的事务处理. 也就是说, 如果"),r("strong",[v._v("A的扣钱成功")]),v._v("了, 但"),r("strong",[v._v("B的加钱不成功")]),v._v(", 我们还要把"),r("strong",[v._v("A的操作给回滚")]),v._v("回去. 这在跨机器的情况下, 就变得比较复杂了")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("在数据镜像的方案中")]),v._v(": A帐号和B帐号间的汇款是可以在一台机器上完成的, 但是别忘了我们有多台机器存在"),r("strong",[v._v("A帐号和B帐号的副本")]),v._v(", 如果对A帐号的汇钱有两个并发操作(要汇给B和C), 这两个"),r("strong",[v._v("操作发生在不同的两台服务器")]),v._v("上怎么办? 也就是说, 在数据镜像中, 在"),r("strong",[v._v("不同的服务器上对同一个数据的写操作怎么保证其一致性")]),v._v(", 保证数据不冲突?")])])]),v._v(" "),r("p",[v._v("同时, 我们还要考虑"),r("strong",[v._v("性能")]),v._v("的因素. 如果不考虑性能的话, 事务得到保证并不困难, "),r("u",[v._v("系统慢一点")]),v._v(" 就行了. 除了考虑性能外, 我们还要考虑"),r("strong",[v._v("可用性")]),v._v(". 也就是说, 一台机器没了, 数据不丢失, 服务可由别的机器继续提供.  于是, 我们需要重点考虑下面的这么几个情况:")]),v._v(" "),r("ol",[r("li",[r("p",[r("strong",[v._v("容灾:")]),v._v(" 数据不丢、结点的Failover")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("数据的一致性:")]),v._v(" 事务处理")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("性能:")]),v._v(" 吞吐量, 响应时间")])])]),v._v(" "),r("p",[v._v("前面说过了, 要解决数据不丢, 只能通过"),r("strong",[v._v("数据冗余")]),v._v("的方法, 就算是数据分区, 每个区也需要进行数据冗余处理.")]),v._v(" "),r("p",[v._v("也就是"),r("strong",[v._v("数据副本")]),v._v(": 当出现某个节点的数据丢失时可以从副本读到, "),r("strong",[v._v("数据副本")]),v._v("是分布式系统解决数据丢失异常的"),r("u",[v._v("唯一手段")]),v._v(". 所以, 在这篇文章中, 简单起见, 我们只讨论在数据冗余情况下考虑数据的一致性和性能的问题. 简单说来:")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("要想让数据有高可用性, 就得写多份数据")])]),v._v(" "),r("li",[r("p",[v._v("写多份的问题会导致数据一致性的问题")])]),v._v(" "),r("li",[r("p",[v._v("数据一致性的问题又会引发性能问题")])])]),v._v(" "),r("h2",{attrs:{id:"一致性模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一致性模型"}},[v._v("#")]),v._v(" 一致性模型")]),v._v(" "),r("p",[v._v("说起数据一致性来说, 简单说有三种类型 (如果细分的话, 还有很多一致性模型, 如: 顺序一致性, FIFO一致性, 会话一致性, 单读一致性, 单写一致性):")]),v._v(" "),r("h3",{attrs:{id:"强一致性-strong"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#强一致性-strong"}},[v._v("#")]),v._v(" 强一致性(Strong)")]),v._v(" "),r("p",[r("strong",[v._v("强一致性模型")]),v._v(" 是最符合用户直觉的, 它要求系统写入什么, 读出来的也会是什么. 用户体验好, 但实现起来往往对系统的性能影响大")]),v._v(" "),r("blockquote",[r("p",[v._v("比如: 文件系统, RDBMS, Azure Table 都是强一致性的")])]),v._v(" "),r("h3",{attrs:{id:"弱一致性-weak"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#弱一致性-weak"}},[v._v("#")]),v._v(" 弱一致性(Weak)")]),v._v(" "),r("p",[r("strong",[v._v("弱一致性模型")]),v._v(" 约束了系统在写入成功后, 不承诺立即可以读到写入的值, 也不承诺多久之后数据能够达到一致, 但会尽可能地保证到某个时间级别(比如: 秒级别)后, 数据能够达到一致状态")]),v._v(" "),r("blockquote",[r("p",[v._v("比如: 某些Cache系统, 网络游戏其它玩家的数据和你没什么关系, VOIP这样的系统, 百度搜索引擎")])]),v._v(" "),r("h3",{attrs:{id:"最终一致性-eventually"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性-eventually"}},[v._v("#")]),v._v(" 最终一致性(Eventually)")]),v._v(" "),r("p",[r("strong",[v._v("最终一致性模型")]),v._v(" 是"),r("code",[v._v("弱一致性模型")]),v._v("的一个特例, 系统会保证在一定时间内, 能够达到一个数据一致的状态. 这里之所以将最终一致性单独提出来, 是因为它是弱一致性中非常推崇的一种一致性模型, 也是业界在大型分布式系统的数据一致性上比较推崇的模型")]),v._v(" "),r("blockquote",[r("p",[v._v("比如: DNS, 电子邮件, Amazon S3, Google搜索引擎")])]),v._v(" "),r("p",[r("strong",[v._v("Weak")]),v._v(" 和 "),r("strong",[v._v("Eventually")]),v._v(" 一般来说是异步冗余的, 而 "),r("strong",[v._v("Strong")]),v._v(" 一般来说是同步冗余的, "),r("strong",[v._v("异步")]),v._v("的通常意味着更好的性能, 但也意味着更复杂的状态控制. "),r("strong",[v._v("同步")]),v._v("意味着简单, 但也意味着性能下降")]),v._v(" "),r("h2",{attrs:{id:"master-slave"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master-slave"}},[v._v("#")]),v._v(" Master-Slave")]),v._v(" "),r("blockquote",[r("p",[v._v("主从备份")])]),v._v(" "),r("p",[v._v("Master-Slave结构. 对于这种加构, Slave一般是Master的备份. 在这样的系统中, 一般是如下设计的:")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("读写请求都由Master负责")])]),v._v(" "),r("li",[r("p",[v._v("写请求写到Master上后, 由Master同步到Slave上")])])]),v._v(" "),r("p",[v._v("从Master同步到Slave上, 你可以使用异步, 也可以使用同步, 可以使用Master来Push, 也可以使用Slave来Pull.\n通常来说是Slave来周期性的Pull, 所以, 是"),r("strong",[v._v("最终一致性.")]),v._v("\n这个设计的问题是, 如果Master在Pull周期内垮掉了, 那么会导致这个时间片内的数据丢失. 如果你不想让数据丢掉, Slave只能成为"),r("strong",[v._v("Read-Only方式")]),v._v(", 等待Master节点恢复.")]),v._v(" "),r("p",[v._v("当然, 如果你可以容忍数据丢掉的话, 你可以马上让"),r("strong",[v._v("Slave代替Master")]),v._v("工作(对于只负责计算的结点来说, 没有数据一致性和数据丢失的问题. Master-Slave的方式就可以解决单点问题了).  当然, Master Slave也可以是强一致性的. 比如: 当我们写Master的时候, Master负责先写自己, 等成功后, 再写Slave, "),r("strong",[v._v("两者都成功后返回成功")]),v._v(", 整个过程是"),r("strong",[v._v("同步")]),v._v("的. 如果写Slave失败了, 那么两种方法: 一种是标记Slave不可用报错并继续服务(Slave恢复后同步Master的数据, 可以有多个Slave, 这样少一个, 还有备份, 就像前面说的写三份那样, 另一种是回滚自己并返回写失败(注: 一般"),r("strong",[v._v("不先写Slave")]),v._v(", 因为如果写Master自己失败后, 还要回滚Slave, 此时如果回滚Slave失败, 就得手工订正数据了)")]),v._v(" "),r("p",[v._v("你可以看到, 如果Master-Slave需要做成"),r("strong",[v._v("强一致性")]),v._v("有多复杂.")]),v._v(" "),r("p",[r("img",{attrs:{src:t(520),alt:"image-20210621165549259"}})]),v._v(" "),r("blockquote",[r("p",[v._v("==主从复制的模型中, 数据可以是"),r("strong",[v._v("最终一致性")]),v._v(", 也可以是"),r("strong",[v._v("强一致性")]),v._v(". 这完全取决于业务需要.==")])]),v._v(" "),r("h2",{attrs:{id:"master-master"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master-master"}},[v._v("#")]),v._v(" Master-Master")]),v._v(" "),r("blockquote",[r("p",[v._v("多主复制")])]),v._v(" "),r("p",[v._v("Master-Master, 又叫"),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Multi-master_replication",target:"_blank",rel:"noopener noreferrer"}},[v._v("Multi-master"),r("OutboundLink")],1),v._v(". 是指一个系统存在两个或多个Master, 每个Master都提供"),r("strong",[v._v("Read-Write服务")]),v._v(". 这个模型是Master-Slave的加强版, 数据间同步一般是通过Master间的"),r("strong",[v._v("异步")]),v._v("完成, 所以是最终一致性.  Master-Master的好处是, 一台Master挂了, 别的Master可以正常做读写服务, 他和Master-Slave一样, 当数据没有被复制到别的Master上时, 数据会丢失. 很多数据库都支持Master-Master的Replication的机制.")]),v._v(" "),r("p",[v._v("另外, 如果"),r("strong",[v._v("多个"),r("code",[v._v("Master")]),v._v("对同一个数据进行修改")]),v._v("的时候, 这个模型的恶梦就出现了, 对"),r("strong",[v._v("数据间的冲突合并")]),v._v(", 这并不是一件容易的事情")]),v._v(" "),r("blockquote",[r("p",[v._v("看看Dynamo的Vector Clock的设计(记录数据的版本号和修改者)就知道这个事并不那么简单, 而且Dynamo对数据冲突这个事是交给用户自己搞的.\n就像我们的SVN源码冲突一样, 对于同一行代码的冲突, 只能交给开发者自己来处理.")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(521),alt:"image-20210621151337535"}})]),v._v(" "),r("h2",{attrs:{id:"two-three-phase-commit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#two-three-phase-commit"}},[v._v("#")]),v._v(" Two/Three Phase Commit")]),v._v(" "),r("h3",{attrs:{id:"两阶段提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两阶段提交"}},[v._v("#")]),v._v(" 两阶段提交")]),v._v(" "),r("blockquote",[r("p",[v._v("这个协议的缩写又叫2PC, 中文叫 "),r("strong",[v._v("两阶段提交")])])]),v._v(" "),r("p",[v._v("在分布式系统中, 每个节点虽然可以"),r("strong",[v._v("知晓自己")]),v._v("的操作时成功或者失败, 却无法知道"),r("strong",[v._v("其他节点")]),v._v("的操作的成功或失败")]),v._v(" "),r("p",[v._v("当一个事务跨越多个节点时, 为了保持"),r("strong",[v._v("事务的ACID特性")]),v._v(", 需要引入一个作为"),r("strong",[v._v("协调者")]),v._v("的组件来统一掌控所有节点(称作"),r("strong",[v._v("参与者")]),v._v(")的操作结果\n并最终指示这些节点是否要把操作结果进行真正的提交(比如: 将更新后的数据写入磁盘等等). 两阶段提交的算法如下:")]),v._v(" "),r("h4",{attrs:{id:"第一阶段-投票阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段-投票阶段"}},[v._v("#")]),v._v(" 第一阶段(投票阶段)")]),v._v(" "),r("ol",[r("li",[r("strong",[v._v("协调者")]),v._v("节点向"),r("strong",[v._v("所有参与者")]),v._v("节点询问是否可以执行提交操作, 并开始等待各参与者节点的响应")]),v._v(" "),r("li",[r("strong",[v._v("参与者")]),v._v("执行事务直到被要求提交为止(注意: 这时事务还没有提交). 它们分别在撤销日志和重做日志中写一个条目")]),v._v(" "),r("li",[v._v("每个参与者都会回复一条协议消息(参与者投票).\n"),r("ul",[r("li",[v._v("如果参与者的操作成功, 则会回复一条**“可以提交”**")]),v._v(" "),r("li",[v._v("如果参与者的操作失败, 则会回复一条**“拒绝提交”**")])])])]),v._v(" "),r("h4",{attrs:{id:"第二阶段-完成阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-完成阶段"}},[v._v("#")]),v._v(" 第二阶段(完成阶段)")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("如果"),r("strong",[v._v("所有的参与者")]),v._v("都回应**“可以提交”**")]),v._v(" "),r("ol",[r("li",[r("p",[r("strong",[v._v("协调者")]),v._v("向"),r("strong",[v._v("所有参与者")]),v._v("发送"),r("strong",[v._v("提交")]),v._v(" (协议消息)")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("每个参与者")]),v._v("完成操作(提交事务), 并释放事务期间持有的所有锁和资源")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("每个参与者")]),v._v("向"),r("strong",[v._v("协调者")]),v._v("发送"),r("strong",[v._v("确认")]),v._v(" (协议消息)")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("协调者")]),v._v("在收到"),r("strong",[v._v("所有确认")]),v._v("后, 结束这个Global Transaction")])])])]),v._v(" "),r("li",[r("p",[v._v("如果"),r("strong",[v._v("有一个参与者")]),v._v("回应**“拒绝提交”**")]),v._v(" "),r("ol",[r("li",[v._v("协调者向"),r("strong",[v._v("所有的参与者")]),v._v("发送**“回滚”** (协议消息)")])])])]),v._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[v._v("每个参与者使用撤消日志撤消事务, 并释放事务期间持有的资源和锁\n3. "),r("strong",[v._v("每个参与者")]),v._v("向"),r("strong",[v._v("协调者")]),v._v("发送"),r("strong",[v._v("确认")]),v._v(" (协议消息)")]),v._v(" "),r("li",[r("strong",[v._v("协调者")]),v._v("在收到"),r("strong",[v._v("所有确认")]),v._v("后, 取消这个Global Transaction")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(522),alt:"image-20210622141318615"}})]),v._v(" "),r("blockquote",[r("p",[v._v("第一阶段")]),v._v(" "),r("ol",[r("li",[r("p",[r("code",[v._v("req run")]),v._v(": 向所有参与者发送, 锁定资源 & 执行业务逻辑的请求")])]),v._v(" "),r("li",[r("p",[r("code",[v._v("vote")]),v._v(": 响应给协调者投票的结果")]),v._v(" "),r("p",[v._v("第二阶段")])]),v._v(" "),r("li",[r("p",[r("code",[v._v("decision")]),v._v(" : 向所有参与者发送, "),r("code",[v._v("commit")]),v._v(" 或  "),r("code",[v._v("fallback")]),v._v("指令")])]),v._v(" "),r("li",[r("p",[r("code",[v._v("rep")]),v._v(" : 返回给协调者, 执行结果.")])])])]),v._v(" "),r("p",[v._v("说白了就是第一阶段做Vote, 第二阶段做决定的一个算法, 可以看到2PC也是强一致性策略. 2PC与Master-Slave的强一致性策略很相似, 不过2PC更为保守一些, "),r("strong",[v._v("先尝试再提交")]),v._v(".")]),v._v(" "),r("p",[v._v("比如, 我们网上购物的下单操作在后台会有一系列的流程需要做, 如果我们一步一步地做, 就会出现这样的问题, 如果某一步做不下去了, 那么前面每一次所分配的资源需要做反向操作把他们都回收掉, 操作起来比较复杂. 现在很多处理流程(Workflow)都会借鉴2PC这个算法, 使用 "),r("code",[v._v("try -> confirm")]),v._v(" 的流程来确保整个流程的能够成功完成.")]),v._v(" "),r("p",[v._v("举个通俗的例子, 西方教堂结婚的时候, 都有这样的桥段:")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("牧师分别问新郎和新娘: 你是否愿意……不管生老病死……(询问阶段)")])]),v._v(" "),r("li",[r("p",[v._v("当新郎和新娘都回答愿意后(锁定一生的资源), 牧师就会说: 我宣布你们……(事务提交)")])])]),v._v(" "),r("p",[v._v("这是经典的一个两阶段提交的事务处理, 但是其中存在几个问题:")]),v._v(" "),r("p",[v._v("A) 参与者中有一个是同步阻塞操作, 这个事情必然会非常大地影响性能.")]),v._v(" "),r("p",[v._v("B) 另一个主要的问题是在"),r("code",[v._v("TimeOut")]),v._v("上.")]),v._v(" "),r("p",[v._v("比如:")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("如果第一阶段中, 参与者没有收到询问请求, 或是参与者的回应没有到达协调者. 那么, 需要协调者做"),r("strong",[v._v("超时处理")]),v._v(", 一旦超时, 可以当作失败, 也可以重试.")])]),v._v(" "),r("li",[r("p",[v._v("如果第二阶段中, 正式提交发出后, 如果有的参与者没有收到, 或是参与者提交/回滚后的确认信息没有返回, 一旦参与者的回应超时, 要么"),r("strong",[v._v("重试")]),v._v(", 要么把那个参与者"),r("strong",[v._v("标记为问题节点")]),v._v("剔除整个集群, 这样可以保证服务节点都是数据一致性.")])]),v._v(" "),r("li",[r("p",[v._v("糟糕的情况是, 第二阶段中, 如果参与者收不到协调者的"),r("code",[v._v("commit / fallback")]),v._v("指令, 参与者将处于**“状态未知”阶段,** 参与者完全不知道要怎么办.")])])]),v._v(" "),r("blockquote",[r("p",[v._v("比如: 如果所有的参与者完成第一阶段的回复后(可能全部yes, 可能全部no, 可能部分yes部分no), 如果"),r("strong",[v._v("协调者")]),v._v("在这个时候"),r("strong",[v._v("挂掉")]),v._v("了. 那么所有的结点完全不知道怎么办(问别的参与者都不行). 为了一致性, 要么死等协调者, 要么重发第一阶段的yes/no命令.")])]),v._v(" "),r("h3",{attrs:{id:"三阶段提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三阶段提交"}},[v._v("#")]),v._v(" 三阶段提交")]),v._v(" "),r("p",[v._v("两段提交最大的问题就是==第3项==, "),r("strong",[v._v("如果第一阶段完成后, 参与者在第二阶没有收到决策, 那么数据结点会进入==“不知所措”==的状态, 这个状态会block住整个事务")]),v._v(". 也就是说, "),r("strong",[v._v("协调者")]),v._v("对于事务的完成非常重要, 协调者的可用性是个关键.")]),v._v(" "),r("p",[v._v("因些, 我们引入三段提交, 三段提交在"),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Three-phase_commit_protocol",target:"_blank",rel:"noopener noreferrer"}},[v._v("Wikipedia"),r("OutboundLink")],1),v._v("上的描述如下, 他把二段提交的第一段Break成了两段: "),r("strong",[v._v("询问")]),v._v(", "),r("strong",[v._v("锁资源")]),v._v(", "),r("strong",[v._v("提交")]),v._v(". 三段提交的示意图如下:")]),v._v(" "),r("p",[r("img",{attrs:{src:t(523),alt:"image-20210622134950570"}})]),v._v(" "),r("p",[v._v("三段提交的核心理念是: "),r("strong",[v._v("在询问的时候并不锁定资源, 除非所有人都同意了, 才开始锁资源")]),v._v(".")]),v._v(" "),r("p",[v._v("理论上来说, 如果"),r("strong",[v._v("第一阶段")]),v._v("所有的结点返回成功, 那么有理由相信"),r("strong",[v._v("成功提交")]),v._v("的概率很大. 这样一来, 可以降低参与者的"),r("strong",[v._v("状态未知")]),v._v("的概率. 也就是说, 一旦参与者收到了"),r("strong",[v._v("准备")]),v._v(", 意味着, 他知道大家其实都同意修改了, 这一点很重要. 下面我们来看一下3PC的状态迁移图:")]),v._v(" "),r("p",[v._v("状态含义:")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("q – Query")]),v._v(": 询问")]),v._v(" "),r("li",[r("strong",[v._v("a – Abort")]),v._v(": 中止")]),v._v(" "),r("li",[r("strong",[v._v("w – Wait")]),v._v(": 等待")]),v._v(" "),r("li",[r("strong",[v._v("p – Prepare Commit")]),v._v(": 准备提交事务")]),v._v(" "),r("li",[r("strong",[v._v("c – Commit")]),v._v(": 提交事务")]),v._v(" "),r("li",[r("strong",[v._v("T - Time Out")]),v._v(": 超时的事务")]),v._v(" "),r("li",[r("strong",[v._v("F - Failure")]),v._v(": 失败的事务")]),v._v(" "),r("li",[r("strong",[v._v("F,T - Failure/Time Out")]),v._v(": 失败或超时的事务")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(524),alt:"image-20210622152404288"}})]),v._v(" "),r("p",[v._v("从上图的状态变化图我们可以从虚线(那些F,T是Failure或Timeout)看到, "),r("strong",[v._v("如果节点处在P状态(Prepare Commit)的时候发生了F/T的问题, 三段提交比两段提交的好处是, 三段提交可以继续直接把状态变成C状态(Commit), 而两段提交则不知所措")]),v._v(".")]),v._v(" "),r("p",[v._v("其实,  三段提交是一个很复杂的事情, 实现起来相当难, 而且也有一些问题.")]),v._v(" "),r("p",[v._v("看到这里, 我相信你有很多很多的问题, 你一定在思考"),r("code",[v._v("2PC/3PC")]),v._v("中各种各样的失败场景, "),r("strong",[v._v("你会发现Timeout是个非常难处理的事情, 因为网络上的Timeout在很多时候让你无所事从, 你也不知道对方是做了还是没有做. 于是你好好的一个状态机就因为Timeout成了个摆设")]),v._v(".")]),v._v(" "),r("blockquote",[r("p",[r("strong",[v._v("一个网络服务会有三种状态: 1. Success, 2. Failure, 3. Timeout.  第三个绝对是恶梦, 尤其在你需要维护状态的时候")]),v._v(".")])]),v._v(" "),r("h3",{attrs:{id:"思维题-two-generals-problem-两将军问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#思维题-two-generals-problem-两将军问题"}},[v._v("#")]),v._v(" 思维题: Two Generals Problem(两将军问题)")]),v._v(" "),r("p",[r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Two_Generals'_Problem",target:"_blank",rel:"noopener noreferrer"}},[v._v("Two Generals Problem"),r("OutboundLink")],1),v._v(" 两将军问题是这么一个思维性实验问题: 有两支军队, 它们分别有一位将军领导, 现在准备攻击一座修筑了防御工事的城市. 这两支军队都驻扎在那座城市的附近, 分占一座山头. 一道山谷把两座山分隔开来, 并且两位将军唯一的通信方式就是派各自的信使来往于山谷两边. 不幸的是, 这个山谷已经被那座城市的保卫者占领, 并且存在一种可能, 那就是任何被派出的信使通过山谷是会被捕. 请注意, 虽然两位将军已经就攻击那座城市达成共识, 但在他们各自占领山头阵地之前, 并没有就进攻时间达成共识. 两位将军必须让自己的军队同时进攻城市才能取得成功. 因此, 他们必须互相沟通, 以确定一个时间来攻击, 并同意就在那时攻击. 如果只有一个将军进行攻击, 那么这将是一个灾难性的失败.  这个思维实验就包括考虑他们如何去做这件事情. 下面是我们的思考:")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("第一位将军先发送一段消息“让我们在上午9点开始进攻”. 然而, 一旦信使被派遣, 他是否通过了山谷, 第一位将军就不得而知了. 任何一点的不确定性都会使得第一位将军攻击犹豫, 因为如果第二位将军不能在同一时刻发动攻击, 那座城市的驻军就会击退他的军队的进攻, 导致他的军对被摧毁.")])]),v._v(" "),r("li",[r("p",[v._v("知道了这一点, 第二位将军就需要发送一个确认回条: “我收到您的邮件, 并会在9点的攻击”. 但是, 如果带着确认消息的信使被抓怎么办? 所以第二位将军会犹豫自己的确认消息是否能到达.")])]),v._v(" "),r("li",[r("p",[v._v("于是, 似乎我们还要让第一位将军再发送一条确认消息 “我收到了你的确认”. 然而, 如果这位信使被抓怎么办呢?")])]),v._v(" "),r("li",[r("p",[v._v("这样一来, 是不是我们还要第二位将军发送一个“确认收到你的确认”的信息.")])])]),v._v(" "),r("p",[v._v("于是你会发现, 这事情很快就发展成为不管发送多少个确认消息, 都没有办法来保证两位将军有足够的自信自己的信使没有被敌军捕获.")]),v._v(" "),r("p",[r("img",{attrs:{src:t(525),alt:"image-20210622162907324"}})]),v._v(" "),r("p",[r("strong",[v._v("这个问题是无解的")]),v._v(". 两个将军问题和它的无解证明首先由E.A.Akkoyunlu, K.Ekanadham, R.V.Huber于1975年在《一些限制与折衷的网络通信设计》一文中发表, 就在这篇文章的第73页中一段描述两个黑帮之间的通信中被阐明. 1978年, 在Jim Gray的《数据库操作系统注意事项》一书中(从第465页开始)被命名为两个将军悖论. 作为两个将军问题的定义和无解性的证明的来源, 这一参考被广泛提及.")]),v._v(" "),r("p",[v._v("这个实验意在阐明: 试图通过建立在一个不可靠的连接上的交流来协调一项行动的隐患和设计上的巨大挑战")]),v._v(" "),r("p",[v._v("从工程上来说, 一个解决两个将军问题的实际方法是使用一个能够承受通信信道不可靠性的方案, 并不试图去消除这个不可靠性, 但要将不可靠性削减到一个可以接受的程度. 比如, 第一位将军排出了100位信使并预计他们都被捕的可能性很小. 在这种情况下, 不管第二位将军是否会攻击或者受到任何消息, 第一位将军都会进行攻击. 另外, 第一位将军可以发送一个消息流, 而第二位将军可以对其中的每一条消息发送一个确认消息, 这样如果每条消息都被接收到, 两位将军会感觉更好. 然而我们可以从证明中看出, 他们俩都不能肯定这个攻击是可以协调的. 他们没有算法可用(比如, 收到4条以上的消息就攻击)能够确保防止仅有一方攻击. 再者, 第一位将军还可以为每条消息编号, 说这是1号, 2号……直到N号. 这种方法能让第二位将军知道通信信道到底有多可靠, 并且返回合适的数量的消息来确保最后一条消息被接收到. 如果信道是可靠的话, 只要一条消息就行了, 其余的就帮不上什么忙了. 最后一条和第一条消息丢失的概率是相等的.")]),v._v(" "),r("p",[v._v("两将军问题可以扩展成更变态的"),r("strong",[v._v("拜占庭将军问题 (Byzantine Generals Problem)")]),v._v(", 其故事背景是这样的: 拜占庭位于现在土耳其的伊斯坦布尔, 是东罗马帝国的首都. 由于当时拜占庭罗马帝国国土辽阔, 为了防御目的, 因此每个军队都分隔很远, 将军与将军之间只能靠信差传消息.  在战争的时候, 拜占庭军队内所有将军必需达成一致的共识, 决定是否有赢的机会才去攻打敌人的阵营. 但是, 军队可能有叛徒和敌军间谍, 这些叛徒将军们会扰乱或左右决策的过程. 这时候, 在已知有成员谋反的情况下, 其余忠诚的将军在不受叛徒的影响下如何达成一致的协议, 这就是拜占庭将军问题.")]),v._v(" "),r("h2",{attrs:{id:"paxos算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法"}},[v._v("#")]),v._v(" Paxos算法")]),v._v(" "),r("blockquote",[r("p",[v._v("Paxos是一个共识(Consensus)算法")])]),v._v(" "),r("p",[r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Paxos_(computer_science)",target:"_blank",rel:"noopener noreferrer"}},[v._v("Wikipedia上的各种Paxos算法"),r("OutboundLink")],1),v._v("的描述非常详细, 大家可以去围观一下.")]),v._v(" "),r("p",[v._v("Paxos 算法解决的问题是在一个可能发生上述异常的分布式系统中如何就某个值达成一致, 保证不论发生以上任何异常, 都不会破坏决议的一致性. 一个典型的场景是, 在一个分布式数据库系统中, 如果各节点的初始状态一致, 每个节点都执行相同的操作序列, 那么他们最后能得到一个一致的状态.为保证每个节点执行相同的命令序列, 需要在每一条指令上执行一个「一致性算法」以保证每个节点看到的指令一致.一个通用的一致性算法可以应用在许多场景中, 是分布式计算中的重要问题.从20世纪80年代起对于一致性算法的研究就没有停止过.")]),v._v(" "),r("p",[r("strong",[v._v("Notes")]),v._v(": Paxos算法是莱斯利·兰伯特(Leslie Lamport, 就是 LaTeX 中的”La”, 此人现在在微软研究院)于1990年提出的一种基于消息传递的一致性算法.由于算法难以理解起初并没有引起人们的重视, 使Lamport在八年后1998年重新发表到ACM Transactions on Computer Systems上("),r("a",{attrs:{href:"http://research.microsoft.com/users/lamport/pubs/lamport-paxos.pdf",target:"_blank",rel:"noopener noreferrer"}},[v._v("The Part-Time Parliament"),r("OutboundLink")],1),v._v(").即便如此paxos算法还是没有得到重视, 2001年Lamport 觉得同行无法接受他的幽默感, 于是用容易接受的方法重新表述了一遍("),r("a",{attrs:{href:"http://research.microsoft.com/users/lamport/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"}},[v._v("Paxos Made Simple"),r("OutboundLink")],1),v._v(").可见Lamport对Paxos算法情有独钟.近几年Paxos算法的普遍使用也证明它在分布式一致性算法中的重要地位.2006年Google的三篇论文初现“云”的端倪, 其中的Chubby Lock服务使用Paxos作为Chubby Cell中的一致性算法, Paxos的人气从此一路狂飙.(Lamport 本人在 "),r("a",{attrs:{href:"http://research.microsoft.com/users/lamport/pubs/pubs.html#lamport-paxos",target:"_blank",rel:"noopener noreferrer"}},[v._v("他的blog 中"),r("OutboundLink")],1),v._v("描写了他用9年时间发表这个算法的前前后后)")]),v._v(" "),r("p",[v._v("注: Amazon的AWS中, 所有的云服务都基于一个ALF(Async Lock Framework)的框架实现的, 这个ALF用的就是Paxos算法. 设计者在Principle Talk里说他参考了ZooKeeper的方法, 但他用了另一种比ZooKeeper更易读的方式实现了这个算法.")]),v._v(" "),r("p",[v._v("简单说来, Paxos的目的是让整个集群的结点对某个值的变更达成一致.Paxos算法基本上来说是个民主选举的算法——大多数的决定会成个整个集群的统一决定. 任何一个点都可以提出要修改某个数据的提案, 是否通过这个提案取决于这个集群中是否有超过半数的结点同意(所以Paxos算法需要集群中的结点是单数).")]),v._v(" "),r("p",[v._v("这个算法有两个阶段(假设这个有三个结点: A, B, C):")]),v._v(" "),r("p",[r("strong",[v._v("第一阶段: Prepare阶段")])]),v._v(" "),r("p",[v._v("A把申请修改的请求Prepare Request发给所有的结点A, B, C. 注意, Paxos算法会有一个Sequence Number(你可以认为是一个提案号, 这个数不断递增, 而且是唯一的, 也就是说A和B不可能有相同的提案号), 这个提案号会和修改请求一同发出, 任何结点在“Prepare阶段”时都会拒绝其值小于当前提案号的请求.所以, 结点A在向所有结点申请修改请求的时候, 需要带一个提案号, 越新的提案, 这个提案号就越是是最大的.")]),v._v(" "),r("p",[v._v("如果接收结点收到的提案号N大于其它结点发过来的提案号, 这个结点会回应Yes(本结点上最新的被批准提案号), 并保证不接收其它"),r("code",[v._v("<N")]),v._v("的提案.这样一来, 结点上在Prepare阶段里总是会对最新的提案做承诺.")]),v._v(" "),r("p",[v._v("优化: 在上述 prepare 过程中, 如果任何一个结点发现存在一个更高编号的提案, 则需要通知 提案人, 提醒其中断这次提案.")]),v._v(" "),r("p",[r("strong",[v._v("第二阶段: Accept阶段")])]),v._v(" "),r("p",[v._v("如果提案者A收到了超过半数的结点返回的Yes, 然后他就会向所有的结点发布Accept Request(同样, 需要带上提案号N), 如果没有超过半数的话, 那就返回失败.")]),v._v(" "),r("p",[v._v("当结点们收到了Accept Request后, 如果对于接收的结点来说, n是最大的了, 那么, 它就会修改这个值, 如果发现自己有一个更大的提案号, 那么, 结点就会拒绝修改.")]),v._v(" "),r("p",[v._v("我们可以看以, 这似乎就是一个“两段提交”的优化.其实, "),r("strong",[v._v("2PC/3PC都是分布式一致性算法的残次版本, Google Chubby的作者Mike Burrows说过这个世界上只有一种一致性算法, 那就是Paxos, 其它的算法都是残次品.")])]),v._v(" "),r("p",[v._v("我们还可以看到: 对于同一个值的在不同结点的修改提案就算是在接收方被乱序收到也是没有问题的.")]),v._v(" "),r("p",[v._v("关于一些实例, 你可以看一下Wikipedia中文中的“"),r("a",{attrs:{href:"http://zh.wikipedia.org/zh/Paxos%E7%AE%97%E6%B3%95#.E5.AE.9E.E4.BE.8B",target:"_blank",rel:"noopener noreferrer"}},[v._v("Paxos样例"),r("OutboundLink")],1),v._v("”一节, 我在这里就不再多说了.对于Paxos算法中的一些异常示例, 大家可以自己推导一下.你会发现基本上来说只要保证有半数以上的结点存活, 就没有什么问题.")]),v._v(" "),r("p",[v._v("多说一下, 自从Lamport在1998年发表Paxos算法后, 对Paxos的各种改进工作就从未停止, 其中动作最大的莫过于2005年发表的"),r("a",{attrs:{href:"http://research.microsoft.com/apps/pubs/default.aspx?id=64624",target:"_blank",rel:"noopener noreferrer"}},[v._v("Fast Paxos"),r("OutboundLink")],1),v._v(".无论何种改进, 其重点依然是在消息延迟与性能、吞吐量之间作出各种权衡.为了容易地从概念上区分二者, 称前者Classic Paxos, 改进后的后者为Fast Paxos.")]),v._v(" "),r("h2",{attrs:{id:"nwr模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nwr模型"}},[v._v("#")]),v._v(" NWR模型")]),v._v(" "),r("p",[r("strong",[v._v("Amazon Dynamo的NWR模型. 这个NWR模型把CAP的选择权交给了用户, 让用户自己的选择你的CAP中的哪两个")]),v._v(".")]),v._v(" "),r("p",[v._v("所谓NWR模型. N代表N个备份, W代表要写入至少W份才认为成功, R表示至少读取R个备份. "),r("strong",[v._v("配置的时候要求W+R > N")]),v._v(".  因为W+R > N,  所以 R > N-W 这个是什么意思呢？就是读取的份数一定要比总备份数减去确保写成功的倍数的差值要大.")]),v._v(" "),r("p",[v._v("也就是说, 每次读取, 都至少读取到一个最新的版本. 从而不会读到一份旧数据. 当我们需要高可写的环境的时候, 我们可以配置W = 1 如果N=3 那么R = 3.  这个时候只要写任何节点成功就认为成功, 但是读的时候必须从所有的节点都读出数据. 如果我们要求读的高效率, 我们可以配置 W=N R=1. 这个时候任何一个节点读成功就认为成功, 但是写的时候必须写所有三个节点成功才认为成功.")]),v._v(" "),r("p",[v._v("NWR模型的一些设置会造成脏数据的问题, 因为这很明显不是像Paxos一样是一个强一致的东西, 所以, 可能每次的读写操作都不在同一个结点上, 于是会出现一些结点上的数据并不是最新版本, 但却进行了最新的操作.")]),v._v(" "),r("p",[v._v("所以, Amazon Dynamo引了数据版本的设计. 也就是说, 如果你读出来数据的版本是v1, 当你计算完成后要回填数据后, 却发现数据的版本号已经被人更新成了v2, 那么服务器就会拒绝你. 版本这个事就像“乐观锁”一样.")]),v._v(" "),r("p",[v._v("但是, 对于分布式和NWR模型来说, 版本也会有恶梦的时候——就是版本冲的问题, 比如: 我们设置了N=3 W=1, 如果A结点上接受了一个值, 版本由v1 -> v2, 但还没有来得及同步到结点B上(异步的, 应该W=1, 写一份就算成功), B结点上还是v1版本, 此时, B结点接到写请求, 按道理来说, 他需要拒绝掉, 但是他一方面并不知道别的结点已经被更新到v2, 另一方面他也无法拒绝, 因为W=1, 所以写一分就成功了. 于是, 出现了严重的版本冲突.")]),v._v(" "),r("p",[v._v("Amazon的Dynamo把版本冲突这个问题巧妙地回避掉了——版本冲这个事交给用户自己来处理.")]),v._v(" "),r("p",[v._v("于是, Dynamo引入了Vector Clock(矢量钟???)这个设计. 这个设计让每个结点各自记录自己的版本信息, 也就是说, 对于同一个数据, 需要记录两个事:")]),v._v(" "),r("ol",[r("li",[v._v("谁更新的我")]),v._v(" "),r("li",[v._v("我的版本号是什么")])]),v._v(" "),r("p",[v._v("下面, 我们来看一个操作序列:")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("一个写请求, 第一次被节点A处理了. 节点A会增加一个版本信息(A, 1). 我们把这个时候的数据记做D1(A, 1).  然后另外一个对同样key的请求还是被A处理了于是有D2(A, 2). 这个时候, D2是可以覆盖D1的, 不会有冲突产生.")])]),v._v(" "),r("li",[r("p",[v._v("现在我们假设D2传播到了所有节点(B和C), B和C收到的数据不是从客户产生的, 而是别人复制给他们的, 所以他们不产生新的版本信息, 所以现在B和C所持有的数据还是D2(A, 2). 于是A, B, C上的数据及其版本号都是一样的.")])]),v._v(" "),r("li",[r("p",[v._v("如果我们有一个新的写请求到了B节点上, 于是B节点生成数据D3(A,2; B,1), 意思是: 数据D全局版本号为3, A升了两新, B升了一次. 这不就是所谓的代码版本的log么？")])]),v._v(" "),r("li",[r("p",[v._v("如果D3没有传播到C的时候又一个请求被C处理了, 于是, 以C节点上的数据是D4(A,2; C,1).")])]),v._v(" "),r("li",[r("p",[v._v("好, 最精彩的事情来了: 如果这个时候来了一个读请求, 我们要记得, 我们的W=1 那么R=N=3, 所以R会从所有三个节点上读, 此时, 他会读到三个版本:")])])]),v._v(" "),r("ul",[r("li",[r("ul",[r("li",[v._v("A结点: D2(A,2)\n"),r("ul",[r("li",[v._v("B结点: D3(A,2;  B,1);")]),v._v(" "),r("li",[v._v("C结点: D4(A,2;  C,1)")])])])])])]),v._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[r("p",[v._v("这个时候可以判断出, D2已经是旧版本(已经包含在D3/D4中), 可以舍弃.")])]),v._v(" "),r("li",[r("p",[v._v("但是D3和D4是明显的版本冲突. 于是, 交给调用方自己去做版本冲突处理. 就像源代码版本管理一样.")])])]),v._v(" "),r("p",[v._v("很明显, 上述的Dynamo的配置用的是CAP里的A和P.")]),v._v(" "),r("blockquote",[r("p",[v._v("参考文章:")]),v._v(" "),r("ul",[r("li",[v._v("https://coolshell.cn/articles/10910.html")]),v._v(" "),r("li",[v._v("https://mp.weixin.qq.com/s/gvumWIkz8oIo6DklFPxwzQ")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);