(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{724:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"docker-官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-官网"}},[s._v("#")]),s._v(" Docker 官网")]),s._v(" "),a("p",[s._v("https://hub.docker.com/_/microsoft-mssql-server?tab=description")]),s._v(" "),a("h3",{attrs:{id:"官方教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方教程"}},[s._v("#")]),s._v(" 官方教程")]),s._v(" "),a("p",[s._v("https://docs.microsoft.com/en-us/sql/linux/tutorial-restore-backup-in-sql-server-container?view=sql-server-ver15")]),s._v(" "),a("h3",{attrs:{id:"启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动命令"}},[s._v("#")]),s._v(" 启动命令")]),s._v(" "),a("p",[s._v("docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Asdfgh123' "),a("br"),s._v("\n-p 1433:1433 --name sql-server "),a("br"),s._v("\n-d mcr.microsoft.com/mssql/server:2017-latest")]),s._v(" "),a("h3",{attrs:{id:"还原备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#还原备份"}},[s._v("#")]),s._v(" 还原备份")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" sql-server /opt/mssql-tools/bin/sqlcmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" sa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" Asdfgh123 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RESTORE FILELISTONLY FROM DISK = \"/var/opt/mssql/backup/20201229.bak\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" sql-server /opt/mssql-tools/bin/sqlcmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" SA "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" Asdfgh123 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'RESTORE DATABASE cwbasetjcs FROM DISK = "/var/opt/mssql/backup/20201229.bak" WITH MOVE "cwbasetjcs_DAT" TO "/var/opt/mssql/data/cwbasetjcs.mdf" , MOVE "cwbasetjcs_log" TO "/var/opt/mssql/data/cwbasetjcs.ldf"\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);