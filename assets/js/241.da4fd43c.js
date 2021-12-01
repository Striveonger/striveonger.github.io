(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{802:function(e,t,a){"use strict";a.r(t);var r=a(4),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("解决MacOS系统下SublimeText3中文乱码的问题")]),e._v(" "),a("h3",{attrs:{id:"_1、打开控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、打开控制台"}},[e._v("#")]),e._v(" 1、打开控制台")]),e._v(" "),a("p",[e._v("打开 sublime，"),a("code",[e._v("control")]),e._v("+"),a("code",[e._v("~")]),e._v("打开控制台。")]),e._v(" "),a("h3",{attrs:{id:"_2、下载-package-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载-package-control"}},[e._v("#")]),e._v(" 2、下载 Package Control")]),e._v(" "),a("p",[e._v("输入：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("详情见"),a("a",{attrs:{href:"https://packagecontrol.io/installation#st3",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"_3、下载converttoutf8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、下载converttoutf8"}},[e._v("#")]),e._v(" 3、下载"),a("code",[e._v("ConvertToUTF8")])]),e._v(" "),a("p",[e._v("重启"),a("code",[e._v("sublime")]),e._v("。"),a("code",[e._v("command")]),e._v("+"),a("code",[e._v("shift")]),e._v("+"),a("code",[e._v("p")]),e._v("，在输入框输入"),a("code",[e._v("Package Control: Install Package")]),e._v("，待载入所有的包目录后输入"),a("code",[e._v("ConvertToUTF8")]),e._v("，回车安装。")]),e._v(" "),a("h3",{attrs:{id:"_4、安装codecs33"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装codecs33"}},[e._v("#")]),e._v(" 4、安装"),a("code",[e._v("Codecs33")])]),e._v(" "),a("p",[e._v("如果重启"),a("code",[e._v("sublime")]),e._v("之后仍然无法正确解码，需要下载"),a("a",{attrs:{href:"https://github.com/seanliang/Codecs33/tree/osx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Codecs33"),a("OutboundLink")],1),e._v("。将下载完的压缩包解压，把文件夹的名字修改为"),a("code",[e._v("Codecs33")]),e._v("并放在"),a("code",[e._v("sublime")]),e._v("的"),a("code",[e._v("package")]),e._v("目录下。")]),e._v(" "),a("p",[e._v("重启之后就大功告成啦。")]),e._v(" "),a("blockquote",[a("p",[e._v("参考文章:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://qianfei11.github.io/2018/07/26/%E8%A7%A3%E5%86%B3Mac%E4%B8%8Bsublime-text%E4%B8%AD%E6%96%87%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81/",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决Mac下sublime text中文出现乱码"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);