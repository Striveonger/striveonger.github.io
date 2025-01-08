(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{435:function(s,t,a){s.exports=a.p+"assets/img/image-20210625104643672.3744c0c2.png"},436:function(s,t,a){s.exports=a.p+"assets/img/image-20210625143952384.7a8ca2a8.png"},437:function(s,t,a){s.exports=a.p+"assets/img/image-20210628155555714.e5827a99.png"},438:function(s,t,a){s.exports=a.p+"assets/img/image-20210628161422311.543522db.png"},439:function(s,t,a){s.exports=a.p+"assets/img/image-20210628162027913.76401323.png"},440:function(s,t,a){s.exports=a.p+"assets/img/image-20210628162458723.f113fca4.png"},441:function(s,t,a){s.exports=a.p+"assets/img/image-20210628163115265.9a9ee6e9.png"},442:function(s,t,a){s.exports=a.p+"assets/img/image-20210625165801182.8166c428.png"},443:function(s,t,a){s.exports=a.p+"assets/img/image-20210628163549476.4f4b63f7.png"},615:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Spring Security是一款基于Spring的安全框架, 主要包含"),t("strong",[s._v("认证")]),s._v("和"),t("strong",[s._v("授权")]),s._v("两大安全模块, 和另外一款流行的安全框架Apache Shiro相比, 它拥有更为强大的功能. Spring Security也可以轻松的自定义扩展以满足各种需求, 并且对常见的Web安全攻击提供了防护支持. 如果你的Web框架选择的是Spring, 那么在安全方面Spring Security会是一个不错的选择.")]),s._v(" "),t("p",[s._v("这里我们使用Spring Boot来集成Spring Security, Spring Boot版本为"),t("code",[s._v("2.3.0.RELEASE")]),s._v(", Spring Security版本为"),t("code",[s._v("5.3.2.RELEASE")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"开启spring-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启spring-security"}},[s._v("#")]),s._v(" 开启Spring Security")]),s._v(" "),t("p",[s._v("创建一个Spring Boot项目, 然后引入spring-boot-starter-security:")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-boot-starter-security"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("接下来我们创建一个TestController, 对外提供一个"),t("code",[s._v("/hello")]),s._v("服务:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dict")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pair")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pair")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这个配置开启了一个HTTP Basic类型的认证, 所有服务的访问都必须先过这个认证, 默认的用户名为"),t("code",[s._v("user")]),s._v(", 密码由Sping Security自动生成, 回到IDE的控制台, 可以找到密码信息:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Using default security password: e9ed391c-93de-4611-ac87-d871d9e749ac\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是自动生成的密码, 每次项目重启, 都会刷新. 我们尝试在"),t("code",[s._v("application.yml")]),s._v(" 中配置一下用户名和密码:")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" striveonger\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("尝试用Basic方式访问: http://striveonger:123456@localhost:8080/hello, 可看到是可以正常访问的:")]),s._v(" "),t("p",[t("img",{attrs:{src:a(435),alt:"image-20210625104643672"}})]),s._v(" "),t("p",[s._v("当Spring项目中引入了Spring Security依赖的时候, 默认会开启Basic配置:")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("basic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"基于表单认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于表单认证"}},[s._v("#")]),s._v(" 基于表单认证")]),s._v(" "),t("p",[s._v("我们可以通过一些配置将HTTP Basic认证修改为基于表单的认证方式。")]),s._v(" "),t("p",[s._v("创建一个配置类"),t("code",[s._v("WebSecurityConfig")]),s._v("继承"),t("code",[s._v("org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter")]),s._v("这个抽象类并重写"),t("code",[s._v("configure(HttpSecurity http)")]),s._v("方法. "),t("code",[s._v("WebSecurityConfigurerAdapter")]),s._v("是由Spring Security提供的Web应用安全配置的适配器:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('@EnableWebSecurity\npublic class WebSecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.authorizeRequests()\n                // 为login添加许可\n                .antMatchers("/login", "/login.html").permitAll()\n                // 验证所有请求\n                .anyRequest().authenticated()\n                .and()\n                // 允许用户使用表单登录进行身份认证\n                .formLogin()\n                .loginProcessingUrl("/login")\n                .loginPage("/login.html").permitAll()\n                .and()\n                // 允许用户使用HTTP基本认证(Basic认证方式与Form认证方式共存)\n                .httpBasic();\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("Spring Security提供了这种链式的方法调用. 上面配置指定了认证方式为"),t("strong",[s._v("form表单登录")]),s._v("和"),t("strong",[s._v("Basic登录")]),s._v(", 并且所有请求都需要进行认证.")]),s._v(" "),t("p",[s._v("这时候我们重启项目, 再次访问http://localhost:8080/hello, 可以看到认证方式已经是form表单的方式了:")]),s._v(" "),t("p",[t("img",{attrs:{src:a(436),alt:"image-20210625143952384"}})]),s._v(" "),t("blockquote",[t("p",[s._v("我们可以看到, 在访问 http://localhost:8080/hello 时, 被重定向到了 http://localhost:8080/login.html")]),s._v(" "),t("p",[s._v("如果用户或密码出错会跳转到 http://localhost:8080/login.html?error")])]),s._v(" "),t("h2",{attrs:{id:"基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[s._v("#")]),s._v(" 基本原理")]),s._v(" "),t("p",[t("img",{attrs:{src:a(437),alt:"image-20210628155555714"}})]),s._v(" "),t("h3",{attrs:{id:"登录过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录过程"}},[s._v("#")]),s._v(" 登录过程")]),s._v(" "),t("ol",[t("li",[s._v("通过"),t("code",[s._v("UsernamePasswordAuthenticationFilter")]),s._v(" 获取到参数中的"),t("strong",[s._v("用户名")]),s._v("与"),t("strong",[s._v("密码")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(438),alt:"image-20210628161422311"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建ProviderManaager")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(439),alt:"image-20210628162027913"}})]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("开始用Provider校验用户名和密码")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(440),alt:"image-20210628162458723"}})]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("验证用户名的有效性")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(441),alt:"image-20210628163115265"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(442),alt:"image-20210625165801182"}})]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("开始验证密码的正确性")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(443),alt:"image-20210628163549476"}})]),s._v(" "),t("blockquote",[t("p",[s._v("参考文章:")]),s._v(" "),t("ul",[t("li",[s._v("https://mrbird.cc/Spring-Boot&Spring-Security.html")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);