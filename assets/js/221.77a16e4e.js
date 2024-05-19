(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{749:function(s,t,v){"use strict";v.r(t);var e=v(0),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("向文件指定行插入内容")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编辑命令'")]),s._v(" 文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("常用选项：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-i")]),s._v("：直接在文件中进行修改，而不是输出到标准输出。")]),s._v(" "),t("li",[t("code",[s._v("-e")]),s._v("：允许在命令行中指定多个编辑命令。")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v("：关闭默认的输出，只有经过编辑的行才会被输出。")])]),s._v(" "),t("p",[s._v("常用编辑命令：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("s/原始内容/替换内容/g")]),s._v("：替换文本中的内容。")]),s._v(" "),t("li",[t("code",[s._v("d")]),s._v("：删除指定的行。")]),s._v(" "),t("li",[t("code",[s._v("p")]),s._v("：打印指定的行。")]),s._v(" "),t("li",[t("code",[s._v("a")]),s._v("：在指定的行后面添加文本。")]),s._v(" "),t("li",[t("code",[s._v("i")]),s._v("：在指定的行前面插入文本。")]),s._v(" "),t("li",[t("code",[s._v("c")]),s._v("：用新文本替换指定的行。")]),s._v(" "),t("li",[t("code",[s._v("y/字符集1/字符集2/")]),s._v("：将字符集1中的字符替换为字符集2中的对应字符。")])]),s._v(" "),t("p",[s._v("现在有需求, 在文件倒数第三行, 插入一条数据")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" xxx.txt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v(' a sssQ"')]),s._v(" xxx.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在这个命令中：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("wc -l < xxx.txt")]),s._v(" 用于计算文件 "),t("code",[s._v("xxx.txt")]),s._v(" 中的总行数。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("$(())")]),s._v(" 用于执行算术运算，计算倒数第三行的行号。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sed -i")]),s._v(" 用于直接在文件中进行修改。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("a")]),s._v(" 表示在指定行后追加内容。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sssQ")]),s._v(" 是要追加的内容，你可以根据需要进行替换。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("xxx.txt")]),s._v(" 是要操作的文件名。")])])]),s._v(" "),t("p",[s._v("这样就会在 "),t("code",[s._v("xxx.txt")]),s._v(" 文件的倒数第三行后面追加内容 "),t("code",[s._v("sssQ")]),s._v("。")])])}),[],!1,null,null,null);t.default=a.exports}}]);