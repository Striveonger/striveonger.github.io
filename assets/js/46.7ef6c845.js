(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{477:function(t,e,a){t.exports=a.p+"assets/img/image-20201013160331021.75c80c9e.png"},687:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:a(477),alt:"image-20201013160331021"}})]),t._v(" "),e("h3",{attrs:{id:"为何要阅读源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为何要阅读源码"}},[t._v("#")]),t._v(" 为何要阅读源码")]),t._v(" "),e("p",[t._v("我们在做项目时候一般会遇到下面的问题：")]),t._v(" "),e("p",[t._v("问题一是不知道如何去设计，比如刚入职场时，来一个需求需做概要设计，不知如何下手，不得不去看当前系统类似需求是如何设计的，然后仿照去设计。\n问题二是设计的时候，考虑问题不周全，相比职场新手，这类人对一个需求依靠自己的经验已经能够拿出一个概要设计，但是设计中经常会遗漏一些异常细节，比如使用多线程有界队列执行任务，遇到机器宕机了，如果队列里面的任务不存盘的话，那么机器下次启动时候这些任务就丢失了。\n对于这些问题，说到底主要是因为经验不够，而经验主要从项目实践中积累，所以招聘单位一般都会限定工作时间大于 3 年，因为这些人的项目经验相对较丰富，项目中遇到的场景相对较多。工作经验的积累来自于年限与实践，然而看源码可以扩展我们的思路，这是变相增加我们经验的不错方法。虽然不能短时间内通过时间积累经验，但是可以通过学习开源框架、开源项目来获取。")]),t._v(" "),e("p",[t._v("另外进职场后一般都要先熟悉现有系统，如果有文档还好，没文档的话就得自己去翻代码研究。如果大家之前对阅读源码有经验，那么在研究新系统的代码逻辑时就不会那么费劲了。\n还有一点就是当你使用框架或者工具做开发时，如果你对它的实现有所了解，就能最大化的减少出故障的可能。比如并发队列 ArrayBlockingQueue 里面元素入队有个 offer 和 put 方法，虽然某个时间点你知道使用 offer 方法时，当队列满了就会丢弃要入队的元素，之后 offer 方法会返回 false，而不会阻塞当前线程；使用 put 方法时当队列满了，则会挂起当前线程，直到队列有空闲元素，入队成功后才返回。但是人是善忘的，当你一段时间不使用，就会忘记他们的区别，这时当你使用时，需进入 offer 和 put 的源码看他们的实现。进入 offer 方法一看，哦，原来队列满后直接返回了 false；进入 put 方法一看，哦，原来队列满后，直接使用条件变量的 await 方法挂起了当前线程；知道了他们的区别，你就可以根据自己的需求来选择了。\n看源码最大的好处是可以开阔思维，提升架构设计能力。有些东西仅靠书本和自己思考是很难学到的，必须通过看源码，看别人如何设计，然后思考为何这样设计才能获取。"),e("strong",[t._v("能力的提高不在于你写了多少代码，做了多少项目，而在于给你一个业务场景时，你是否能拿出几种靠谱的解决方案，并且说出各自的优缺点。而如何才能拿出来，一来靠经验，二来靠归纳总结，而看源码可以快速增加你的经验。")])]),t._v(" "),e("h3",{attrs:{id:"如何阅读源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何阅读源码"}},[t._v("#")]),t._v(" 如何阅读源码")]),t._v(" "),e("p",[t._v("那么如何阅读源码呢？在你看某一个框架的源码前，先去 Google 查找这个开源框架的官方介绍，通过资料看看该框架有几个模块，各个模块是做什么的，之间是什么联系，每个模块都有哪些核心类，在阅读源码时可以着重看这些类。")]),t._v(" "),e("p",[t._v("然后对哪个模块感兴趣就去写个小 demo，先了解下这个模块的具体作用，然后在 debug 进入看具体实现，在 debug 过程中第一遍是走马观花，简略的看下调用逻辑，都用了哪些类；")]),t._v(" "),e("p",[t._v("第二遍需有重点的 debug，看看这些类担任了架构图里的哪些功能，使用了哪些设计模式？如果第二遍有感觉了，便大致知道了整体代码的功能实现，但是对整体代码结构还不是很清晰，毕竟代码里面多个类来回调用，很容易迷失当前断点的来处，那么你可以进行第三遍 debug，这时候你最好把主要类的调用时序图、以及类图结构画出来，等画好后，在对着时序图分析调用流程，就可以清楚的知道类之间的调用关系，通过类图就可以知道类的功能、以及相互之间的依赖关系了。")]),t._v(" "),e("p",[t._v("另外开源框架里面每个功能类或者方法一般都有注释，这些注释是一手的好资料，比如 JUC 包里的一些并发组件的注释，就已经提供了它们的设计原理和使用场景。")]),t._v(" "),e("p",[t._v("另外阅读源码时，最好画出时序图和类图，因为人总是善忘的，如果隔一段时间后你在去看之前看过的源码，虽然有些印象，但当你想去看某个模块的逻辑时，又需根据 demo 再从头 debug 了，而如果有了这俩图，就可以从时序图或者类图里面直接找，并且看一眼时序图就知道整个模块的脉络了。")]),t._v(" "),e("p",[t._v("还有查框架使用说明最好去官网查，虽然是英文，但是看久了就好了，毕竟还有 Google 翻译呐！另外去github上找源码，一般源码里面都有测试用例，这个是一手使用资料")]),t._v(" "),e("p",[t._v("当然研究代码时不一定非要 debug 三遍，其实这里说的是三种掌握程度，如果你 debug 一遍就能掌握，那自然更好啦。")])])}),[],!1,null,null,null);e.default=s.exports}}]);