(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{513:function(s,a,n){s.exports=n.p+"assets/img/image-20210522124635126.6d06822c.png"},514:function(s,a,n){s.exports=n.p+"assets/img/image-20210522124919224.0f9415c4.png"},515:function(s,a,n){s.exports=n.p+"assets/img/image-20210522125232169.c7657b1a.png"},516:function(s,a,n){s.exports=n.p+"assets/img/image-20210522125120624.48b90e11.png"},517:function(s,a,n){s.exports=n.p+"assets/img/image-20210522125714010.8ec89201.png"},518:function(s,a,n){s.exports=n.p+"assets/img/image-20210522130122956.fb049e88.png"},519:function(s,a,n){s.exports=n.p+"assets/img/image-20210522130247620.a48962c5.png"},520:function(s,a,n){s.exports=n.p+"assets/img/image-20210522130622904.d81c8f3a.png"},521:function(s,a,n){s.exports=n.p+"assets/img/image-20210522130736136.08ea9742.png"},522:function(s,a,n){s.exports=n.p+"assets/img/image-20210522131104655.5c522951.png"},769:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("最近在把设计模式, 重新拾起来....设计模式中, 大量使用"),a("code",[s._v("UML类图")]),s._v("...所以就先做UML的笔记吧")]),s._v(" "),a("p",[s._v("类图呢, 主要在表示类之间的关系,  我们就着重看下这部分内容...其他的用的时候查文档也来的及.")]),s._v(" "),a("h2",{attrs:{id:"类之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类之间的关系"}},[s._v("#")]),s._v(" 类之间的关系")]),s._v(" "),a("h3",{attrs:{id:"关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联"}},[s._v("#")]),s._v(" 关联")]),s._v(" "),a("p",[s._v("关联相对独立就先说他吧")]),s._v(" "),a("h4",{attrs:{id:"单向关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向关联"}},[s._v("#")]),s._v(" 单向关联")]),s._v(" "),a("p",[a("img",{attrs:{src:n(513),alt:"image-20210522124635126"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 单向关联\nStudent --\x3e Teacher\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"双向关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向关联"}},[s._v("#")]),s._v(" 双向关联")]),s._v(" "),a("p",[a("img",{attrs:{src:n(514),alt:"image-20210522124919224"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 双向关联\nStudent1 -- Teacher1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"自身关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自身关联"}},[s._v("#")]),s._v(" 自身关联")]),s._v(" "),a("p",[a("img",{attrs:{src:n(515),alt:"image-20210522125232169"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 自身关联\nStudent2 -- Student2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"多纬关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多纬关联"}},[s._v("#")]),s._v(" 多纬关联")]),s._v(" "),a("p",[a("img",{attrs:{src:n(516),alt:"image-20210522125120624"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 多纬关联\n<> diamond\nStudent3 -- diamond\ndiamond -- Teacher3\ndiamond -- Book\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("p",[a("img",{attrs:{src:n(517),alt:"image-20210522125714010"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 依赖关系(鸟依赖水和空气)\nAnimal ..> Air: 依赖关系(鸟依赖空气)\nAnimal ..> Water: 依赖关系(鸟依赖水)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合"}},[s._v("#")]),s._v(" 组合")]),s._v(" "),a("p",[a("img",{attrs:{src:n(518),alt:"image-20210522130122956"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\' 组合关系(鸟需要一对翅膀)\nFowl "1" *--\x3e "2" Wings: 组合关系(鸟需要一对翅膀, 是一种强"拥有"的关系)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[s._v("#")]),s._v(" 聚合")]),s._v(" "),a("p",[a("img",{attrs:{src:n(519),alt:"image-20210522130247620"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\' 聚合关系(翅膀需要羽毛)\nWings "1" o--\x3e "n" Feather: 聚合关系(翅膀包含多根羽毛, 是一种弱"拥有"的关系)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[s._v("#")]),s._v(" 泛型")]),s._v(" "),a("h4",{attrs:{id:"接口实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口实现"}},[s._v("#")]),s._v(" 接口实现")]),s._v(" "),a("p",[a("img",{attrs:{src:n(520),alt:"image-20210522130622904"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 实现接口\nWildGoose ..|> Fly\nPenguin ..|> Fly\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),a("p",[a("img",{attrs:{src:n(521),alt:"image-20210522130736136"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("' 继承\nWildGoose --|> Fowl\nDuck --|> Fowl\nPenguin --|> Fowl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"完整的描述文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的描述文件"}},[s._v("#")]),s._v(" 完整的描述文件")]),s._v(" "),a("p",[a("img",{attrs:{src:n(522),alt:"image-20210522131104655"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@startuml\n'https://plantuml.com/class-diagram\n\n'top to bottom direction\nleft to right direction\n\n' 水\nclass Water {\n    int H2O\n}\n\n' 空气\nclass Air {\n    int O2\n}\n\n' 动物\nabstract Animal <<abstract>> {\n    ' 是否有生命\n    boolean isBeing\n\n    ' 代谢\n    void metabolism(Water water, Air air)\n\n    ' 繁育\n    abstract Animal breed()\n}\n\n' 鸟\nabstract Fowl <<abstract>> {\n\n    Feather feather\n\n    ' 繁育\n    Animal breed()\n    ' 下蛋\n    abstract Animal layEggs()\n\n}\n\n' 羽毛\nclass Feather\n\n' 翅膀\nclass Wings\n\n' 飞\ninterface Fly <<interface>> {\n    void fly()\n}\n\n' 大雁\nclass WildGoose {\n    Animal layEggs()\n    void fly()\n}\n\n' 鸭子\nclass Duck {\n    Animal layEggs()\n}\n\n' 企鹅\nclass Penguin {\n    Animal layEggs()\n    void fly()\n}\n\n' 组合与聚合的描述\nnote \"翅膀可以多一根或少一根羽毛,\\n但是鸟多一个翅膀或少一个翅膀你试试...\" as Note1\n\n\n\n' 开始描述类之间的关系\n\n' 依赖关系(鸟依赖水和空气)\nAnimal ..> Air: 依赖关系(鸟依赖空气)\nAnimal ..> Water: 依赖关系(鸟依赖水)\n\n' 继承关系(鸟继承动物)\nFowl --|> Animal: 继承关系(鸟继承动物)\n\n' 组合关系(鸟需要一对翅膀)\nFowl \"1\" *--\x3e \"2\" Wings: 组合关系(鸟需要一对翅膀, 是一种强\"拥有\"的关系)\n\n' 聚合关系(翅膀需要羽毛)\nWings \"1\" o--\x3e \"n\" Feather: 聚合关系(翅膀包含多根羽毛, 是一种弱\"拥有\"的关系)\n\n' 添加描述\nWings .. Note1\nNote1 .. Feather\n\n' 继承\nWildGoose --|> Fowl\nDuck --|> Fowl\nPenguin --|> Fowl\n\n' 实现接口\nWildGoose ..|> Fly\nPenguin ..|> Fly\n\n' -----------------------------------------------------------------------\n\n' 关联关系的描述\n\n' 单向关联\nStudent --\x3e Teacher\n\n' 双向关联\nStudent1 -- Teacher1\n\n' 自身关联\nStudent2 -- Student2\n\n' 多纬关联\n<> diamond\nStudent3 - diamond\ndiamond - Teacher3\ndiamond -- Book\n\n@enduml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br")])]),a("p",[s._v("注: 我这里用的是IDEA 的 "),a("code",[s._v("PlantUML")]),s._v(" 插件, 唯一不好的点就是, 布局无法控制. 不过描述类之间的关系, 还是够用的")])])}),[],!1,null,null,null);a.default=e.exports}}]);