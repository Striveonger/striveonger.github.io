(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{544:function(v,_,t){"use strict";t.r(_);var l=t(4),p=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("关于设计模式的六大原则")]),v._v(" "),t("h3",{attrs:{id:"单一值守原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单一值守原则"}},[v._v("#")]),v._v(" 单一值守原则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义:  ** 不要存在多于一个导致类变更的原因。通俗的说，即一个类只负责一项职责。")])]),v._v(" "),t("p",[t("strong",[v._v("问题由来:")]),v._v(" 类T负责两个不同的职责：职责P1，职责P2。当由于职责P1需求发生改变而需要修改类T时，有可能会导致原本运行正常的职责P2功能发生故障。")]),v._v(" "),t("p",[v._v("**解决方案: **遵循单一职责原则。分别建立两个类T1、T2，使T1完成职责P1功能，T2完成职责P2功能。这样，当修改类T1时，不会使职责P2发生故障风险；同理，当修改T2时，也不会使职责P1发生故障风险。")]),v._v(" "),t("p",[v._v("即便是经验丰富的程序员写出的程序，也会有违背这一原则的代码存在。为什么会出现这种现象呢？因为有职责扩散。所谓职责扩散，就是因为某种原因，职责P被分化为粒度更细的职责P1和P2。")]),v._v(" "),t("p",[v._v("**例如: **类T只负责一个职责P，这样设计是符合单一职责原则的。后来由于某种原因，也许是需求变更了，也许是程序的设计者境界提高了，需要将职责P细分为粒度更细的职责P1，P2，这时如果要使程序遵循单一职责原则，需要将类T也分解为两个类T1和T2，分别负责P1、P2两个职责。但是在程序已经写好的情况下，这样做简直太费时间了。所以，简单的修改类T，用它来负责两个职责是一个比较不错的选择，虽然这样做有悖于单一职责原则。（这样做的风险在于职责扩散的不确定性，因为我们不会想到这个职责P，在未来可能会扩散为P1，P2，P3，P4……Pn。所以记住，在职责扩散到我们无法控制的程度之前，立刻对代码进行重构）")]),v._v(" "),t("p",[t("strong",[v._v("单一值守原则")]),v._v("的优点:")]),v._v(" "),t("ul",[t("li",[v._v("可以降低类的复杂度，一个类只负责一项职责，其逻辑肯定要比负责多项职责简单的多；")]),v._v(" "),t("li",[v._v("提高类的可读性，提高系统的可维护性；")]),v._v(" "),t("li",[v._v("变更引起的风险降低，变更是必然的，如果单一职责原则遵守的好，当修改一个功能时，可以显著降低对其他功能的影响。")])]),v._v(" "),t("p",[t("strong",[v._v("单一值守原则")]),v._v("的缺点:")]),v._v(" "),t("ul",[t("li",[v._v("修改繁琐")]),v._v(" "),t("li",[v._v("很容易出现"),t("code",[v._v("类爆炸")])])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("修改原则:")]),v._v(" 只有逻辑足够简单，才可以在代码级别上违反单一职责原则；只有类中方法数量足够少，才可以在方法级别上违反单一职责原则；")])]),v._v(" "),t("h3",{attrs:{id:"里氏替换原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则"}},[v._v("#")]),v._v(" 里氏替换原则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义1: ** 如果对每一个类型为 T1的对象 o1，都有类型为 T2 的对象o2，使得以 T1定义的所有程序 P 在所有的对象 o1 都代换成 o2 时，程序 P 的行为没有发生变化，那么类型 T2 是类型 T1 的子类型。")]),v._v(" "),t("p",[v._v("**定义2: ** 所有引用基类的地方必须能透明地使用其子类的对象。")])]),v._v(" "),t("p",[t("strong",[v._v("问题由来:")]),v._v(" 有一功能P1，由类A完成。现需要将功能P1进行扩展，扩展后的功能为P，其中P由原有功能P1与新功能P2组成。新功能P由类A的子类B来完成，则子类B在完成新功能P2的同时，有可能会导致原有功能P1发生故障。")]),v._v(" "),t("p",[t("strong",[v._v("解决方案:")]),v._v(" 当使用继承时，遵循里氏替换原则。类B继承类A时，除添加新的方法完成新增功能P2外，"),t("strong",[v._v("尽量不要重写父类A的方法，也尽量不要重载父类A的方法。")])]),v._v(" "),t("p",[v._v("**继承的含义: **父类中凡是已经实现好的方法（相对于抽象方法而言），实际上是在设定一系列的规范和契约，虽然它不强制要求所有的子类必须遵从这些契约，但是如果子类对这些非抽象方法任意修改，就会对整个继承体系造成破坏。而里氏替换原则就是表达了这一层含义。")]),v._v(" "),t("p",[v._v("里氏替换原则通俗的来讲就是：子类可以扩展父类的功能，但不能改变父类原有的功能。")]),v._v(" "),t("p",[v._v("它包含以下4层含义：")]),v._v(" "),t("ul",[t("li",[v._v("子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。")]),v._v(" "),t("li",[v._v("子类中可以增加自己特有的方法。")]),v._v(" "),t("li",[v._v("当子类的方法重载父类的方法时，方法的前置条件（即方法的形参）要比父类方法的输入参数更宽松。")]),v._v(" "),t("li",[v._v("当子类的方法实现父类的抽象方法时，方法的后置条件（即方法的返回值）要比父类更严格。")])]),v._v(" "),t("h3",{attrs:{id:"依赖倒置原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则"}},[v._v("#")]),v._v(" 依赖倒置原则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义: **高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。")])]),v._v(" "),t("p",[v._v("**问题由来: **类A直接依赖类B，假如要将类A改为依赖类C，则必须通过修改类A的代码来达成。这种场景下，类A一般是高层模块，负责复杂的业务逻辑；类B和类C是低层模块，负责基本的原子操作；假如修改类A，会给程序带来不必要的风险。")]),v._v(" "),t("p",[v._v("**解决方案: **将类A修改为依赖接口I，类B和类C各自实现接口I，类A通过接口I间接与类B或者类C发生联系，则会大大降低修改类A的几率。")]),v._v(" "),t("p",[v._v("相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建起来的架构比以细节为基础搭建起来的架构要稳定的多。在 "),t("code",[v._v("Java")]),v._v(" 中，抽象指的是接口或者抽象类，细节就是具体的实现类，使用接口或者抽象类的目的是制定好规范和契约，而不去涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成。")]),v._v(" "),t("p",[v._v("采用依赖倒置原则给多人并行开发带来了极大的便利，参与协作开发的人越多、项目越庞大，采用依赖导致原则的意义就越重大。现在很流行的TDD开发模式就是依赖倒置原则最成功的应用。")]),v._v(" "),t("p",[t("strong",[v._v("传递依赖关系")]),v._v("有三种方式:")]),v._v(" "),t("ul",[t("li",[v._v("接口传递")]),v._v(" "),t("li",[v._v("构造方法传递")]),v._v(" "),t("li",[v._v("Setter方法传递")])]),v._v(" "),t("p",[v._v("在实际编程中，我们一般需要做到如下3点：")]),v._v(" "),t("ul",[t("li",[v._v("低层模块尽量都要有抽象类或接口，或者两者都有。")]),v._v(" "),t("li",[v._v("变量的声明类型尽量是抽象类或接口。")]),v._v(" "),t("li",[v._v("使用继承时遵循里氏替换原则。")])]),v._v(" "),t("p",[v._v("依赖倒置原则的核心就是要我们面向接口编程，理解了面向接口编程，也就理解了依赖倒置。")]),v._v(" "),t("h3",{attrs:{id:"接口隔离原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[v._v("#")]),v._v(" 接口隔离原则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义: **客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。")])]),v._v(" "),t("p",[v._v("**问题由来: **类A通过接口I依赖类B，类C通过接口I依赖类D，如果接口I对于类A和类B来说不是最小接口，则类B和类D必须去实现他们不需要的方法。")]),v._v(" "),t("p",[v._v("**解决方案: **将臃肿的接口I拆分为独立的几个接口，类A和类C分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则。")]),v._v(" "),t("p",[v._v("**接口隔离原则的含义: **建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为各个类建立专用的接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。在程序设计中，依赖几个专用的接口要比依赖一个综合的接口更灵活。接口是设计时对外部设定的“契约”，通过分散定义多个接口，可以预防外来变更的扩散，提高系统的灵活性和可维护性。")]),v._v(" "),t("p",[v._v("很多人会觉的接口隔离原则跟之前的单一职责原则很相似，其实不然。其一，单一职责原则原注重的是职责；而接口隔离原则注重对接口依赖的隔离。其二，单一职责原则主要是约束类，其次才是接口和方法，它针对的是程序中的实现和细节；而接口隔离原则主要约束接口接口，主要针对抽象，针对程序整体框架的构建。")]),v._v(" "),t("p",[v._v("采用接口隔离原则对接口进行约束时，要注意以下几点:")]),v._v(" "),t("ul",[t("li",[v._v("接口尽量小，但是要有限度。对接口进行细化可以提高程序设计灵活性是不挣的事实，但是如果过小，则会造成接口数量过多，使设计复杂化。所以一定要适度。")]),v._v(" "),t("li",[v._v("为依赖接口的类定制服务，只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。只有专注地为一个模块提供定制服务，才能建立最小的依赖关系。")]),v._v(" "),t("li",[v._v("提高内聚，减少对外交互。使接口用最少的方法去完成最多的事情。")])]),v._v(" "),t("p",[v._v("运用接口隔离原则，一定要适度，接口设计的过大或过小都不好。设计接口的时候，只有多花些时间去思考和筹划，才能准确地实践这一原则。")]),v._v(" "),t("h3",{attrs:{id:"迪米特法则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则"}},[v._v("#")]),v._v(" 迪米特法则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义: **一个对象应该对其他对象保持最少的了解")])]),v._v(" "),t("p",[v._v("**问题由来: **类与类之间的关系越密切，耦合度越大，当一个类发生改变时，对另一个类的影响也越大。")]),v._v(" "),t("p",[v._v("**解决方案: **尽量降低类与类之间的耦合")]),v._v(" "),t("p",[v._v("自从我们接触编程开始，就知道了软件编程的总的原则：低耦合，高内聚。无论是面向过程编程还是面向对象编程，只有使各个模块之间的耦合尽量的低，才能提高代码的复用率。低耦合的优点不言而喻，但是怎么样编程才能做到低耦合呢？")]),v._v(" "),t("p",[v._v("通俗的来讲，就是一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类来说，无论逻辑多么复杂，都尽量地的将逻辑封装在类的内部，对外除了提供的public方法，不对外泄漏任何信息。")]),v._v(" "),t("p",[v._v("耦合的方式很多，依赖、关联、组合、聚合等。其中，我们称出现成员变量、方法参数、方法返回值中的类为直接的朋友，而出现在**"),t("code",[v._v("局部变量")]),v._v("**中的类则不是直接的朋友。也就是说，"),t("strong",[v._v("陌生的类最好不要作为局部变量的形式出现在类的内部")]),v._v("。")]),v._v(" "),t("p",[v._v("迪米特法则的初衷是降低类之间的耦合，由于每个类都减少了不必要的依赖，因此的确可以降低耦合关系。但是凡事都有度，虽然可以避免与非直接的类通信，但是要通信，必然会通过一个“中介”来发生联系，过分的使用迪米特原则，会产生大量这样的中介和传递类，导致系统复杂度变大。所以在采用迪米特法则时要反复权衡，既做到结构清晰，又要高内聚低耦合。")]),v._v(" "),t("h3",{attrs:{id:"开闭原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[v._v("#")]),v._v(" 开闭原则")]),v._v(" "),t("blockquote",[t("p",[v._v("**定义: **一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。")])]),v._v(" "),t("p",[v._v("**问题由来: **在软件的生命周期内，因为变化、升级和维护等原因需要对软件原有代码进行修改时，可能会给旧代码中引入错误，也可能会使我们不得不对整个功能进行重构，并且需要原有代码经过重新测试。")]),v._v(" "),t("p",[v._v("**解决方案: **当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化。")]),v._v(" "),t("p",[v._v("开闭原则是面向对象设计中最基础的设计原则，它指导我们如何建立稳定灵活的系统。开闭原则可能是设计模式六项原则中定义最模糊的一个了，它只告诉我们对扩展开放，对修改关闭，可是到底如何才能做到对扩展开放，对修改关闭，并没有明确的告诉我们。")]),v._v(" "),t("p",[v._v("**开闭原则的含义: **用抽象构建框架，用实现扩展细节。因为抽象灵活性好，适应性广，只要抽象的合理，可以基本保持软件架构的稳定。而软件中易变的细节，我们用从抽象派生的实现类来进行扩展，当软件需要发生变化时，我们只需要根据需求重新派生一个实现类来扩展就可以了。当然前提是我们的抽象要合理，要对需求的变更有前瞻性和预见性才行。")]),v._v(" "),t("p",[v._v("再回想一下前面说的5项原则，恰恰是告诉我们用抽象构建框架，用实现扩展细节的注意事项而已")]),v._v(" "),t("ul",[t("li",[v._v("单一职责原则 告诉我们实现类要职责单一")]),v._v(" "),t("li",[v._v("里氏替换原则 告诉我们不要破坏继承体系")]),v._v(" "),t("li",[v._v("依赖倒置原则 告诉我们要面向接口编程")]),v._v(" "),t("li",[v._v("接口隔离原则 告诉我们在设计接口的时候要精简单一")]),v._v(" "),t("li",[v._v("迪米特法则 告诉我们要降低耦合")]),v._v(" "),t("li",[v._v("开闭原则 告诉我们要对扩展开放对修改关闭")])]),v._v(" "),t("blockquote",[t("p",[v._v("参考文章:")]),v._v(" "),t("ul",[t("li",[v._v("http://www.uml.org.cn/sjms/201211023.asp")])])])])}),[],!1,null,null,null);_.default=p.exports}}]);