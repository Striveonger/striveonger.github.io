(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{750:function(n,e,a){"use strict";a.r(e);var p=a(4),v=Object(p.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("前言\n由于个人发展的原因和工作上的变动，产生了想出来看看机会的想法。经过了一段时间的准备，5 月下旬开始出来面试，面到了 7 月上旬，如愿拿到了自己心仪公司的 offer。按照自己的习惯，将这次面试过程中的一些经验总结、心得体会记录下来，自己留个记录，也希望可以帮助到一些同学。")]),n._v(" "),a("p",[n._v("个人情况\n坐标魔都，15 年本科毕业于普通一本，毕业后就职于一家传统电信公司，17 年后就职于美团点评。")]),n._v(" "),a("p",[n._v("面试情况\n相比于 17 年，由于有了美团的背景，今年在简历这关顺利了很多，不得不感叹大厂背景真香 。")]),n._v(" "),a("p",[n._v("本着尽量少请假的原因，所以面试的公司比较少，只面了 3 家：阿里、网易、拼多多。")]),n._v(" "),a("p",[n._v("3 家公司都走完了面试流程，最后拿到了阿里和拼多多的 offer，自己还是比较满意的。")]),n._v(" "),a("p",[n._v("至于网易挂掉的原因，具体原因不是很清楚，面试发挥的还行，BOSS 面的时候可以看出对我还是比较满意，但最终没有收到 offer。")]),n._v(" "),a("p",[n._v("如果对于这三家公司的面试流程有问题的，可以在公众号上留言，能解答的我会第一时间解答。")]),n._v(" "),a("p",[n._v("4 年经验应该具备哪些技能\n首先，简单的聊一下我认为的 4 年经验左右、优秀的 Java 程序员应该具备的技能有哪些，按“专业技能”和“项目”两块，包括但不限于以下内容。")]),n._v(" "),a("p",[n._v("专业节能方面")]),n._v(" "),a("p",[n._v("基础：JDK 常用类的原理、源码、使用场景。\n设计模式：常用几种的原理、使用场景，单例、动态代理、模板、责任链等。\n数据结构：数组、链表、栈、队列、树。\n网络：TCP、HTTP、HTTPS、负载均衡算法。\n框架：Spring IoC 原理、Spring AOP 原理和使用、Spring 常用的扩展点、MyBatis 的核心流程。\n中间件：常用中间件的核心原理与最佳实践，并对其中的 1 到 2 个有深入的学习，Redis、Kafka（RocketMQ、RabbitMQ）、Dubbo、Zookeeper。\n数据库（MySQL）：索引原理、隔离级别、锁机制、分库分表、慢 SQL 定位及优化、线上问题解决。\nNetty：NIO 原理、核心组件、I/O 多路复用（epoll）、零拷贝。\nJVM：运行时数据区、垃圾回收算法、垃圾回收器（CMS、G1）、常用配置参数、线上问题定位及解决。\n稳定性保障：隔离、限流、熔断、降级等。\nLinux：基本命令的使用、快速定位和排查问题。\n分布式理论：CAP、BASE、2PC、3PC、TCC。\n项目方面")]),n._v(" "),a("p",[n._v("能独立完成一个复杂模块的需求分析、方案设计和最终落地实现。\n能不断思考，寻找更优的设计和解决方案，积极优化慢 SQL、慢服务。\n具备排查问题的能力，遇到线上问题能及时定位和修复上线，例如：数据库死锁、服务器宕机、服务器 Full GC 频繁等。\n具备难题攻关的能力，能不断解决项目遇到的挑战，能给予初级工程师技术上的指导。\n初步具备带领团队（1-3人左右）的能力，能合理分配需求，做好进度把控、风险评估、Code Review。\n严格来说，要完全做到上面这些有点难，我自己也并不具备，但是，我们可以将其视为目标，不断去努力。")]),n._v(" "),a("p",[n._v("面试常见形式\n大厂面试通常是“连环炮”的形式，举个栗子：")]),n._v(" "),a("p",[n._v("面试官：用过哪些 Map")]),n._v(" "),a("p",[n._v("我：LinkedHashMap、ConcurrentHashMap、HashMap、TreeMap")]),n._v(" "),a("p",[n._v("面试官：这四种 Map 的区别")]),n._v(" "),a("p",[n._v("我：ConcurrentHashMap 线程安全，LinkedHashMap 可以记录插入顺序和访问顺序，TreeMap 可以自定义排序，除了这几个场景，其他场景基本都可以使用 HashMap")]),n._v(" "),a("p",[n._v("面试官：ConcurrentHashMap 怎么保证线程安全")]),n._v(" "),a("p",[n._v("我：JDK 1.8 以前通过分段锁，JDK 1.8 以后通过 CAS + Synchronized")]),n._v(" "),a("p",[n._v("面试官：ConcurrentHashMap 在 JDK 1.8 前后的锁有什么区别")]),n._v(" "),a("p",[n._v("我：JDK 1.8 以前锁分段，JDK 1.8 以后锁单个节点，锁粒度降低，并发度变高")]),n._v(" "),a("p",[n._v("面试官：#%￥%……#%￥")]),n._v(" "),a("p",[n._v("我：喵喵喵~")]),n._v(" "),a("p",[n._v("这种模式的问法，其实就是想了解候选人对一个知识点的理解是仅仅停留在表面，还是真的去深入研究过。")]),n._v(" "),a("p",[n._v("面试内容\n下面介绍下一些常见的面试内容，其中的面试题不一定是我真实遇到的，有可能是从别人的面试题中收集的，也有可能是我自己觉得重要的知识点，仅供参考。")]),n._v(" "),a("p",[n._v("1、项目")]),n._v(" "),a("p",[n._v("项目对于一个 3 - 5 年经验的开发来说是非常重要的，面试官也非常看重这一块。这个经验的开发基本是各大公司的编码主力，因此面试这个年限的候选人，通常项目是很重要的一块。面试官通常会让你先自己介绍下自己参与度最高（或者最牛逼）的项目，然后从中进行提问。常见的如以下：")]),n._v(" "),a("p",[n._v("介绍下你参与度最高的项目\n画下项目的架构图\n如果核心流程处理到一半，服务器崩溃了，会怎么处理\n项目中遇到过哪些挑战或问题，怎么解决的\n项目的稳定性和可用性怎么保障\n数据安全这块怎么设计\n项目的技术选型，为什么选这些\n...")]),n._v(" "),a("p",[n._v("2、场景题")]),n._v(" "),a("p",[n._v("越到后面的面试官，越喜欢问场景题，场景题比较考验候选人平时的积累和解决问题能力。这个环节很容易挂掉一批人，特别是容易紧张的同学，很容易脑子会一片空白。场景题的核心一般是处理大数据量的问题、解决性能方面的问题。")]),n._v(" "),a("p",[n._v("场景题本质上是比较开放的，没有什么标准答案，只要自己的方案能够解决问题，能够“自圆其说”就行。")]),n._v(" "),a("p",[n._v("这个环节面试官可能会将线上真实的场景拿出来提问，我自己就遇到过。")]),n._v(" "),a("p",[n._v("3、专业技能")]),n._v(" "),a("p",[n._v("集合")]),n._v(" "),a("p",[n._v("经常用到哪些 Map\n这几种 Map 的区别\nCocurrentHashMap 怎么保证线程安全\nCocurrentHashMap 在 JDK 1.8 前后的锁有什么区别\n聊下 HashMap 的原理\nHashMap 在 Put 时，新链表节点是放在头部还是尾部\nHashMap 扩容时的流程\nHashMap 在 JDK 1.8 有什么改变\nCocurrentHashMap 在 JDK 1.8 有什么改变\nTreeMap 的原理\nMap、List、Set 分别说下你知道的线程安全类和线程不安全的类\n多线程、锁")]),n._v(" "),a("p",[n._v("线程池使用的是哪种\n线程池参数怎么配置\n线程池各个参数的作用\n线程池的参数配置要注意什么\n线程池的工作流程\nJDK 中的并发类知道哪些\nAQS 的底层原理\n介绍下悲观锁和乐观锁\n使用过哪些锁\nsynchronized 和 Lock 的区别、使用场景\nsynchronized 原理\nsynchronized 作用于静态方法、普通方法、this、Lock.class 的区别\n为什么引入偏向锁、轻量级锁，介绍下升级流程\n死锁的必要条件，如何预防死锁\n介绍下 CountDownLatch 和 CyclicBarrier\n介绍下 CAS，存在什么问题\n介绍下 ThreadLocal，存在什么问题\n网络")]),n._v(" "),a("p",[n._v("HTTPS 是怎么加密的\n普通 Hash 和一致性 Hash 原理\n一致性 Hash 的缺点\nTCP 三次握手过程，为什么需要三次握手\n为什么 TIME_WAIT 状态需要经过 2MSL 才能返回到 CLOSE 状态\nTCP 的拥塞控制\nTCP 如何解决流控、乱序、丢包问题\n为什么会出现粘包和拆包，如何解决\nSpring、Mybatis")]),n._v(" "),a("p",[n._v("Mybatis 中 # 和 $ 的区别\n怎么防止 SQL 注入\n使用 Mybatis 时，调用 DAO（Mapper）接口时是怎么调用到 SQL 的\n介绍下 Spring IoC 的流程\nBeanFactory 和 FactoryBean 的区别\nSpring 的 AOP 是怎么实现的\nSpring 的事务传播行为有哪些，讲下嵌套事务\n什么情况下对象不能被代理\nSpring 怎么解决循环依赖的问题\n要在 Spring IoC 容器构建完毕之后执行一些逻辑，怎么实现\n@Resource 和 @Autowire 的区别\n@Autowire 怎么使用名称来注入\nbean 的 init-method 属性指定的方法里用到了其他 bean 实例，会有问题吗\n@PostConstruct 修饰的方法里用到了其他 bean 实例，会有问题吗\nSpring 中，有两个 id 相同的 bean，会报错吗，如果会报错，在哪个阶段报错\nSpring 中，bean 的 class 属性指定了一个不存在的 class，会报错吗，如果会报错，在哪个阶段\nSpring 中的常见扩展点有哪些\nMySQL")]),n._v(" "),a("p",[n._v("MySQL 索引的数据结构\n为什么使用 B+ 树，与其他索引相比有什么优点\n各种索引之间的区别\nB+ 树在进行范围查找时怎么处理\nMySQL 索引叶子节点存放的是什么\n联合索引（复合索引）的底层实现\nMySQL 如何锁住一行数据\nSELECT 语句能加互斥锁吗\n多个事务同时对一行数据进行 SELECT FOR UPDATE 会阻塞还是异常\nMySQL 使用的版本和执行引擎\nMySQL 不同执行引擎的区别\nMySQL 的事务隔离级别\nMySQL 的可重复读是怎么实现的\nMySQL 是否会出现幻读\nMySQL 的 gap 锁\nMySQL 的主从同步原理\n分库分表的实现方案\n分布式唯一 ID 方案\n如何优化慢查询\nexplain 中每个字段的意思\nexplain 中的 type 字段有哪些常见的值\nexplain 中你通常关注哪些字段，为什么\nJVM")]),n._v(" "),a("p",[n._v("运行时数据区\n服务器使用的什么垃圾收集器\nCMS 垃圾收集的原理\nG1 垃圾收集的特点，为什么低延迟\n有哪些垃圾回收算法，优缺点\n哪些对象可以作为 GC Roots\n有哪些类加载器\n双亲委派模式，哪些场景是打破双亲委派模式\n线上服务器出现频繁 Full GC，怎么排查\n定位问题常用哪些命令\n介绍下 JVM 调优的过程\nKafka")]),n._v(" "),a("p",[n._v("为什么使用 Kafka\n介绍下 Kafka 的各个组件\n如何保证写入 Kafka 的数据不丢失\n如何保证从 Kafka 消费的数据不丢失\nKafka 为什么性能这么高\n零拷贝技术使用哪个方法实现\nJava 中也有类似的零拷贝技术，是哪个方法\nKafka 怎么保证消息的顺序消费\nKafka 怎么避免重复消费\n什么是 HighWatermark 和 LEO\n什么是 ISR，为什么需要引入 ISR\nRedis")]),n._v(" "),a("p",[n._v("项目中使用的 Redis 版本\nRedis 在项目中的使用场景\nRedis 怎么保证高可用\nRedis 的选举流程\nRedis 和 Memcache 的区别\nRedis 的集群模式\nRedis 集群要增加分片，槽的迁移怎么保证无损\nRedis 分布式锁的实现\nRedis 删除过期键的策略\nRedis 的内存淘汰策略\nRedis 的 Hash 对象底层结构\nRedis 中 Hash 对象的扩容流程\nRedis 的 Hash 对象的扩容流程在数据量大的时候会有什么问题吗\nRedis 的持久化机制有哪几种\nRDB 和 AOF 的实现原理、优缺点\nAOF 重写的过程\n哨兵模式的原理\n使用缓存时，先操作数据库还是先操作缓存\n为什么是让缓存失效，而不是更新缓存\n缓存穿透、缓存击穿、缓存雪崩\n更新缓存的几种设计模式\nZookeeper")]),n._v(" "),a("p",[n._v("Zookeeper 的使用场景\nZookeeper 怎么实现分布式锁\nZookeeper 怎么保证数据的一致性\nZAB 协议的原理\nZookeeper 遵循 CAP 中的哪些\nZookeeper 和 Eureka 的区别\nZookeeper 的 Leader 选举\nObserver 的作用\nLeader 发送了 commit 消息，但是所有的 follower 都没有收到这条消息，Leader 就挂了，后续会怎么处理\n分布式")]),n._v(" "),a("p",[n._v("CAP 理论\nBASE 理论\n分布式事务 2PC 和 TCC 的原理\nTCC 在 cancel 阶段如果出现失败怎么处理\nPaxos 算法、Raft 算法\n4、Hr 面")]),n._v(" "),a("p",[n._v("如果你一路过五关斩六将，最终来到了 Hr 面，那么恭喜你，你已经离 offer 非常非常近了。可以开始畅想自己升职加薪，当上总经理，出任 CEO，迎娶白富美，走上人生巅峰的场景了。")]),n._v(" "),a("p",[n._v("Hr 面主要是了解候选人的一些通用素质，经常会问的问题如下：")]),n._v(" "),a("p",[n._v("介绍下自己投入最多的项目（当时我就惊了，Hr 也开始问项目了）\n离职的原因\n当前的薪资、绩效\n当前在面试的其他公司的情况\n平时有没有学习的习惯，怎么学习的，现在在学习什么\n未来的规划\n关于这些问题，没有什么标准答案，但是很重要的原则是，在整个过程中要保持积极向上的态度，不能有负面的情绪。")]),n._v(" "),a("p",[n._v("关于当前薪资的问题，由于诸多的原因，可能有些人会想着稍微多报一点，对于这种做法我持中立态度，但是要把握好度，毕竟大厂基本都有背景调查。大厂对于诚信问题一般是零容忍，而且可能会拉黑名单，进黑名单意味着你再也无缘这家公司了。")]),n._v(" "),a("p",[n._v("一些经验心得\n先挑几个小公司找下面试感觉，太久没面，需要找找面试的感觉，我自己一开始就面的不太好，就很慌张 。\n面试时紧张是正常的，但是不要过于紧张，如果面试官问完你大脑瞬间一片空白，你可以跟面试官说自己要思考下，然后回答的时候语速可以慢点，但是要条理清晰。\n在面试的过程中回答面试官问题是一方面；另一方面，你要在回答的过程中让面试官感受到你身上一些优秀的特质，例如：有潜力、很灵活、热爱学习、学习能力强、解决问题能力强、基础扎实等等。这些特质都会影响面试官对你的评价。\n平时项目中遇到难题要积极去解决，解决问题的过程能让人快速成长，并且解决的问题可能会成为你面试时的亮点，特别是对于那些项目没什么亮点的。\n准备项目时，挑几个自己做过最牛逼的功能、或者解决过最有挑战的问题，并且要对这些内容理解的非常透彻，不能在给面试官介绍的时候“支支吾吾”。\n框架也好、中间件也好，必须要有几个特别深入研究过的，也就是说你除了“广度”之外，还必须在某些方面有足够的“深度”。面试时经常碰到的问题是：你对哪个框架或中间件理解的最深。然后面试官会在这个方向上一直问下去，如果你很多东西只是看了个大概，在这边就很有可能会被问倒。\n自己讲出来的每个功能点、知识点，都要做好“被挑战”的心里准备，因此对于每个功能点、知识点都要多思考。\n如果问的问题是线上实际的场景，有时候面试官会给出他们当前线上的解决方案，如果你能在这个时候给出一些自己的思考和观点，可能会给面试官留下不错的印象。\n判断自己是否已经准备好的一个比较简单粗暴的方法：自己是否能将看到的面试题回答个 9 成左右，例如本文上面“专业技能”列举的这些题目。\n如果你是真想跳槽，或者说你已经裸辞了，那么在收到电子 offer 前都不要停止面试，即使收到口头 offer 也不稳，特别是在这个寒冬。\n在平时工作中多思考，无论是写代码还是方案设计，多思考更优的解决方案。特别是工作年限越久之后，思考对于我们的职业发展越重要。\n面试前的准备非常重要，但更重要的是平时工作的积累，4 年经验问的问题很多是无法通过临时准备的，很多都是需要你不断去积累，才能有好的方案。\n专注于自身的成长，不要轻易受到别人的影响，只要你不断的积累，总有一天你也能成为你眼中的那些大神。\n学如逆水行舟，不进则退。不要停下学习的脚步，特别是趁着自己还年轻，趁着自己还是个单身狗的时候，逼自己一把，将来的你一定会感激现在拼命的自己。\n程序员是一份很单纯的工作，不需要搞什么花里胡哨的，只要你付出努力了，你通常就能收获回报。\n对于没有大厂背景，并且处于传统行业（就如 2 年前的我），想直接进入大厂比较难，除非你像我一样踩了狗屎运，但是这种几率不大，我觉得比较现实的途径是先找一个互联网独角兽沉淀一段时间。\n大公司的部门非常多，各部门的招聘通常都是独立的，如果想进大公司可以多投，每个部门的需求紧张度不同，如果碰到急需招人的，可能就是一个非常好的机会。\n大公司的面试通常会有存档，面试官可能会看到你之前的面试评价。如果你经常一轮游，肯定会给面试官不好的印象。因此请做好准备再去面试，不要轻易浪费机会。\n2019 年互联网行业的行情不太好，也有可能接下去会一直这样，特别是对于没有大厂背景的同学来说，所以请记住一个很重要的原则：不要裸辞。")]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("版权声明：本文为CSDN博主「Java数据搬运工」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/weixin_50666791/article/details/109777728")])])}),[],!1,null,null,null);e.default=v.exports}}]);