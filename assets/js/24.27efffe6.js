(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{502:function(s,t,a){s.exports=a.p+"assets/img/image-20210513165204934.99ea5fd4.png"},503:function(s,t,a){s.exports=a.p+"assets/img/image-20210514120027652.90d8db65.png"},644:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("SpringCloud 学习笔记,  第六章 Hystrix")]),s._v(" "),n("h3",{attrs:{id:"雪崩场景模拟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#雪崩场景模拟"}},[s._v("#")]),s._v(" 雪崩场景模拟")]),s._v(" "),n("p",[n("img",{attrs:{src:a(502),alt:"image-20210513165204934"}})]),s._v(" "),n("p",[s._v("用户使用客户端, 调用暴露在外的 "),n("code",[s._v("Server A")]),s._v(" 服务.  而  "),n("code",[s._v("Server A")]),s._v("  又调用了 "),n("code",[s._v("Server B")]),s._v(",   "),n("code",[s._v("Server B")]),s._v(" 中又需要调用   "),n("code",[s._v("Server C")]),s._v(" ,  "),n("code",[s._v("Server D")])]),s._v(" "),n("ul",[n("li",[s._v("在时间点(A)   "),n("code",[s._v("Server D")]),s._v("  挂掉")]),s._v(" "),n("li",[s._v("时间点(B) 由于 "),n("code",[s._v("Server B")]),s._v("  在调用 "),n("code",[s._v("Server D")]),s._v(" 时, 因为 "),n("code",[s._v("Server D TimeOut")]),s._v(", 导致  "),n("code",[s._v("Server B")]),s._v(" 挂掉")]),s._v(" "),n("li",[s._v("同理: 时间点(C) 由于 "),n("code",[s._v("Server A")]),s._v("  在调用 "),n("code",[s._v("Server B")]),s._v(" 时, 因为 "),n("code",[s._v("Server B TimeOut")]),s._v(", 导致  "),n("code",[s._v("Server A")]),s._v(" 挂掉")]),s._v(" "),n("li",[s._v("即使"),n("code",[s._v("Server C")]),s._v(" 可以对外正常提供服务, 整个服务链, 也是挂掉了.")])]),s._v(" "),n("h3",{attrs:{id:"hystrix-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-介绍"}},[s._v("#")]),s._v(" Hystrix 介绍")]),s._v(" "),n("p",[s._v("在微服务架构中，服务与服务之间通过远程调用的方式进行通信，一旦某个被调用的服务发生了故障，其依赖服务也会发生故障，此时就会发生故障的蔓延，最终导致系统瘫痪。Hystrix实现了断路器模式，当某个服务发生故障时，通过断路器的监控，给调用方返回一个错误响应，而不是长时间的等待，这样就不会使得调用方由于长时间得不到响应而占用线程，从而防止故障的蔓延。Hystrix具备服务降级、服务熔断、线程隔离、请求缓存、请求合并及服务监控等强大功能。")]),s._v(" "),n("h4",{attrs:{id:"熔断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[s._v("#")]),s._v(" 熔断")]),s._v(" "),n("p",[s._v("熔断机制是应对雪崩效应的一种微服务链路保护机制. 当扇出链路的某个"),n("code",[s._v("Server")]),s._v(" 不可用或者响应时间太长时, 会进行服务的降级, 进而熔断该服务节点的调用, 快速返回”错误”的响应信息.")]),s._v(" "),n("h5",{attrs:{id:"熔断来源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#熔断来源"}},[s._v("#")]),s._v(" 熔断来源")]),s._v(" "),n("p",[s._v("我们家用电闸上都有保险丝模块, 当电压出现短路问题时, 自动跳闸, 此刻电路主动断开, 我们的电器就会收到保护. 否则, 不能断开的话, 后果不堪设想.")]),s._v(" "),n("h5",{attrs:{id:"微服务的熔断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微服务的熔断"}},[s._v("#")]),s._v(" 微服务的熔断")]),s._v(" "),n("p",[s._v("在分布式系统中, 我们往往需要依赖下游服务, 不管是内部系统还是第三方服务. 如果下游出现问题, 我们还是盲目地去请求, 即使失败了多次, 还是傻傻的去请求, 去等待. 这样, 会增加了整个链路的响应时间, 可能会造成上层服务的"),n("code",[s._v("Timeout")])]),s._v(" "),n("h5",{attrs:{id:"熔断的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#熔断的作用"}},[s._v("#")]),s._v(" 熔断的作用")]),s._v(" "),n("p",[s._v("熔断器, 可以防止应用程序不断地尝试可能超时和失败的服务, 能达到应用程序执行而不必等待下游服务修正错误服务.")]),s._v(" "),n("p",[s._v("熔断器, 是能让应用程序自我诊断下游系统的错误是否已修正. 如果没有, 不放量去请求, 如果请求成功了, 慢慢的增加请求, 再次尝试调用.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(503),alt:"熔断的示意图"}})]),s._v(" "),n("p",[s._v("看下面的代码:")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("striveonger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @description:\n * @author: Mr.Lee\n * @date: 2021-05-12 14:09\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ThreadPoolTestGroup"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("andCommandKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CommandKey"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("andThreadPoolKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixThreadPoolKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"threadPoolKey"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("andCommandPropertiesDefaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerEnabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是true, 用于控制是否启用服务降级")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerForceOpen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是false, 强制打开断路器, 拒绝所有请求")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerForceClosed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是false, 强制关闭断路器, 接收所有请求")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withExecutionTimeoutInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// run 方法的执行超时时间")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withMetricsRollingStatisticalWindowInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置断路器窗口检查时长为10s")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerRequestVolumeThreshold")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 设置断路器10秒内的流量阀值(10s内调用, 超过5次)")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerErrorThresholdPercentage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 错误百分比超过0% (同时超过1, 2条件的阀值时, 熔断器打开)")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerSleepWindowInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隔1s之后, 熔断器会尝试半开(关闭), 重新放进来请求")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("andThreadPoolPropertiesDefaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixThreadPoolProperties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withMaxQueueSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置队列大小")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCoreSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置线程池里的线程数")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟业务耗时")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n         * 执行 Fallback 的四种情况:\n         *   1. run 方法 throw Exception\n         *   2. 请求超时\n         *   3. 超出线程数\n         *   4. 断路开关打开 isCircuitBreakerOpen() = true\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fallback..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestHystrixCommand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" command "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomCircuitBreakerCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"call times: %02d; result: %s; isCircuitBreakerOpen: %s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isCircuitBreakerOpen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n         * 执行结果:\n         *\n         * call times: 01; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 02; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 03; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 04; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 05; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 06; result: Fallback...; isCircuitBreakerOpen: true // 超过 流量阀值: 5(执行时间, 0.5s)\n         * call times: 07; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 08; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 09; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 10; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 11; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 12; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 13; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 14; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 15; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 16; result: Hello...; isCircuitBreakerOpen: false // 熔断器半开状态, 重试请求(成功, 重置流量阀值)\n         * call times: 17; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 18; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 19; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 20; result: Hello...; isCircuitBreakerOpen: false\n         * call times: 21; result: Hello...; isCircuitBreakerOpen: true // 再次超过 流量阀值: 5(执行时间, 2.1s) \n         * call times: 22; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 23; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 24; result: Fallback...; isCircuitBreakerOpen: true\n         * call times: 25; result: Fallback...; isCircuitBreakerOpen: true\n         */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br")])]),n("p",[s._v("上面的"),n("code",[s._v("Demo")]),s._v("中, 熔断规则:")]),s._v(" "),n("ol",[n("li",[s._v("单位时间("),n("code",[s._v("10s")]),s._v(")内的请求超过流量阀值("),n("code",[s._v("5")]),s._v(")")]),s._v(" "),n("li",[s._v("失败百分比大于阀值("),n("code",[s._v("0%")]),s._v(", 有错就会熔断)")])]),s._v(" "),n("p",[s._v("其中, 较为重要的 "),n("strong",[s._v("熔断开关")]),s._v(": "),n("code",[s._v("isCircuitBreakerOpen")]),s._v(", 下面还会用到哦~")]),s._v(" "),n("h4",{attrs:{id:"降级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[s._v("#")]),s._v(" 降级")]),s._v(" "),n("h5",{attrs:{id:"降级的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#降级的本质"}},[s._v("#")]),s._v(" 降级的本质")]),s._v(" "),n("p",[s._v("降级就是为了解决资源不足和访问量增加的矛盾.")]),s._v(" "),n("h5",{attrs:{id:"降级牺牲的是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#降级牺牲的是什么"}},[s._v("#")]),s._v(" 降级牺牲的是什么")]),s._v(" "),n("p",[s._v("从"),n("strong",[s._v("强一致性")]),s._v(" 变成 "),n("strong",[s._v("最终一致性")])]),s._v(" "),n("p",[s._v("大多数的系统是不需要强一致性的. 强一致性就要求多种资源的占用, 减少强一致性就能释放更多资源.\n这也是我们一般利用"),n("strong",[s._v("消息中间件")]),s._v("来削峰填谷.")]),s._v(" "),n("h4",{attrs:{id:"隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#隔离"}},[s._v("#")]),s._v(" 隔离")]),s._v(" "),n("h5",{attrs:{id:"线程池隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程池隔离"}},[s._v("#")]),s._v(" 线程池隔离")]),s._v(" "),n("h5",{attrs:{id:"信号量隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#信号量隔离"}},[s._v("#")]),s._v(" 信号量隔离")]),s._v(" "),n("h4",{attrs:{id:"请求缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求缓存"}},[s._v("#")]),s._v(" 请求缓存")]),s._v(" "),n("h4",{attrs:{id:"请求合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求合并"}},[s._v("#")]),s._v(" 请求合并")]),s._v(" "),n("blockquote",[n("p",[s._v("参考文章:")]),s._v(" "),n("ul",[n("li",[s._v("https://www.cnblogs.com/yufeng218/p/11042555.html")]),s._v(" "),n("li",[s._v("https://cloud.spring.io/spring-cloud-netflix/multi/multi__circuit_breaker_hystrix_clients.html")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);