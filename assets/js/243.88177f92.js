(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{767:function(n,s,a){"use strict";a.r(s);var l=a(0),e=Object(l.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("VBA 操作 Excel 数据筛查")]),n._v(" "),s("p",[n._v("今天要统计程序中用到了哪些表, 统计出来, 发现有很多重复的\n就想到用Excel筛一下")]),n._v(" "),s("div",{staticClass:"language-vbscript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Sub cal()\n'\n' cal 宏\n'\n\n    Dim num As Integer\n    Dim dataCol As Integer\n    Dim maxRow As Integer\n    Dim resultCol As Integer\n\n    num = 1\n    dataCol = 4\n    maxRow = 2728\n    resultCol = 6\n\n\n    For i = 1 To maxRow\n        For j = i + 1 To maxRow\n            If Cells(i, dataCol) = Cells(j, dataCol) And Not Cells(j, dataCol).Interior.Color = 65535 Then\n                Cells(j, dataCol).Interior.Color = 65535\n            End If\n        Next\n    Next\n\n    For i = 1 To maxRow\n        If Not Cells(i, dataCol).Interior.Color = 65535 Then\n            Cells(num, resultCol) = Cells(i, dataCol)\n            num = num + 1\n        End If\n    Next\n\nEnd Sub\n\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br")])]),s("p",[n._v("自定义了一个宏, 处理这个问题")])])}),[],!1,null,null,null);s.default=e.exports}}]);