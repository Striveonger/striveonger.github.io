(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{738:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("MacOS下重新授权SVN与初始化项目")]),s._v(" "),a("p",[s._v("因为测试服务器重装了, 所以...")]),s._v(" "),a("h4",{attrs:{id:"_1-清除本地svn授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-清除本地svn授权"}},[s._v("#")]),s._v(" 1. 清除本地SVN授权")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.subversion/auth/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-重新检出项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重新检出项目"}},[s._v("#")]),s._v(" 2. 重新检出项目")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("svn co https://192.168.10.20/svn/riwon-doc/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("在没有授权的情况下, 会要求输入"),a("code",[s._v("用户名")]),s._v("与"),a("code",[s._v("密码")]),s._v("进行授权")])]),s._v(" "),a("h4",{attrs:{id:"_3-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化项目"}},[s._v("#")]),s._v(" 3. 初始化项目")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("svn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ./rbi_revision_20190409/ https://192.168.10.20/svn/data-et/trunk -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"init"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);