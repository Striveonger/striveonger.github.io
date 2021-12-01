(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{753:function(n,s,a){"use strict";a.r(s);var e=a(4),l=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("VBA 操作 Excel 数据筛查")]),n._v(" "),a("p",[n._v("今天要统计程序中用到了哪些表, 统计出来, 发现有很多重复的\n就想到用Excel筛一下")]),n._v(" "),a("div",{staticClass:"language-vbscript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Sub cal()\n'\n' cal 宏\n'\n\n    Dim num As Integer\n    Dim dataCol As Integer\n    Dim maxRow As Integer\n    Dim resultCol As Integer\n\n    num = 1\n    dataCol = 4\n    maxRow = 2728\n    resultCol = 6\n\n\n    For i = 1 To maxRow\n        For j = i + 1 To maxRow\n            If Cells(i, dataCol) = Cells(j, dataCol) And Not Cells(j, dataCol).Interior.Color = 65535 Then\n                Cells(j, dataCol).Interior.Color = 65535\n            End If\n        Next\n    Next\n\n    For i = 1 To maxRow\n        If Not Cells(i, dataCol).Interior.Color = 65535 Then\n            Cells(num, resultCol) = Cells(i, dataCol)\n            num = num + 1\n        End If\n    Next\n\nEnd Sub\n\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br")])]),a("p",[n._v("自定义了一个宏, 处理这个问题")])])}),[],!1,null,null,null);s.default=l.exports}}]);