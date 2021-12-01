(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{439:function(s,t,a){s.exports=a.p+"assets/img/image-20210307212512456.09dea01f.png"},440:function(s,t,a){s.exports=a.p+"assets/img/image-20210307225950765.9e724b32.png"},505:function(s,t,a){s.exports=a.p+"assets/img/image-20210306212626459.c822ec95.png"},506:function(s,t,a){s.exports=a.p+"assets/img/image-20210307215853832.5f8c98a6.png"},507:function(s,t,a){s.exports=a.p+"assets/img/image-20210307224944076.2fa56ab8.png"},665:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("学习Java 高并发的笔记: 了解并发, 高并发的概念, 与 Java内存模型")]),s._v(" "),n("h3",{attrs:{id:"并发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发"}},[s._v("#")]),s._v(" 并发")]),s._v(" "),n("blockquote",[n("p",[s._v("定义: 多个线程操作相同的资源, 保证线程安全, 合理使用资源.")])]),s._v(" "),n("p",[s._v("我们说多线程并发时, 更多的是讨论多个线程操作相同的资源. 更多的它是落在保证线程安全以及合理分配和使用资源上面")]),s._v(" "),n("h3",{attrs:{id:"高并发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高并发"}},[s._v("#")]),s._v(" 高并发")]),s._v(" "),n("blockquote",[n("p",[s._v("定义: 服务能同时处理很多的请求, 来提高系统性能")])]),s._v(" "),n("p",[s._v("系统集中收到了大量的请求, 比如12306的抢票")]),s._v(" "),n("p",[s._v("它会导致系统在短时间内执行大量的操作. 例如对资源的请求，数据库的操作等")]),s._v(" "),n("p",[s._v("如果高运发处理不好不仅仅降低了用户的体验度, 请求时间变长, 也可能导致系统宕机, 严重的甚至导致OOM异常, 系统停止工作等")]),s._v(" "),n("p",[s._v("若想系统能够适应高并发的状态, 就需要从多个方面进行系统优化:")]),s._v(" "),n("ul",[n("li",[s._v("提升硬件性能")]),s._v(" "),n("li",[s._v("网络系统架构开发语言的选取")]),s._v(" "),n("li",[s._v("数据结构的运用")]),s._v(" "),n("li",[s._v("算法优化")]),s._v(" "),n("li",[s._v("数据库优化")]),s._v(" "),n("li",[s._v("...")])]),s._v(" "),n("h3",{attrs:{id:"java-内存模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型"}},[s._v("#")]),s._v(" Java 内存模型")]),s._v(" "),n("blockquote",[n("p",[s._v("Java Memory Model")])]),s._v(" "),n("p",[n("code",[s._v("Java内存模型")]),s._v(": 它是一种规范, 它规范了 "),n("code",[s._v("JVM")]),s._v(" 与 计算机内存是如何协同工作的. 它规定了一个线程如何和何时可以看到其他线程修改过的共享变量值. 以及在必要时, 如何同步的访问共享变量.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(505),alt:"image-20210306212626459"}})]),s._v(" "),n("h4",{attrs:{id:"堆内存-heap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆内存-heap"}},[s._v("#")]),s._v(" 堆内存(Heap)")]),s._v(" "),n("p",[s._v("运行时的数据区, 是由 "),n("code",[s._v("GC")]),s._v(" 来负责管理的")]),s._v(" "),n("p",[s._v("动态分配内存, 用于存放对象实例.")]),s._v(" "),n("p",[s._v("速度较慢")]),s._v(" "),n("h4",{attrs:{id:"栈内存-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-stack"}},[s._v("#")]),s._v(" 栈内存(Stack)")]),s._v(" "),n("p",[s._v("存取速度快")]),s._v(" "),n("p",[s._v("存在Stack数据大小, 生命周期是确定的.")]),s._v(" "),n("p",[s._v("主要放一些基础类型的变量和对象的引用.")]),s._v(" "),n("blockquote",[n("p",[s._v("如上图中, 线程1与线程2,同时访问 Object3时, 两个线程中拥有的是Object3的`私有拷贝对象.")])]),s._v(" "),n("h4",{attrs:{id:"_1-主内存与工作内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-主内存与工作内存"}},[s._v("#")]),s._v(" 1. 主内存与工作内存")]),s._v(" "),n("p",[s._v("Java线程之间的通信由Java内存模型（本文简称为JMM）控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见。从抽象的角度来看，JMM定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（main memory）中，每个线程都有一个私有的本地内存（local memory），本地内存中存储了该线程以读/写共享变量的副本。本地内存是JMM的一个抽象概念，并不真实存在。它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。Java内存模型的抽象示意图如下：")]),s._v(" "),n("blockquote",[n("p",[s._v("工作内存 <=> 本地内存")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(439),alt:"image-20210307212512456"}})]),s._v(" "),n("p",[s._v("堆和方法区是线程共享的。而局部变量，方法定义参数和异常处理器参数就不会在线程之间共享，它们不会有内存可见性问题，也不受内存模型的影响。")]),s._v(" "),n("p",[s._v("从上图来看，线程A与线程B之间如要通信的话，必须要经历下面2个步骤：")]),s._v(" "),n("ol",[n("li",[s._v("首先，线程A把本地内存A中更新过的共享变量刷新到主内存中去。")]),s._v(" "),n("li",[s._v("然后，线程B到主内存中去读取线程A之前已更新过的共享变量。")])]),s._v(" "),n("p",[s._v("下面通过示意图来说明这两个步骤：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(506),alt:"image-20210307215853832"}})]),s._v(" "),n("p",[s._v("如上图所示，本地内存A和B有主内存中共享变量x的副本。假设初始时，这三个内存中的x值都为0。线程A在执行时，把更新后的x值（假设值为1）临时存放在自己的本地内存A中。当线程A和线程B需要通信时，线程A首先会把自己本地内存中修改后的x值刷新到主内存中，此时主内存中的x值变为了1。随后，线程B到主内存中去读取线程A更新后的x值，此时线程B的本地内存的x值也变为了1。")]),s._v(" "),n("p",[s._v("从整体来看，这两个步骤实质上是线程A在向线程B发送消息，而且这个通信过程必须要经过主内存。JMM通过控制主内存与每个线程的本地内存之间的交互，来提供内存可见性保证。")]),s._v(" "),n("h4",{attrs:{id:"_2-三大特性-原子性、可见性和有序性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-三大特性-原子性、可见性和有序性"}},[s._v("#")]),s._v(" 2. 三大特性：原子性、可见性和有序性")]),s._v(" "),n("p",[s._v("Java内存模型就是围绕着并发编程中的这三个特性来建立的。")]),s._v(" "),n("h5",{attrs:{id:"原子性-atomicity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原子性-atomicity"}},[s._v("#")]),s._v(" 原子性(Atomicity)")]),s._v(" "),n("p",[s._v("一个操作不能被打断，要么全部执行完毕，要么不执行。在这点上有点类似于事务操作，要么全部执行成功，要么回退到执行该操作之前的状态。基本类型数据的访问大都是原子操作。")]),s._v(" "),n("h5",{attrs:{id:"可见性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可见性"}},[s._v("#")]),s._v(" 可见性")]),s._v(" "),n("p",[s._v("一个线程对共享变量做了修改之后，其他的线程立即能够看到（感知到）该变量这种修改（变化）。")]),s._v(" "),n("p",[s._v("Java内存模型是通过将在工作内存中的变量修改后的值同步到主内存，在读取变量前从主内存刷新最新值到工作内存中，这种依赖主内存的方式来实现可见性的")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("用 "),n("code",[s._v("volatile")]),s._v(" 描述变量, 会刷新其他线程中的值")])])]),s._v(" "),n("h6",{attrs:{id:"看一个可见性的例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看一个可见性的例子"}},[s._v("#")]),s._v(" 看一个可见性的例子")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xyz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("striveonger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chapter_01")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author Mr.Lee\n * @description:\n * @date 2021-03-07 上午5:50\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StopExample")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*volatile*/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" running "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在t1线程中, 访问了 共享变量 running")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取到的是t1线程的本地内存中的running, 初始值为 false")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i: "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        t1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在主线程中, 修改了running的值.")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果 running 未被 volatile修饰, 则变更后的值, 不会刷新给t1线程的本地内存中的running, 则程序会陷入死循环")]),s._v("\n        running "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h5",{attrs:{id:"有序性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有序性"}},[s._v("#")]),s._v(" 有序性")]),s._v(" "),n("p",[s._v("对于一个线程的代码而言，我们总是以为代码的执行是从前往后的，依次执行的。这么说不能说完全不对，在单线程程序里，确实会这样执行；但是在多线程并发时，程序的执行就有可能出现乱序。用一句话可以总结为：在本线程内观察，操作都是有序的；如果在一个线程中观察另外一个线程，所有的操作都是无序的。前半句是指“线程内表现为串行语义（WithIn Thread As-if-Serial Semantics）”,后半句是指“"),n("strong",[s._v("指令重排")]),s._v("”现象和“工作内存和主内存同步延迟”现象。")]),s._v(" "),n("p",[s._v("Java提供了两个关键字volatile和synchronized来保证多线程之间操作的有序性, "),n("strong",[s._v("volatile关键字本身通过加入内存屏障来禁止指令的重排序")]),s._v(" ，而synchronized关键字通过一个变量在同一时间只允许有一个线程对其进行加锁的规则来实现。")]),s._v(" "),n("p",[s._v("在单线程程序中，不会发生“指令重排”和“工作内存和主内存同步延迟”现象，只在多线程程序中出现。")]),s._v(" "),n("h4",{attrs:{id:"happens-before原则-指令重排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#happens-before原则-指令重排"}},[s._v("#")]),s._v(" happens-before原则 (指令重排)")]),s._v(" "),n("p",[s._v("Java内存模型中定义的两项操作之间的次序关系，如果说操作A先行发生于操作B，操作A产生的影响能被操作B观察到，“影响”包含了修改了内存中共享变量的值、发送了消息、调用了方法等。")]),s._v(" "),n("p",[s._v("如果两个操作之间的关系不在此列，并且无法从下列规则推导出来的话，它们就没有顺序性保障，虚拟机可以对它们进行随意地重排序。")]),s._v(" "),n("p",[s._v("程序次序规则(Pragram Order Rule)：在一个线程内，按照程序代码顺序，书写在前面的操作先行发生于书写在后面的操作。准确地说应该是控制流顺序而不是程序代码顺序，因为要考虑分支、循环结构。")]),s._v(" "),n("p",[s._v("管程锁定规则(Monitor Lock Rule)：一个unlock操作先行发生于后面对同一个锁的lock操作。这里必须强调的是同一个锁，而”后面“是指时间上的先后顺序。")]),s._v(" "),n("p",[s._v("volatile变量规则(Volatile Variable Rule)：对一个volatile变量的写操作先行发生于后面对这个变量的读取操作，这里的”后面“同样指时间上的先后顺序。")]),s._v(" "),n("p",[s._v("线程启动规则(Thread Start Rule)：Thread对象的start()方法先行发生于此线程的每一个动作。")]),s._v(" "),n("p",[s._v("线程终于规则(Thread Termination Rule)：线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过Thread.join()方法结束，Thread.isAlive()的返回值等作段检测到线程已经终止执行。")]),s._v(" "),n("p",[s._v("线程中断规则(Thread Interruption Rule)：对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通 Thread.interrupted()方法检测是否有中断发生。")]),s._v(" "),n("p",[s._v("对象终结规则(Finalizer Rule)：一个对象初始化完成(构造方法执行完成)先行发生于它的finalize()方法的开始。")]),s._v(" "),n("p",[s._v("传递性(Transitivity)：如果操作A先行发生于操作B，操作B先行发生于操作C，那就可以得出操作A先行发生于操作C的结论。")]),s._v(" "),n("p",[s._v("一个操作”时间上的先发生“不代表这个操作会是”先行发生“，那如果一个操作”先行发生“是否就能推导出这个操作必定是”时间上的先发生 “呢？也是不成立的，一个典型的例子就是指令重排序。所以时间上的先后顺序与happens-before原则之间基本没有什么关系，所以衡量并发安全问题一切必须以happens-before 原则为准。")]),s._v(" "),n("h6",{attrs:{id:"看一个指令重排的例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看一个指令重排的例子"}},[s._v("#")]),s._v(" 看一个指令重排的例子")]),s._v(" "),n("blockquote",[n("p",[s._v("颠覆认知的操作来了")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xyz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("striveonger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chapter_01")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author Mr.Lee\n * @description: 指令重排的例子\n * @date 2021-03-07 下午10:30\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HappensBeforeExample")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" t2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            t1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" t2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            t1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" t2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第%d次,(%d, %d)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[n("img",{attrs:{src:a(440),alt:"image-20210307225950765"}})]),s._v(" "),n("blockquote",[n("p",[s._v("运气不是太好, 跑了10多分钟...."),n("code",[s._v("i")]),s._v("的值, 肯定溢出过很多次了....")])]),s._v(" "),n("h4",{attrs:{id:"java-内存模型-同步操作与规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型-同步操作与规则"}},[s._v("#")]),s._v(" Java 内存模型-同步操作与规则")]),s._v(" "),n("p",[n("img",{attrs:{src:a(507),alt:"image-20210307224944076"}})]),s._v(" "),n("h5",{attrs:{id:"八种操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八种操作"}},[s._v("#")]),s._v(" 八种操作")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("锁定（lock）")]),s._v(": 作用于主内存中的变量，将他标记为一个线程独享变量。")])]),s._v(" "),n("blockquote",[n("p",[s._v("通常意义上的上锁，就是一个线程正在使用时，其他线程必须等待该线程任务完成才能继续执行自己的任务。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("解锁（unlock）")]),s._v(": 作用于主内存中的变量，解除变量的锁定状态，被解除锁定状态的变量才能被其他线程锁定。")])]),s._v(" "),n("blockquote",[n("p",[s._v("执行完成后解开锁。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("read（读取）")]),s._v("：作用于主内存的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的 load 动作使用。")])]),s._v(" "),n("blockquote",[n("p",[s._v("从主内存 读取到工作内存中。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("load(载入)")]),s._v("：把 read 操作从主内存中得到的变量值放入工作内存的变量的副本中。")])]),s._v(" "),n("blockquote",[n("p",[s._v("给工作内存中的副本赋值。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("use(使用)")]),s._v("：把工作内存中的一个变量的值传给执行引擎，每当虚拟机遇到一个使用到变量的指令时都会使用该指令。")])]),s._v(" "),n("blockquote",[n("p",[s._v("程序执行过程中读取该值时调用。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("assign（赋值）")]),s._v("：作用于工作内存的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。")])]),s._v(" "),n("blockquote",[n("p",[s._v("将运算完成后的新值赋回给工作内存中的变量，相当于修改工作内存中的变量。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("store（存储）")]),s._v("：作用于工作内存的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的 write 操作使用。")])]),s._v(" "),n("blockquote",[n("p",[s._v("将该值从变量中取出，写入工作内存中。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("write（写入）")]),s._v("：作用于主内存的变量，它把 store 操作从工作内存中得到的变量的值放入主内存的变量中。")])]),s._v(" "),n("blockquote",[n("p",[s._v("将工作内存中的值写回主内存。")])]),s._v(" "),n("h5",{attrs:{id:"同步规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同步规则"}},[s._v("#")]),s._v(" 同步规则")]),s._v(" "),n("ul",[n("li",[s._v("不允许 read 和 load、store 和 write 操作之一单独出现，即不允许一个变量从主内存读取了但工作内存不接受，或者从工作内存发起回写了但主内存不接受的情况出现。")]),s._v(" "),n("li",[s._v("不允许一个线程丢弃它的最近的 assign 操作，即变量在工作内存中改变了之后必须把该变化同步回主内存。")]),s._v(" "),n("li",[s._v("不允许一个线程无原因地（没有发生过任何 assign 操作）把数据从线程的工作内存同步回主内存中。")]),s._v(" "),n("li",[s._v("一个新的变量只能在主内存中 “诞生”，不允许在工作内存中直接使用一个未被初始化（load 或 assign）的变量，换句话说就是对一个变量实施 use 和 store 操作之前，必须先执行过了 assign 和 load 操作。")]),s._v(" "),n("li",[s._v("一个变量在同一个时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。")]),s._v(" "),n("li",[s._v("如果对一个变量执行 lock 操作，将会清空工作内存中此变量的值，在执行引擎使用这个变量前，需要重新执行 load 或 assign 操作初始化变量的值。")]),s._v(" "),n("li",[s._v("如果一个变量事先没有被 lock 操作锁定，则不允许对它执行 unlock 操作，也不允许去 unlock 一个被其他线程锁定住的变量。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);