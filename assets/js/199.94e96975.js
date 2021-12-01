(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{727:function(s,r,e){"use strict";e.r(r);var t=e(4),n=Object(t.a)({},(function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("在CentOS7.3下, 安装 Redis 3.2.9")]),s._v(" "),e("ol",[e("li",[s._v("下载Redis")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("wget http://download.redis.io/releases/redis-3.2.9.tar.gz")])])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("解压Redis")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("tar -zxvf redis-3.2.9.tar.gz")])])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("进入目录, 进行编译测试")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("cd redis-3.2.9")]),s._v(" "),e("code",[s._v("make test")])])]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("安装到指定目录")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("make PREFIX=/usr/local/redis install")])])]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("复制配置文件到安装目录下")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("cp redis.conf /usr/local/redis/bin")])])]),s._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[s._v("查看目录下的文件列表")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@jstu7y7f2y8et7 ~]# cd /usr/local/redis/bin/\n[root@jstu7y7f2y8et7 bin]# ll\ntotal 15160\n-rw-r--r-- 1 root root      76 Oct 12 10:27 dump.rdb\n-rwxr-xr-x 1 root root 2431824 Oct 11 18:01 redis-benchmark\n-rwxr-xr-x 1 root root   25168 Oct 11 18:01 redis-check-aof\n-rwxr-xr-x 1 root root 5181840 Oct 11 18:01 redis-check-rdb\n-rwxr-xr-x 1 root root 2584848 Oct 11 18:01 redis-cli\n-rw-r--r-- 1 root root   46753 Apr 23 16:09 redis.conf\n-rw-r--r-- 1 root root   46696 Oct 12 10:29 redis.conf.bak\nlrwxrwxrwx 1 root root      12 Oct 11 18:01 redis-sentinel -> redis-server\n-rwxr-xr-x 1 root root 5181840 Oct 11 18:01 redis-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("blockquote",[e("p",[e("code",[s._v("redis-benchmark")]),s._v("   redis性能测试工具\n"),e("code",[s._v("redis-check-aof")]),s._v("   AOF文件修复工具\n"),e("code",[s._v("redis-check-rdb")]),s._v("   RDB文件修复工具\n"),e("code",[s._v("redis-cli")]),s._v("              redis命令行客户端\n"),e("code",[s._v("redis.conf")]),s._v("            redis配置文件\n"),e("code",[s._v("redis-sentinal")]),s._v("     redis集群管理工具\n"),e("code",[s._v("redis-server")]),s._v("         redis服务进程")])]),s._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[s._v("配置启动方式")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("vim /usr/local/redis/bin/redis.conf")]),s._v("\n修改 "),e("code",[s._v("daemonize no")]),s._v(" --\x3e "),e("code",[s._v("daemonize yes")])])]),s._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[s._v("启动服务")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf")])])]),s._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[s._v("使用 "),e("code",[s._v("redis-cli")]),s._v(" 测试")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@jstu7y7f2y8et7 ~]# redis-cli\n127.0.0.1:6379> set test aaaa\n(error) NOAUTH Authentication required.\n127.0.0.1:6379> auth 123456\nOK\n127.0.0.1:6379> set test kkkk\nOK\n127.0.0.1:6379> get test\n"kkkk"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("blockquote",[e("p",[e("code",[s._v("auth")]),s._v(" 输入密码, 进行授权登录")])])])}),[],!1,null,null,null);r.default=n.exports}}]);