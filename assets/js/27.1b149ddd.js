(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{439:function(s,t,a){s.exports=a.p+"assets/img/image-20210513165204934.99ea5fd4.png"},440:function(s,t,a){s.exports=a.p+"assets/img/image-20210514120027652.90d8db65.png"},607:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("SpringCloud 学习笔记,  第六章 Hystrix")]),s._v(" "),t("h3",{attrs:{id:"雪崩场景模拟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#雪崩场景模拟"}},[s._v("#")]),s._v(" 雪崩场景模拟")]),s._v(" "),t("p",[t("img",{attrs:{src:a(439),alt:"image-20210513165204934"}})]),s._v(" "),t("p",[s._v("用户使用客户端, 调用暴露在外的 "),t("code",[s._v("Server A")]),s._v(" 服务.  而  "),t("code",[s._v("Server A")]),s._v("  又调用了 "),t("code",[s._v("Server B")]),s._v(",   "),t("code",[s._v("Server B")]),s._v(" 中又需要调用   "),t("code",[s._v("Server C")]),s._v(" ,  "),t("code",[s._v("Server D")])]),s._v(" "),t("ul",[t("li",[s._v("在时间点(A)   "),t("code",[s._v("Server D")]),s._v("  挂掉")]),s._v(" "),t("li",[s._v("时间点(B) 由于 "),t("code",[s._v("Server B")]),s._v("  在调用 "),t("code",[s._v("Server D")]),s._v(" 时, 因为 "),t("code",[s._v("Server D TimeOut")]),s._v(", 导致  "),t("code",[s._v("Server B")]),s._v(" 挂掉")]),s._v(" "),t("li",[s._v("同理: 时间点(C) 由于 "),t("code",[s._v("Server A")]),s._v("  在调用 "),t("code",[s._v("Server B")]),s._v(" 时, 因为 "),t("code",[s._v("Server B TimeOut")]),s._v(", 导致  "),t("code",[s._v("Server A")]),s._v(" 挂掉")]),s._v(" "),t("li",[s._v("即使"),t("code",[s._v("Server C")]),s._v(" 可以对外正常提供服务, 整个服务链, 也是挂掉了.")])]),s._v(" "),t("h3",{attrs:{id:"hystrix-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-介绍"}},[s._v("#")]),s._v(" Hystrix 介绍")]),s._v(" "),t("p",[s._v("在微服务架构中，服务与服务之间通过远程调用的方式进行通信，一旦某个被调用的服务发生了故障，其依赖服务也会发生故障，此时就会发生故障的蔓延，最终导致系统瘫痪。Hystrix实现了断路器模式，当某个服务发生故障时，通过断路器的监控，给调用方返回一个错误响应，而不是长时间的等待，这样就不会使得调用方由于长时间得不到响应而占用线程，从而防止故障的蔓延。Hystrix具备服务降级、服务熔断、线程隔离、请求缓存、请求合并及服务监控等强大功能。")]),s._v(" "),t("h4",{attrs:{id:"熔断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[s._v("#")]),s._v(" 熔断")]),s._v(" "),t("p",[s._v("熔断机制是应对雪崩效应的一种微服务链路保护机制. 当扇出链路的某个"),t("code",[s._v("Server")]),s._v(" 不可用或者响应时间太长时, 会进行服务的降级, 进而熔断该服务节点的调用, 快速返回”错误”的响应信息.")]),s._v(" "),t("h5",{attrs:{id:"熔断来源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#熔断来源"}},[s._v("#")]),s._v(" 熔断来源")]),s._v(" "),t("p",[s._v("我们家用电闸上都有保险丝模块, 当电压出现短路问题时, 自动跳闸, 此刻电路主动断开, 我们的电器就会收到保护. 否则, 不能断开的话, 后果不堪设想.")]),s._v(" "),t("h5",{attrs:{id:"微服务的熔断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务的熔断"}},[s._v("#")]),s._v(" 微服务的熔断")]),s._v(" "),t("p",[s._v("在分布式系统中, 我们往往需要依赖下游服务, 不管是内部系统还是第三方服务. 如果下游出现问题, 我们还是盲目地去请求, 即使失败了多次, 还是傻傻的去请求, 去等待. 这样, 会增加了整个链路的响应时间, 可能会造成上层服务的"),t("code",[s._v("Timeout")])]),s._v(" "),t("h5",{attrs:{id:"熔断的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#熔断的作用"}},[s._v("#")]),s._v(" 熔断的作用")]),s._v(" "),t("p",[s._v("熔断器, 可以防止应用程序不断地尝试可能超时和失败的服务, 能达到应用程序执行而不必等待下游服务修正错误服务.")]),s._v(" "),t("p",[s._v("熔断器, 是能让应用程序自我诊断下游系统的错误是否已修正. 如果没有, 不放量去请求, 如果请求成功了, 慢慢的增加请求, 再次尝试调用.")]),s._v(" "),t("p",[t("img",{attrs:{src:a(440),alt:"熔断的示意图"}})]),s._v(" "),t("p",[s._v("看下面的代码:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("striveonger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @description:\n * @author: Mr.Lee\n * @date: 2021-05-12 14:09\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Setter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withGroupKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandGroupKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ThreadPoolTestGroup"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andCommandKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CommandKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andThreadPoolKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixThreadPoolKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"threadPoolKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andCommandPropertiesDefaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerEnabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是true, 用于控制是否启用服务降级")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerForceOpen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是false, 强制打开断路器, 拒绝所有请求")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerForceClosed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是false, 强制关闭断路器, 接收所有请求")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withExecutionTimeoutInMilliseconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// run 方法的执行超时时间")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withMetricsRollingStatisticalWindowInMilliseconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置断路器窗口检查时长为10s")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerRequestVolumeThreshold")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 设置断路器10秒内的流量阀值(10s内调用, 超过5次)")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerErrorThresholdPercentage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 错误百分比超过0% (同时超过1, 2条件的阀值时, 熔断器打开)")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerSleepWindowInMilliseconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隔1s之后, 熔断器会尝试半开(关闭), 重新放进来请求")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andThreadPoolPropertiesDefaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixThreadPoolProperties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withMaxQueueSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置队列大小")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCoreSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置线程池里的线程数")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟业务耗时")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n         * 执行 Fallback 的四种情况:\n         *   1. run 方法 throw Exception\n         *   2. 请求超时\n         *   3. 超出线程数\n         *   4. 断路开关打开 isCircuitBreakerOpen() = true\n         */")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fallback..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestHystrixCommand")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" command "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"call times: %02d; result: %s; isCircuitBreakerOpen: %s"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isCircuitBreakerOpen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n         * 执行结果:\n         *\n         * call times: 01; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 02; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 03; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 04; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 05; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 06; result: Fallback...; isCircuitBreakerOpen: true // 超过 流量阀值: 5(执行时间, 0.5s)\n         * call times: 07; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 08; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 09; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 10; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 11; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 12; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 13; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 14; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 15; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 16; result: Hello...; isCircuitBreakerOpen: false // 熔断器半开状态, 重试请求(成功, 重置流量阀值)\n         * call times: 17; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 18; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 19; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 20; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 21; result: Hello...; isCircuitBreakerOpen: true // 再次超过 流量阀值: 5(执行时间, 2.1s) \n         * call times: 22; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 23; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 24; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 25; result: Fallback...; isCircuitBreakerOpen: true\n         */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br")])]),t("p",[s._v("上面的"),t("code",[s._v("Demo")]),s._v("中, 熔断规则:")]),s._v(" "),t("ol",[t("li",[s._v("单位时间("),t("code",[s._v("10s")]),s._v(")内的请求超过流量阀值("),t("code",[s._v("5")]),s._v(")")]),s._v(" "),t("li",[s._v("失败百分比大于阀值("),t("code",[s._v("0%")]),s._v(", 有错就会熔断)")])]),s._v(" "),t("p",[s._v("其中, 较为重要的 "),t("strong",[s._v("熔断开关")]),s._v(": "),t("code",[s._v("isCircuitBreakerOpen")]),s._v(", 下面还会用到哦~")]),s._v(" "),t("h4",{attrs:{id:"降级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[s._v("#")]),s._v(" 降级")]),s._v(" "),t("h5",{attrs:{id:"降级的本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#降级的本质"}},[s._v("#")]),s._v(" 降级的本质")]),s._v(" "),t("p",[s._v("降级就是为了解决资源不足和访问量增加的矛盾.")]),s._v(" "),t("h5",{attrs:{id:"降级牺牲的是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#降级牺牲的是什么"}},[s._v("#")]),s._v(" 降级牺牲的是什么")]),s._v(" "),t("p",[s._v("从"),t("strong",[s._v("强一致性")]),s._v(" 变成 "),t("strong",[s._v("最终一致性")])]),s._v(" "),t("p",[s._v("大多数的系统是不需要强一致性的. 强一致性就要求多种资源的占用, 减少强一致性就能释放更多资源.\n这也是我们一般利用"),t("strong",[s._v("消息中间件")]),s._v("来削峰填谷.")]),s._v(" "),t("h4",{attrs:{id:"隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离"}},[s._v("#")]),s._v(" 隔离")]),s._v(" "),t("h5",{attrs:{id:"线程池隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池隔离"}},[s._v("#")]),s._v(" 线程池隔离")]),s._v(" "),t("h5",{attrs:{id:"信号量隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信号量隔离"}},[s._v("#")]),s._v(" 信号量隔离")]),s._v(" "),t("h4",{attrs:{id:"请求缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求缓存"}},[s._v("#")]),s._v(" 请求缓存")]),s._v(" "),t("h4",{attrs:{id:"请求合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求合并"}},[s._v("#")]),s._v(" 请求合并")]),s._v(" "),t("blockquote",[t("p",[s._v("参考文章:")]),s._v(" "),t("ul",[t("li",[s._v("https://www.cnblogs.com/yufeng218/p/11042555.html")]),s._v(" "),t("li",[s._v("https://cloud.spring.io/spring-cloud-netflix/multi/multi__circuit_breaker_hystrix_clients.html")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);