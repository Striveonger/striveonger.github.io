(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{674:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("Java中的浮点数计算")]),this._v(" "),t("p",[this._v('一般各种编程语言都采用IEEE的浮点数规范，Java也不例外，float类型浮点数共32位，其中1个符号位，23个有效数字位，8个指数位；任何也数字都将表示成（M 乘 2的N次方）的形式，其中M是含符号的23位二进制数字，N是8位二进制数。可以算一下，十进制小数中只有类似0.5、0.25、0.125、0.75...这些以5结尾数可以精确的表示，其他的数字只能近似表示，也就是说23位有效数字的最后一位是不可靠的并不能精确的"相等"，只是在0和1这两个都不准确的数中选了一个相对准一点儿的。\n回到题目，第1个，IEEE规范和硬件无关，只要数字位数一样就是一样计算逻辑。然后1.0f-0.9f到底等不等于0.9f-0.8f ？其实单看题目是没法简单的给出答案的，除非把这三个数字的二进制表示算出来，再把这个减法做了，再看最后的二进制表示到底一不一样。但是，1.0f是可以精确表示的，另外两个不能，大概率不相等，选B。给工程的启示是，不要比较"浮点数"精确相等，一般都用abs(a-b)<某个常量来判断是否相等。')])])}),[],!1,null,null,null);s.default=o.exports}}]);