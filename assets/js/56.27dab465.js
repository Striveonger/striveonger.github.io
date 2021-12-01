(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{560:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前几天把博客系统从GitHub 迁到了Gitee...结果发现Gitee Pages 自动发布服务, 是需要收费的. 做为一个白嫖党, 这怎么能忍呢..")]),s._v(" "),n("p",[s._v("于是, 在简书上找到了另一个白嫖党, 写的Python脚本, 实现自动发布Gitee Pages...")]),s._v(" "),n("p",[s._v("少废话, 先看代码")]),s._v(" "),n("div",{staticClass:"language-Python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webdriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chrome"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("options "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Options\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webdriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("by "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" By\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webdriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("support "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" expected_conditions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" EC\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webdriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("support"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ui "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" WebDriverWait "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Wait\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("build_blog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    重新生成 html\n    """')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start build blog"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build --prefix ~/development/workspace/blog/source"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"copy html files to publish"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cp -rf ~/development/workspace/blog/source/publish/ ~/development/workspace/blog/publish/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit gitee"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/publish/ add ."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/publish/ commit -m \\"update blog\\""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/publish/ push origin master"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("refresh_gitee_pages")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    重新发布 gitee pages\n    """')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start refresh gitee pages"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    repo_user_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"striveonger"')]),s._v("\n    repo_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog"')]),s._v("\n    login_user "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"striveonger"')]),s._v("\n    login_pwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"l************5"')]),s._v("\n\n    url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitee.com/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" repo_user_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" repo_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/pages"')]),s._v("\n\n    options "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--window-size=1920,1080"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--start-maximized"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--headless"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    browser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Chrome"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    Wait"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("presence_of_element_located"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CLASS_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item.git-nav-user__login-item"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"load finish. url="')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    login_btn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_class_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item.git-nav-user__login-item"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    login_btn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("click"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    Wait"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("presence_of_element_located"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Wait"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("presence_of_element_located"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login page load finish."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    user_input "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    pwd_input "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    login_btn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    user_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("login_user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    pwd_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("login_pwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    login_btn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("click"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    Wait"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("presence_of_element_located"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CLASS_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"button.orange.redeploy-button.ui.update_deploy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login finish."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    deploy_btn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_class_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'button.orange.redeploy-button.ui.update_deploy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute_script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"window.scrollTo(100, document.body.scrollHeight);"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    deploy_btn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("click"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    dialog "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("switch_to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alert\n    dialog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"refresh gitee pages finish."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    browser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit_source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    提交源文件\n    """')]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/source/ add ."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/source/ commit -m \\"update source\\""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git -C ~/development/workspace/blog/source/ push origin master"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    build_blog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    refresh_gitee_pages"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    commit_source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br")])]),n("p",[s._v("加入自定义的命令 "),n("code",[s._v("vim .bash_profile")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("refresh")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python3 ~/software/refresh.py'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("参考文章:")]),s._v(" "),n("ul",[n("li",[s._v("https://www.jianshu.com/p/19cc4eb0f199")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);