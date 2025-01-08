(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{506:function(s,t,a){s.exports=a.p+"assets/img/image-20240603120432529.59abd5be.png"},765:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("基于 Pytest 做接口测试报告")]),s._v(" "),t("h3",{attrs:{id:"_1-安装-httprunner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-httprunner"}},[s._v("#")]),s._v(" 1. 安装 HttpRunner")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ksSL")]),s._v(" https://httprunner.com/script/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("参考: https://httprunner.com/docs/user-guide/installation/")])]),s._v(" "),t("h3",{attrs:{id:"_2-初始化新的python执行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化新的python执行环境"}},[s._v("#")]),s._v(" 2. 初始化新的Python执行环境")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并是生效环境")]),s._v("\n❯ python3 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" venv ~/.hrp/venv\n❯ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.hrp/venv/bin/activate\n\n❯ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.hrp/venv/pip.conf")]),s._v("\n[global]\nindex-url=http://mirrors.aliyun.com/pypi/simple/\n\n[install]\ntrusted-host=mirrors.aliyun.com\nEOF")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n❯ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httprunner "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" --disable-pip-version-check "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --index-url http://mirrors.aliyun.com/pypi/simple\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"_3-生成-pytest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成-pytest"}},[s._v("#")]),s._v(" 3. 生成 Pytest")]),s._v(" "),t("h4",{attrs:{id:"_3-1-根据har文件生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-根据har文件生成"}},[s._v("#")]),s._v(" 3.1 根据har文件生成")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hrp convert --from-har tree.har --to-pytest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(506),alt:"image-20240603120432529"}})]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("pytest tree_test_test.py")])])]),s._v(" "),t("h4",{attrs:{id:"_3-2-根据-yaml-生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-根据-yaml-生成"}},[s._v("#")]),s._v(" 3.2 根据 yaml 生成")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"omm"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("base_url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.2.23:58082"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("teststeps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"创建监控对象"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" POST\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api/v1/indicator/create"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("headers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*/*;q=0.5"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application/json\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("X-Requested-With")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" XMLHttpRequest\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("hamal\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("hamal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("task\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ETL任务\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("region")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.0.0\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host_ip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.40.10.2\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("hamal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("task\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exporters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.10.126:9999'")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metricPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /actuator/prometheus\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("validate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" status_code\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" equals\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" assert response status code\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' headers."Content'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('Type"\n          '),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" equals\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application/json\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" assert response header Content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Type\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" body.status\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" equals\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ax1000700001\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" assert response body status\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" body.statusMsg\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" equals\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 正常返回数据\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" assert response body statusMsg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("hrun omm.yaml")])]),s._v(" "),t("p",[t("code",[s._v("hrp convert --from-yaml omm.yaml --to-pytest")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);