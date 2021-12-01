(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{715:function(o,e,t){"use strict";t.r(e);var l=t(4),s=Object(l.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("p",[o._v("Linux使用 yum 安装MySQL")]),o._v(" "),t("p",[o._v("下载")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm")])])]),o._v(" "),t("p",[o._v("安装 mysql 源")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("yum localinstall mysql57-community-release-el7-11.noarch.rpm")])])]),o._v(" "),t("p",[o._v("使用 yum install 命令安装")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("yum install -y mysql-community-server")])])]),o._v(" "),t("p",[o._v("启动 MySQL 服务")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("systemctl start mysqld")])])]),o._v(" "),t("p",[o._v("设置开机启动")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("systemctl enable mysqld")])])]),o._v(" "),t("p",[o._v("重载所有修改过的配置文件")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("systemctl daemon-reload")])])]),o._v(" "),t("p",[o._v("修改 root 本地账户密码")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("grep 'temporary password' /var/log/mysqld.log")])]),o._v(" "),t("p",[t("code",[o._v("set password for 'root'@'localhost'=password('MyNewPass4!');")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);