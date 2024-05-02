(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{526:function(t,e,_){t.exports=_.p+"assets/img/image-20210609163133068.4eb8eb21.png"},527:function(t,e,_){t.exports=_.p+"assets/img/image-20210609164209875.b8803a1d.png"},528:function(t,e,_){t.exports=_.p+"assets/img/image-20210610150729211.2cee06ef.png"},529:function(t,e,_){t.exports=_.p+"assets/img/image-20210610174603184.e5f69946.png"},653:function(t,e,_){"use strict";_.r(e);var a=_(4),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近面试被问到, DB与Cache数据同步问题. 当时感觉答得不好, 就回来科普一下, 结果就颠覆了认知. 正所谓: "),a("code",[t._v("学然后知不足")]),t._v("......")]),t._v(" "),a("p",[t._v("知道的越多, 不知道的就越多")]),t._v(" "),a("h3",{attrs:{id:"固有印象里-更新缓存的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固有印象里-更新缓存的方法"}},[t._v("#")]),t._v(" 固有印象里, 更新缓存的方法")]),t._v(" "),a("blockquote",[a("p",[t._v("更新缓存数据时, "),a("strong",[t._v("先删除缓存")]),t._v(", 然后"),a("strong",[t._v("再更新数据库")]),t._v(", 而后续的"),a("strong",[t._v("读操作")]),t._v("会把数据再装载的缓存中.")])]),t._v(" "),a("p",[t._v("试想一下, 现在有两个线程的并发操作, "),a("strong",[t._v("线程A")]),t._v("修改数据库中数据, "),a("strong",[t._v("线程B")]),t._v("读取数据.")]),t._v(" "),a("p",[a("strong",[t._v("线程A")]),t._v("删除缓存后, 线程挂起, "),a("strong",[t._v("线程B")]),t._v("开始查询, 查询没有命中,  就去数据库Load并放到缓存中. 然后"),a("strong",[t._v("线程A")]),t._v("继续更新数据库.")]),t._v(" "),a("p",[t._v("于是, 缓存中的数据还是"),a("strong",[t._v("旧数据")]),t._v(", 导致缓存中的数据还是脏的. 而且还一直脏下去了.")]),t._v(" "),a("h3",{attrs:{id:"缓存更新的design-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存更新的design-pattern"}},[t._v("#")]),t._v(" 缓存更新的Design Pattern")]),t._v(" "),a("blockquote",[a("p",[t._v("更新缓存的的Design Pattern有四种：Cache aside, Read through, Write through, Write behind caching")])]),t._v(" "),a("h4",{attrs:{id:"cache-aside"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-aside"}},[t._v("#")]),t._v(" Cache Aside")]),t._v(" "),a("blockquote",[a("p",[t._v("这是最常用最常用的策略了")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("失效")]),t._v(": 读线程从Cache中取数据, 没有得到, 则从数据库中取数据, 成功后, 放到缓存中")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("命中")]),t._v(": 读线程从cache中取数据, 取到后返回")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("更新")]),t._v(": 写线程将数据存入数据库中, 成功后, 让缓存失效")])])]),t._v(" "),a("p",[a("img",{attrs:{src:_(526),alt:"image-20210609163133068"}})]),t._v(" "),a("p",[a("img",{attrs:{src:_(527),alt:"image-20210609164209875"}})]),t._v(" "),a("blockquote",[a("p",[t._v("为什么不是写完数据库后更新缓存?\n答: 主要是怕两个并发的写操作导致脏数据")]),t._v(" "),a("p",[t._v("那么, 是不是"),a("code",[t._v("Cache Aside")]),t._v("模式, 就不会有并发问题了?\n答: 不是的, 比如, 一个是读操作, 但是没有命中缓存, 然后就到数据库中取数据, 此时来了一个写操作, 写完数据库后, 让缓存失效. 然后, 之前的那个读操作再把老的数据放进去. 所以, 理论上也是会有造成脏数据的可能的.\n但是, 实际上出现的概率可能非常低. 实际上数据库的写操作会比读操作慢得多, 而且还要锁表. 而读操作必需在写操作前进入数据库操作, 而又要晚于写操作更新缓存, 所有的这些条件都具备的概率基本并不大")]),t._v(" "),a("p",[a("strong",[t._v("当然，最好还是为缓存设置上过期时间")])])]),t._v(" "),a("h4",{attrs:{id:"read-write-through"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-write-through"}},[t._v("#")]),t._v(" Read/Write Through")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("Cache Aside")]),t._v(" 套路中, 写线程和读线程, 都需要维护两个数据存储, 一个是缓存(Cache), 一个是数据库(Repository). 所以, 代码写起来比较啰嗦. 而"),a("code",[t._v("Read/Write Through")]),t._v(" 套路是把更新数据库(Repository)的操作由缓存(Cache)自己代理了.  "),a("strong",[t._v("可以理解为，应用认为后端就是一个单一的存储，而存储自己维护自己的Cache")])]),t._v(" "),a("h5",{attrs:{id:"read-through"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-through"}},[t._v("#")]),t._v(" Read Through")]),t._v(" "),a("p",[a("code",[t._v("Read Through")]),t._v(" 套路就是在查询操作中更新缓存. 也就是说, 当缓存失效的时候(过期或LRU换出), "),a("code",[t._v("Cache Aside")]),t._v(" 是由读线程负责把数据加载入缓存, 而"),a("code",[t._v("Read Through")]),t._v(" 则用缓存服务自己来加载, 从而对读线程是透明的")]),t._v(" "),a("h5",{attrs:{id:"write-through"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-through"}},[t._v("#")]),t._v(" Write Through")]),t._v(" "),a("p",[t._v("Write Through 套路和Read Through相仿，不过是在更新数据时发生。当有数据更新的时候，如果没有命中缓存，直接更新数据库，然后返回。如果命中了缓存，则更新缓存，然后再由Cache自己更新数据库")]),t._v(" "),a("p",[a("img",{attrs:{src:_(528),alt:"image-20210610150729211"}})]),t._v(" "),a("h4",{attrs:{id:"write-behind-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-behind-caching"}},[t._v("#")]),t._v(" Write Behind Caching")]),t._v(" "),a("p",[a("code",[t._v("Write Behind")]),t._v(" 又叫 "),a("code",[t._v("Write Back")]),t._v(". "),a("strong",[t._v("一些了解Linux操作系统内核的同学对Write Back应该非常熟悉, 这不就是Linux文件系统的Page Cache的算法吗?")])]),t._v(" "),a("p",[a("code",[t._v("Write Back")]),t._v(" 套路, 一句话说就是, "),a("strong",[t._v("在更新数据的时候, 只更新缓存, 不更新数据库. 而我们的缓存会异步地批量更新数据库")]),t._v(". 这个设计的好处就是让数据的I/O操作飞快无比(直接操作内存嘛), 因为是异步, "),a("code",[t._v("Write Back")]),t._v(" 还可以合并对同一个数据的多次操作, 所以对性能的提高是相当可观的")]),t._v(" "),a("p",[t._v("但带来的问题是, 数据不再是强一致性的, 而且可能会丢失(我们知道Unix/Linux非正常关机会导致数据丢失, 就是因为这个事). 在软件设计上, 我们基本上不可能做出一个没有缺陷的设计. 就像算法设计中的"),a("strong",[t._v("时间换空间")]),t._v(", "),a("strong",[t._v("空间换时间")]),t._v("一个道理. 有时候, "),a("strong",[t._v("强一致性")]),t._v("和"),a("strong",[t._v("高性能, 高可用")]),t._v(" 是有冲突的. 软件设计从来都是取舍 Trade-Off")]),t._v(" "),a("p",[a("code",[t._v("Write Back")]),t._v("实现逻辑比较复杂, 因为他需要记录有哪数据是被更新了, 需要刷到持久层上. 操作系统的 "),a("code",[t._v("Write Back")]),t._v(" 会在仅当这个Cache需要失效的时候, 才会被真正持久起来. 比如: 内存不够了, 或是进程退出了等情况. 这又叫 "),a("strong",[t._v("Lazy Write")])]),t._v(" "),a("p",[a("img",{attrs:{src:_(529),alt:"image-20210610174603184"}})]),t._v(" "),a("p",[t._v("以上, 咱们聊得都是没有考虑缓存(Redis)和持久层(MySQL)的整体事务的问题. 比如: 更新Cache成功, 更新数据库失败了怎么吗? 或是反过来呢?")]),t._v(" "),a("p",[t._v("咱们下篇文章, 就来看看这个问题 "),a("RouterLink",{attrs:{to:"/blogs/nodes/cache/node-cache_003.html"}},[t._v("Redis与MySQL保证写一致性")])],1),t._v(" "),a("blockquote",[a("p",[t._v("参考文章:")]),t._v(" "),a("ul",[a("li",[t._v("https://coolshell.cn/articles/17416.html")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);