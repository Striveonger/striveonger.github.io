(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{601:function(e,a,r){"use strict";r.r(a);var t=r(4),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Hive遇到FAILED: Execution Error, return code 2 from org.apache.hadoop.hive.ql.exec.mr.MapRedTask错误")]),e._v(" "),r("h4",{attrs:{id:"起因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[e._v("#")]),e._v(" 起因:")]),e._v(" "),r("p",[e._v("Hive数据源, 要测试Kerberos认证方式. 在开启Kerberos认证之前, 是可以正常查询的.")]),e._v(" "),r("p",[e._v("在开启Kerberos认证之后, 通过Kerberos认证方式, 查询也是没有问题的.")]),e._v(" "),r("p",[e._v("在关闭Kerberos认证后, 尝试用普通认证方式查询, 仍然可以正常查询.")]),e._v(" "),r("p",[e._v("但在关闭Kerberos认证情况下, 尝试用Kerberos认证方式查询, 报认证失败后, 再次用普通认证方式查询时, 就会报"),r("code",[e._v("FAILED: Execution Error, return code 2 from org.apache.hadoop.hive.ql.exec.mr.MapRedTask")]),e._v(" 错误.")]),e._v(" "),r("p",[e._v("这个报错还具有偶发性.")]),e._v(" "),r("h4",{attrs:{id:"解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[e._v("#")]),e._v(" 解决:")]),e._v(" "),r("p",[e._v("据排查,   报错原因是 项目中所查询的库由Spark所创建. 但是我使用"),r("code",[e._v("hive")]),e._v(" 用户查询Hive时, "),r("code",[e._v("hive")]),e._v("用户, 没有访问所要查询表目录的权限.")]),e._v(" "),r("p",[e._v("修改用户权限后, 仍旧报错.")]),e._v(" "),r("p",[e._v("查看Spark Job的执行日志, 看到以下的报错信息:")]),e._v(" "),r("div",{staticClass:"language-verilog line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-verilog"}},[r("code",[e._v("Application application_1581349098902_0008 failed "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" times due to AM Container "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" appattempt_1581349098902_0008_000002 exited "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" exitCode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\nFor more detailed "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("output")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" check application tracking page"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("http"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//namenode01:8088/proxy/application_1581349098902_0008/Then, click on links to logs of each attempt.")]),e._v("\nDiagnostics"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Not able to initialize app directories in any of the configured "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("local")]),e._v(" directories "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" app application_1581349098902_0008\nFailing "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),e._v(" attempt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" Failing the application"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("blockquote",[r("p",[e._v("这个其实是一个权限问题，在yarn初始化作业的时候就报错了。是CDH去除kerberos的时候，未重新更新目录权限，如果之前在kerberos环境下已经用过yarn，已经存在对应的目录。去除kerberos之后，未更新权限，导致新作业失败。未启用kerberos前，/yarn/nm/usercache/test目录权限为yarn:yarn，启用后变成test:yarn，权限不兼容，导致yarn生成日志失败，故作业失败。")])]),e._v(" "),r("p",[e._v("找到问题就好办啦...")]),e._v(" "),r("h5",{attrs:{id:"解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[e._v("#")]),e._v(" 解决办法")]),e._v(" "),r("ol",[r("li",[e._v("查找 "),r("code",[e._v("NodeManager")]),e._v("节点")])]),e._v(" "),r("p",[e._v("![image-20200510114911282](/Users/selfimpr/Library/Application Support/typora-user-images/image-20200510114911282.png)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("获取 "),r("code",[e._v("yarn.nodemanager.local-dirs")])]),e._v(" "),r("p",[e._v("![image-20200510115050570](/Users/selfimpr/Library/Application Support/typora-user-images/image-20200510115050570.png)")])]),e._v(" "),r("li",[r("p",[e._v("到"),r("code",[e._v("NodeManager")]),e._v("的"),r("code",[e._v("yarn.nodemanager.local-dirs")]),e._v("，删除"),r("code",[e._v("usercache")]),e._v("目录")]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /data01/yarn/nm/usercache/*\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("重启 "),r("code",[e._v("yarn")]),e._v("组件")])])]),e._v(" "),r("p",[e._v("![image-20200510115406869](/Users/selfimpr/Library/Application Support/typora-user-images/image-20200510115406869.png)")])])}),[],!1,null,null,null);a.default=s.exports}}]);