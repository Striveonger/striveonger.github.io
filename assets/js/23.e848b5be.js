(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{493:function(v,_,t){v.exports=t.p+"assets/img/image-20210305155519489.1ac27b45.png"},584:function(v,_,t){"use strict";t.r(_);var a=t(4),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("SpringCloud 学习笔记,  第一章 基础知识")]),v._v(" "),a("h3",{attrs:{id:"一-什么是微服务架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是微服务架构"}},[v._v("#")]),v._v(" 一.  什么是微服务架构")]),v._v(" "),a("p",[v._v("間单地说, 微服务是系统架构上的一种设计风格. 它的主旨是将一个原本独立的系统拆分成多个小型服务, 这些小型服务都在各自独立的进程中运行, 服务之间通过基于HTTP的 RESTful api进行通信协作.\n被拆分成的每一个小型服务都围绕着系统中的某一项或一些耦合度较高的业务功能进行构建, 并且每个服务都维护着自身的数据存储, 业务开发自动化测试案例以及独立部署机制.\n由于有了轻量级的通信协作基础, 所以这些微服务可以使用不同的语言来编写.")]),v._v(" "),a("h3",{attrs:{id:"二-微服务与单体系统的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-微服务与单体系统的区别"}},[v._v("#")]),v._v(" 二. 微服务与单体系统的区别")]),v._v(" "),a("p",[v._v("在项目之初, 我们通常会将需求分为三个主要部分:")]),v._v(" "),a("ul",[a("li",[v._v("数据库")]),v._v(" "),a("li",[v._v("服务端处理")]),v._v(" "),a("li",[v._v("前端展现")])]),v._v(" "),a("p",[v._v("在业务发展初期,由于所有的业务逻辑在一个应用中, 开发, 测试, 部署都还比较容易且方便。但是随着企业的发展系统不断的扩大需求, 使得应用越来越臃肿.\n由于单体系统部署在一个进程中, 往往我们修改一个小功能, 都会影响其他功能的正常运行.\n单体应用的中功能模块的使用场景, 并发量, 对资源的消耗也是各不相同.\n相对于单体系统而言, 微服务架构的系统, 各服务在自己的进程中, 对资源的调度, 只需要考虑本服务的就可以. 相对而言会更加灵活的分配资源.")]),v._v(" "),a("h3",{attrs:{id:"三-实施微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-实施微服务"}},[v._v("#")]),v._v(" 三. 实施微服务")]),v._v(" "),a("h4",{attrs:{id:"运维的新挑战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运维的新挑战"}},[v._v("#")]),v._v(" 运维的新挑战")]),v._v(" "),a("p",[v._v("在微服务架构中, 需要维护的进程数会大大增加. 将这些进程编排和组织起来不是一件容易的事. 运维过程需要更多的自动化. 需要运维人员具备一定的开发能力.")]),v._v(" "),a("h4",{attrs:{id:"接口的一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口的一致性"}},[v._v("#")]),v._v(" 接口的一致性")]),v._v(" "),a("p",[v._v("业务的依赖关系不会变. 只不过从单体应用的代码依赖, 变成了服务间的通信依赖")]),v._v(" "),a("p",[v._v("我们需要更加完善的接口和版本管理, 严格遵循 开闭原则.")]),v._v(" "),a("p",[v._v("各服务的自动化部署")]),v._v(" "),a("h4",{attrs:{id:"分布式的复杂性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式的复杂性"}},[v._v("#")]),v._v(" 分布式的复杂性")]),v._v(" "),a("p",[v._v("网络延迟，分布式事务，权限验证，异步消息推送等微服务架构下的问题")]),v._v(" "),a("h3",{attrs:{id:"四-微服务架构的九大特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-微服务架构的九大特征"}},[v._v("#")]),v._v(" 四. 微服务架构的九大特征")]),v._v(" "),a("h4",{attrs:{id:"服务组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务组件化"}},[v._v("#")]),v._v(" 服务组件化")]),v._v(" "),a("p",[v._v("在微服务架构中, 需要我们对服务进行组件化分解. 服务是一种进程外的组件, 它通过HTTP等通信协议进行协作,而不是像传统组件那样以嵌入的方式协同工作。每一个服务都独立开发、部署,可以有效避免一个服务的修改引起整个系统的重新部署")]),v._v(" "),a("p",[v._v("各服务以组件的形式嵌入到整套系统中，需要更换维护时可以随时更替。")]),v._v(" "),a("blockquote",[a("p",[v._v("业务组件化, 各组件运行在独立进程中.")])]),v._v(" "),a("h4",{attrs:{id:"以业务组织团队"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以业务组织团队"}},[v._v("#")]),v._v(" 以业务组织团队")]),v._v(" "),a("p",[v._v("每个服务组件, 都有自己的开发团队(包括开发, 运维, 产品, 测试), 团队拥有独立部署, 独立开发维护的能力.\n按业务线的方式进行拆分, 一方面可以有效减少服务内部修改所产生的内耗另一方面, 团队边界可以变得更为清晰.")]),v._v(" "),a("blockquote",[a("p",[v._v("用业务来划分团队")])]),v._v(" "),a("h4",{attrs:{id:"做-产品-的态度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做-产品-的态度"}},[v._v("#")]),v._v(" 做 "),a("code",[v._v("产品")]),v._v(" 的态度")]),v._v(" "),a("p",[v._v("每个小团队都应该以做产品的方式, 对其产品的整个生命周期负责. 而不是以项目的模式, 以完成开发与交付并将成果交接给维护者为最终目标.")]),v._v(" "),a("p",[v._v('开发团队通过了解服务在具体生产环境中的情况, 可以增加他们对具体业务的理解我们需要用做"产品"的态度来对待每一个微服务, 持续关注服务的运作情况, 并不断分析以帮助用户来改善业务功能.')]),v._v(" "),a("blockquote",[a("p",[v._v("每个服务的背后, 都有完整的开发团队")])]),v._v(" "),a("h4",{attrs:{id:"智能端点与哑管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能端点与哑管道"}},[v._v("#")]),v._v(" 智能端点与哑管道")]),v._v(" "),a("p",[v._v("在单体应用中, 组件间直接通过函数调用的方式进行交互协作. 而在微服务架构中由于服务不在一个进程中, 组件间的通信模式发生了改变, 所以我们需要更粗粒度的通信协议。")]),v._v(" "),a("p",[v._v("通常会使用以下两种服务调用方式:")]),v._v(" "),a("ul",[a("li",[v._v("使用 HTTP的RESTful API或轻量级的消息发送协议, 实现消息传递与服务调用的触发.")]),v._v(" "),a("li",[v._v("通过轻量给消息总线上传递消息(类似 RabbitMQ等一些提供可靠异步消息的组件).")])]),v._v(" "),a("p",[a("img",{attrs:{src:t(493),alt:"image-20210305155519489"}})]),v._v(" "),a("blockquote",[a("p",[v._v("服务间利用 "),a("code",[v._v("弱连接")]),v._v(" 进行通讯")])]),v._v(" "),a("h4",{attrs:{id:"去中心化治理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去中心化治理"}},[v._v("#")]),v._v(" 去中心化治理")]),v._v(" "),a("p",[v._v("在实施微服务架构时, 通过采用轻量级的契约定义接口. 使得我们对于服务本身的具体技术平台不再那么敏感,这样整个微服务架构系统中的各个组件就能针对其不同的业务特点选择不同的技术平台, 终于不会出现杀鸡用牛刀或是杀牛用指甲钳的尴尬处境了.")]),v._v(" "),a("p",[v._v("不是每一个问题都是钉子, 不是每一个解决方案都是锤子")]),v._v(" "),a("blockquote",[a("p",[v._v("适合的才是最好的.")])]),v._v(" "),a("h4",{attrs:{id:"去中心化管理数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去中心化管理数据"}},[v._v("#")]),v._v(" 去中心化管理数据")]),v._v(" "),a("p",[v._v("我们在实施微服务架构时, 都希望让每一个服务来管理其自有的数据库, 这就是数据管理的去中心化.")]),v._v(" "),a("p",[v._v("在去中心化过程中, 虽然数据管理的去中心化可以让数据管理更加细致化, 通过采用更合适的技术可让数据存储和性能达到最优. 但是,由于数据存储于不同的数据库实例中后,数据一致性也成为微服务架构中亟待解决的问题之一.")]),v._v(" "),a("p",[v._v("分布式事务本身的实现难度就非常大,所以在微服务架构中, 我们更强调在各服务之间进行 "),a("code",[v._v("无事务")]),v._v(" 的调用,而对于数据一致性, 只要求数据在最后的处理状态是一致的即可. 若在过程中发现错误, 通过 "),a("strong",[v._v("补偿机制")]),v._v(" 来进行处理使得错误数据能够达到最终的一致性.")]),v._v(" "),a("blockquote",[a("p",[v._v("数据补偿机制, 来完善数据一致性与准确性")])]),v._v(" "),a("h4",{attrs:{id:"基础设施自动化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础设施自动化"}},[v._v("#")]),v._v(" 基础设施自动化")]),v._v(" "),a("p",[v._v("我们在实施微服务架构时, 数据库, 应用程序的个头虽然都变小了, 但是因为拆分的原因, 数量成倍增长. 这使得运维人员需要关注的内容也成倍增长,并且操作性任务也会成倍增长.")]),v._v(" "),a("p",[v._v("所以,在微服务架构中, 务必从一开始就构建起  "),a("code",[v._v("持续交付")]),v._v("  平台来支撑整个实施过程,该平台需要两大内容:")]),v._v(" "),a("ul",[a("li",[v._v("自动化测试: 只可能地获得对正在运行的软件的信心")]),v._v(" "),a("li",[v._v("自动化部署: 解放烦琐枯燥的重复操作以及对多环境的配置管理")])]),v._v(" "),a("blockquote",[a("p",[v._v("自动化部署与测试")])]),v._v(" "),a("h4",{attrs:{id:"容错设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错设计"}},[v._v("#")]),v._v(" 容错设计")]),v._v(" "),a("p",[v._v("在单体应用中, 一般不存在单个组件故障而其他部件还在运行的情况, 通常是一挂全挂。而在微服务架构中,由于服务都运行在独立的进程中, 所以存在部分服务出现故障而其他服务正常运行的情况")]),v._v(" "),a("p",[v._v("比如: 当正常运作的  "),a("code",[v._v("服务B")]),v._v("  调用到故障  "),a("code",[v._v("服务A")]),v._v("  时,因故障  "),a("code",[v._v("服务A")]),v._v("  没有返回,线程挂起开始等待,直到超时才能释放, 而此时若触发  "),a("code",[v._v("服务B")]),v._v("  调用  "),a("code",[v._v("服务A")]),v._v("  的请求来自  "),a("code",[v._v("服务C")]),v._v("  , 而  "),a("code",[v._v("服务C")]),v._v("  频繁调用  "),a("code",[v._v("服务B")]),v._v("  时,由于其依赖  "),a("code",[v._v("服务A")]),v._v(" , 大量线程被挂起等待, 最后导致 "),a("code",[v._v("服务C")]),v._v(" 也不能正常服务, 这时就会出现故障的蔓延")]),v._v(" "),a("p",[v._v("所以在微服务架构中,快速检测出故障源并尽可能地自动恢复服务是必须被设计和考虑的. 通常我们都希望在每个服务中实现监控和日志记录的组件, 比如服务状态, 断路器状态, 吞吐量, 网络延迟等关键数据的仪表盘等.")]),v._v(" "),a("blockquote",[a("p",[v._v("限流, 降级, 熔断")])]),v._v(" "),a("h4",{attrs:{id:"演进式设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演进式设计"}},[v._v("#")]),v._v(" 演进式设计")]),v._v(" "),a("p",[v._v("通过上面的几点特征,我们已经能够体会到,要实施一个完美的微服务架构,需要考虑的设计与成本并不小,对于没有足够经验的团队来说,甚至要比单体应用付出更多的代价")]),v._v(" "),a("p",[v._v("所以,在很多情况下,架构师都会以演进的方式进行系统的构建。在初期, 以单体系统的方式来设计和实施,一方面系统体量初期并不会很大,构建和维护成本都不高。另方面,初期的核心业务在后期通常也不会发生巨大的改变。随着系统的发展或者业务的需要,架构师会将一些经常变动或是有一定时间效应的内容进行微服务处理,并逐渐将原来在单体系统中多变的模块逐步拆分出来,而稳定不太变化的模块就形成一个核心微服务存在于整个架构之中。")]),v._v(" "),a("blockquote",[a("p",[v._v("大多数微服务架构, 都是从单体系统演变来了.")])]),v._v(" "),a("h3",{attrs:{id:"五-springcloud-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-springcloud-简介"}},[v._v("#")]),v._v(" 五. SpringCloud 简介")]),v._v(" "),a("p",[v._v("在介绍SpringCloud之前, 先溜一下市面上针对微服务架构的不同场景的解决方案.")]),v._v(" "),a("ul",[a("li",[v._v("服务治理: 阿里巴巴开源的Dubbo, 当当网在其基础上扩展的DubboX, Netflix的Eureka, Apache的 Consul等.")]),v._v(" "),a("li",[v._v("分布式配置管理: 百度的Disconf, Netflix的Archaius, 360的QConf, SpringCloud的Config, 淘宝的Diamond等.")]),v._v(" "),a("li",[v._v("批量任务: 当当网的 Elastic-Job, LinkedIn的Azkaban, SpringCloud的Task等.")]),v._v(" "),a("li",[v._v("服务跟踪: 京东的Hydra, Spring Cloud的Sleuth, Twitter的Zipkin等.")]),v._v(" "),a("li",[v._v("...")])]),v._v(" "),a("p",[v._v("打个不太恰当的比喻: 我们自己对各个问题选择框架来实施微服务架构就像在DIY电脑一样, 我们对各环节的选择自由度很高, 但是最终结果很有可能因为一条内存质量不行就点不亮了, 总是让人不怎么放心.\n当然,如果你是一名高手, 这些自然都不是问题, 然而千军易得, 良将难求.\n而使用SpringCloud来实施就像直接购买品牌机一样, 在Spring社区的整合之下, 做了大量的兼容性测试, 保证了其拥有更好的稳定性.\n如果要在SpringCoud架构下使用非原装组件时,就需要对其基础有足够的了解。")]),v._v(" "),a("p",[v._v("SpringCloud是一个基于 SpringBoot实现的微服务架构开发工具. 它为微服务架构中涉及的")]),v._v(" "),a("ul",[a("li",[v._v("配置管理")]),v._v(" "),a("li",[v._v("服务治理")]),v._v(" "),a("li",[v._v("断路器")]),v._v(" "),a("li",[v._v("智能路由")]),v._v(" "),a("li",[v._v("微代理")]),v._v(" "),a("li",[v._v("控制总线")]),v._v(" "),a("li",[v._v("全局锁")]),v._v(" "),a("li",[v._v("决策竞选")]),v._v(" "),a("li",[v._v("分布式会话")]),v._v(" "),a("li",[v._v("集群状态管理等")])]),v._v(" "),a("p",[v._v("操作提供了一种简单的开发方式。")]),v._v(" "),a("h4",{attrs:{id:"springcloud-包含的多个子项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-包含的多个子项目"}},[v._v("#")]),v._v(" SpringCloud 包含的多个子项目")]),v._v(" "),a("ul",[a("li",[v._v("SpringCloud-Config: 配置管理工具, 支持使用Git存储配置内容, 可以使用它实现应用配置的外部化存储, 并支持客户端配置信息刷新, 加密/解密配置内容等.")]),v._v(" "),a("li",[v._v("SpringCloud-Netflix: 核心组件, 对多个 Netflix OSS开源套件进行整合\n"),a("ul",[a("li",[v._v("Eureka: 服务治理组件, 包含服务注册中心, 服务注册/发现机制的实现.")]),v._v(" "),a("li",[v._v("Hystrix: 容错管理组件, 实现断路器模式, 帮助服务依赖中出现的延迟和为故障提供强大的容错能力")]),v._v(" "),a("li",[v._v("Ribbon: 客户端负载均衡的服务调用组件")]),v._v(" "),a("li",[v._v("Feign: 基于Ribbon和Hystrix的声明式服务调用组件")]),v._v(" "),a("li",[v._v("Zuul: 网关组件, 提供智能路由, 访问过滤等功能")]),v._v(" "),a("li",[v._v("Archaius: 外部化配置组件")])])]),v._v(" "),a("li",[v._v("SpringCloud-Bus: 事件, 消息总线, 用于传播集群中的状态变化或事件, 以触发后续的处理, 比如用来动态刷新配置等")]),v._v(" "),a("li",[v._v("SpringCloud-Cluster: 针对ZooKeeper, Redis, Hazelcast, Consul的选举算法和通用状态模式的实现")]),v._v(" "),a("li",[v._v("SpringCloud-Cloudfoundry: 与Pivotal Cloudfoundry的整合支持")]),v._v(" "),a("li",[v._v("SpringCloud-Consul: 服务发现与配置管理工具")]),v._v(" "),a("li",[v._v("SpringCloud-Stream: 通过Redis, Rabbit或Kafka实现的消费微服务, 可以通过简单的声明式模型来发送和接收消息")]),v._v(" "),a("li",[v._v("SpringCloud-AWS: 用于简化整合 Amazon Web Service的组件")]),v._v(" "),a("li",[v._v("SpringCloud-Security: 安全工具包, 提供在Zuul代理中对OAuth2客户端请求的中继器")]),v._v(" "),a("li",[v._v("SpringCloud-Sleuth: SpringCloud应用的分布式跟踪实现, 可以完美整合Zipkin")]),v._v(" "),a("li",[v._v("SpringCloud-ZooKeeper: 基于ZooKeeper的服务发现与配置管理组件")]),v._v(" "),a("li",[v._v("SpringCloud-Starters: SpringCloud的基础组件, 它是基于SpringBoot风格项目的基础依赖模块")]),v._v(" "),a("li",[v._v("SpringCloud-CL: 用于在Groovy中快速创建SpringCloud应用的SpringBootCLI插件")]),v._v(" "),a("li",[v._v("...")])])])}),[],!1,null,null,null);_.default=r.exports}}]);