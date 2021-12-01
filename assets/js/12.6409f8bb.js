(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{512:function(s,t,a){s.exports=a.p+"assets/img/image-20210217173411232.df2c392d.png"},513:function(s,t,a){s.exports=a.p+"assets/img/image-20210217174423214.6e0a832b.png"},514:function(s,t,a){s.exports=a.p+"assets/img/image-20210217180230960.299f97c4.png"},515:function(s,t,a){s.exports=a.p+"assets/img/image-20210217202737520.7c850c02.png"},657:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("学习动态规划(Dynamic Programming)算法的学习笔记")]),s._v(" "),n("p",[n("strong",[s._v("动态规划问题的一般形式就是求最值")]),s._v("。动态规划其实是运筹学的一种最优化方法，只不过在计算机问题上应用比较多，比如说让你求"),n("strong",[s._v("最长")]),s._v("递增子序列呀，"),n("strong",[s._v("最小")]),s._v("编辑距离呀等等。")]),s._v(" "),n("p",[s._v("既然是要求最值，核心问题是什么呢？"),n("strong",[s._v("求解动态规划的核心问题是穷举")]),s._v("。因为要求最值，肯定要把所有可行的答案穷举出来，然后在其中找最值呗。")]),s._v(" "),n("p",[s._v("动态规划这么简单，就是穷举就完事了？我看到的动态规划问题都很难啊！")]),s._v(" "),n("p",[s._v("首先，动态规划的穷举有点特别，因为这类问题"),n("strong",[s._v("存在「重叠子问题」")]),s._v("，如果暴力穷举的话效率会极其低下，所以需要**「备忘录」"),n("strong",[s._v("或者")]),s._v("「DP table」**来优化穷举过程，避免不必要的计算。")]),s._v(" "),n("p",[s._v("而且，动态规划问题一定会"),n("strong",[s._v("具备「最优子结构」")]),s._v("，才能通过子问题的最值得到原问题的最值。")]),s._v(" "),n("p",[s._v("另外，虽然动态规划的核心思想就是穷举求最值，但是问题可以千变万化，穷举所有可行解其实并不是一件容易的事，只有列出**正确的「状态转移方程」**才能正确地穷举。")]),s._v(" "),n("h4",{attrs:{id:"斐波那契数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/fibonacci-number/",target:"_blank",rel:"noopener noreferrer"}},[s._v("斐波那契数"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("img",{attrs:{src:a(512),alt:"image-20210217173411232"}})]),s._v(" "),n("p",[s._v("常规的解法(递归), 会重复计算 "),n("strong",[s._v("重叠子问题")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(513),alt:"image-20210217174423214"}})]),s._v(" "),n("p",[s._v("比如 "),n("code",[s._v("fib(5)")]),s._v(" 在上面的例子中,就计算了两次. 这样的话, 时间复杂度, 会是 "),n("code",[s._v("O(2^n)")]),s._v(" , 但是 "),n("code",[s._v("fib(7-2)")]),s._v(" 的个分支, 是没有必要展开的. 因为在"),n("code",[s._v("fib(7-1)")]),s._v(" 时, 咱们已经计算过"),n("code",[s._v("fib(5)")]),s._v(" 了")]),s._v(" "),n("h5",{attrs:{id:"递归的题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归的题解"}},[s._v("#")]),s._v(" 递归的题解")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ----recursion-----")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当我们尝试, 将计算的值使用 "),n("strong",[s._v("「备忘录」")]),s._v(" 存储来时")]),s._v(" "),n("p",[n("img",{attrs:{src:a(514),alt:"image-20210217180230960"}})]),s._v(" "),n("p",[s._v("时间复杂度, 会从 "),n("code",[s._v("O(2^n)")]),s._v("  降到 "),n("code",[s._v("O(n)")])]),s._v(" "),n("h5",{attrs:{id:"动态规划的题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的题解"}},[s._v("#")]),s._v(" 动态规划的题解")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#----dp-----")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                t "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n                x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y\n                y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("面对动态规划的问题, 正确的列出**「状态转移方程」** 才是解决问题的关键(就是选和不选的问题)")]),s._v(" "),n("h4",{attrs:{id:"打家劫舍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/house-robber/",target:"_blank",rel:"noopener noreferrer"}},[s._v("打家劫舍"),n("OutboundLink")],1)]),s._v(" "),n("blockquote",[n("p",[s._v("经典的动态规划的问题")])]),s._v(" "),n("p",[s._v("看一下, 我的解题过程哈~")]),s._v(" "),n("h5",{attrs:{id:"首先列出-「状态转移方程」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#首先列出-「状态转移方程」"}},[s._v("#")]),s._v(" 首先列出**「状态转移方程」**")]),s._v(" "),n("p",[n("img",{attrs:{src:a(515),alt:"image-20210217202737520"}})]),s._v(" "),n("p",[n("code",[s._v("opt(i)")]),s._v("  等于 "),n("code",[s._v("vi + opt(i-2)")]),s._v(" 和 "),n("code",[s._v("opt(i-1)")]),s._v(" 中的最大值.")]),s._v(" "),n("h5",{attrs:{id:"python的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python的实现"}},[s._v("#")]),s._v(" Python的实现")]),s._v(" "),n("blockquote",[n("p",[s._v("通过**「DP table」**来优化穷举过程")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("opt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vi "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("opt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("动态规划的问题,  大多最后都能归到选和不选的问题上. 只要列好**「状态转移方程」**, 问题就不大. 嘿嘿, 以后看到这种问题, 再也不会害怕了.")])])}),[],!1,null,null,null);t.default=e.exports}}]);