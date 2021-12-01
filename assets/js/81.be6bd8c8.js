(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{585:function(_,t,a){"use strict";a.r(t);var r=a(4),s=Object(r.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("靠谱点儿...")]),_._v(" "),a("h3",{attrs:{id:"_1-数据库事务-视图-数据库建模-sql语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库事务-视图-数据库建模-sql语法"}},[_._v("#")]),_._v(" 1. 数据库事务, 视图,  数据库建模, SQL语法")]),_._v(" "),a("h5",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[_._v("#")]),_._v(" 事务:")]),_._v(" "),a("p",[a("strong",[_._v("数据库事务(Transanction)")]),_._v(" 正确执行的四个基本要素。ACID,原子性(Atomicity)、一致性(Correspondence)、隔离性(Isolation)、持久性(Durability)。\n**原子性:**整个事务中的所有操作，要么全部完成，要么全部不完成，不可能停滞在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。\n**一致性:**在事务开始之前和事务结束以后，数据库的完整性约束没有被破坏。\n**隔离性:**隔离状态执行事务，使它们好像是系统在给定时间内执行的唯一操作。如果有两个事务，运行在相同的时间内，执行 相同的功能，事务的隔离性将确保每一事务在系统中认为只有该事务在使用系统。这种属性有时称为串行化，为了防止事务操作间的混淆，必须串行化或序列化请求，使得在同一时间仅有一个请求用于同一数据。\n**持久性:**在事务完成以后，该事务所对数据库所作的更改便持久的保存在数据库之中，并不会被回滚。")]),_._v(" "),a("h5",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[_._v("#")]),_._v(" 视图")]),_._v(" "),a("p",[_._v("**视图:**是虚拟的表，与包含数据的表不一样，视图只包含使用时动态检索数据的查询；不包含任何列或数据。使用视图可以简化复杂的SQL操作，隐藏具体的细节，保护数据；视图创建后，可以使用与表相同的方式利用它们。")]),_._v(" "),a("p",[a("strong",[_._v("视图")]),_._v("不能被索引，也不能有关联的触发器或默认值，如果视图本身内有order by 则对视图再次order by将被覆盖。")]),_._v(" "),a("p",[a("strong",[_._v("关于更新视图:")]),_._v(" 对于未使用联结子查询分组聚集函数Distinct Union等的视图, 是可以对其更新的. 但是视图主要用于简化检索, 保护数据, 并不用于更新.")]),_._v(" "),a("h5",{attrs:{id:"数据库建模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库建模"}},[_._v("#")]),_._v(" 数据库建模")]),_._v(" "),a("p",[_._v("设计数据库时, 应尽可能遵循"),a("strong",[_._v("三范式设计")])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("第一范式(1NF)：字段值具有原子性,不能再分(所有关系型数据库系统都满足第一范式);\n如：姓名字段,其中姓和名是一个整体,如果区分姓和名那么必须设立两个独立字段;")])]),_._v(" "),a("li",[a("p",[_._v("第二范式(2NF)：一个表必须有主键,即每行数据都能被唯一的区分;\n备注：必须先满足第一范式;")])]),_._v(" "),a("li",[a("p",[_._v("第三范式(3NF)：一个表中不能包涵其他相关表中非关键字段的信息,即数据表不能有沉余字段;\n备注：必须先满足第二范式;(可能会存在空间换时间的情况, 有些时候, 是不满足第三范式的)")])])]),_._v(" "),a("h3",{attrs:{id:"_2-mysql特点-正确使用索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql特点-正确使用索引"}},[_._v("#")]),_._v(" 2. MySQL特点, 正确使用索引")]),_._v(" "),a("h5",{attrs:{id:"mysql特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql特点"}},[_._v("#")]),_._v(" MySQL特点")]),_._v(" "),a("ol",[a("li",[a("p",[a("strong",[_._v("功能强大:")]),_._v("  MySQL支持事务、视图、存储过程和触发器等.")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("支持跨平台")])])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("运行速度快")]),_._v(", 高速是MySQL的显著特性。")])]),_._v(" "),a("li",[a("p",[_._v("**成本低: **MySQL数据库是一种完全免费的产品")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("数据库存储容量大")])])])]),_._v(" "),a("h5",{attrs:{id:"mysql-hbase-elasticsearch-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-hbase-elasticsearch-的区别"}},[_._v("#")]),_._v(" MySQL, HBase, ElasticSearch 的区别")]),_._v(" "),a("p",[_._v("互联网时代各种存储框架层出不穷, 传统的关系型数据库：Oracle、MySQL；新兴的NoSQL：HBase、Cassandra、Redis；全文检索框架：ElasticSearch、Solr等。")]),_._v(" "),a("p",[_._v("**MySQL：**关系型数据库，主要面向OLTP，支持事务，支持二级索引，支持sql，支持主从、Group Replication架构模型（本文全部以Innodb为例，不涉及别的存储引擎）。")]),_._v(" "),a("p",[_._v("**HBase：**基于HDFS，支持海量数据读写（尤其是写），支持上亿行、上百万列的，面向列的分布式NoSql数据库。天然分布式，主从架构，不支持事务，不支持二级索引，不支持sql。")]),_._v(" "),a("p",[_._v("**ElasticSearch：**ES是一款分布式的全文检索框架，底层基于Lucene实现，虽然ES也提供存储，检索功能，但我一直不认为ES是一款数据库，但是随着ES功能越来越强大，与数据库的界限也越来越模糊。天然分布式，p2p架构，不支持事务，采用倒排索引提供全文检索。")]),_._v(" "),a("h3",{attrs:{id:"_3-常见sql优化技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见sql优化技巧"}},[_._v("#")]),_._v(" 3. 常见SQL优化技巧")]),_._v(" "),a("p",[_._v("我说一下从自己的一些优化SQL的经历, 总结的技巧. 拿到慢SQL后, 先改SQL中存在的问题. 比如条件里套件中存在的 "),a("code",[_._v("<>")]),_._v(", "),a("code",[_._v("in")]),_._v(",  "),a("code",[_._v("过多的SQL嵌套")]),_._v(", 修改后,拆分执行具体哪一句, 影响了速度. 根据具体情况, 加"),a("code",[_._v("联合索引")]),_._v(", "),a("code",[_._v("拆表")]),_._v(", "),a("code",[_._v("加冗余表(空间换时间的手段)")]),_._v(". 技术论坛里, 很多用 "),a("code",[_._v("EXPLAIN")]),_._v(" (查看索引是否起作用)语句的, 也是很好用的.")]),_._v(" "),a("h3",{attrs:{id:"_4-jdbc-使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jdbc-使用步骤"}},[_._v("#")]),_._v(" 4. JDBC 使用步骤")]),_._v(" "),a("ol",[a("li",[_._v("加载驱动")]),_._v(" "),a("li",[_._v("创建连接")]),_._v(" "),a("li",[_._v("执行SQL语句")])]),_._v(" "),a("ul",[a("li",[a("code",[_._v("Statement")]),_._v(" 执行静态SQL语句。")]),_._v(" "),a("li",[a("code",[_._v("PreparedStatement")]),_._v(" 执行动态SQL语句。")]),_._v(" "),a("li",[a("code",[_._v("CallableStatement")]),_._v(" 执行数据库存储过程。")])]),_._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[_._v("处理结果")]),_._v(" "),a("li",[_._v("关闭连接")])]),_._v(" "),a("h3",{attrs:{id:"_5-spring-springmvc-mybatis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring-springmvc-mybatis"}},[_._v("#")]),_._v(" 5. Spring + SpringMVC, MyBatis")]),_._v(" "),a("p",[a("strong",[_._v("(1). 什么是Spring?")])]),_._v(" "),a("blockquote",[a("p",[_._v("Spring 是 Java EE 的是一个轻量级的开源框架. 使 J2EE 开发更容易, 通过实现基于POJO的编程模型, Spring 的核心是 IOC")])]),_._v(" "),a("p",[a("strong",[_._v("(2)Spring框架支持以下五种bean的作用域：")])]),_._v(" "),a("ul",[a("li",[a("p",[a("strong",[_._v("singleton :")]),_._v(" bean在每个Spring ioc 容器中只有一个实例。")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("prototype")]),_._v("：一个bean的定义可以有多个实例。")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("request")]),_._v("：每次http请求都会创建一个bean，该作用域仅在基于web的Spring ApplicationContext情形下有效。")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("session")]),_._v("：在一个HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("global-session")]),_._v("：在一个全局的HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")])])]),_._v(" "),a("p",[a("strong",[_._v("(3)使用Spring框架的好处是什么?")])]),_._v(" "),a("ul",[a("li",[_._v("**轻量：**Spring 是轻量的，基本的版本大约2MB。")]),_._v(" "),a("li",[_._v("**控制反转：**Spring通过控制反转实现了松散耦合，对象们给出它们的依赖，而不是创建或查找依赖的对象们。")]),_._v(" "),a("li",[_._v("**面向切面的编程(AOP)：**Spring支持面向切面的编程，并且把应用业务逻辑和系统服务分开。")]),_._v(" "),a("li",[_._v("**容器：**Spring 包含并管理应用中对象的生命周期和配置。")]),_._v(" "),a("li",[a("strong",[_._v("MVC框架")]),_._v("：Spring的WEB框架是个精心设计的框架，是Web框架的一个很好的替代品。")]),_._v(" "),a("li",[_._v("**事务管理：**Spring 提供一个持续的事务管理接口，可以扩展到上至本地事务下至全局事务（JTA）。")]),_._v(" "),a("li",[_._v("**异常处理：**Spring 提供方便的API把具体技术相关的异常（比如由JDBC，Hibernate or JDO抛出的）转化为一致的unchecked 异常。")])]),_._v(" "),a("h3",{attrs:{id:"_6-jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-jquery"}},[_._v("#")]),_._v(" 6. jQuery")]),_._v(" "),a("h3",{attrs:{id:"_7-理解redis缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-理解redis缓存"}},[_._v("#")]),_._v(" 7. 理解Redis缓存")]),_._v(" "),a("h3",{attrs:{id:"_8-mq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-mq"}},[_._v("#")]),_._v(" 8. MQ")]),_._v(" "),a("h3",{attrs:{id:"_9-任务调度-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-任务调度-worker"}},[_._v("#")]),_._v(" 9. 任务调度(Worker)")]),_._v(" "),a("h3",{attrs:{id:"_10-单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-单元测试"}},[_._v("#")]),_._v(" 10. 单元测试")]),_._v(" "),a("h3",{attrs:{id:"_11-常见设计模式-理解面向对象设计思想-数据结构-算法有一定认知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-常见设计模式-理解面向对象设计思想-数据结构-算法有一定认知"}},[_._v("#")]),_._v(" 11. 常见设计模式, 理解面向对象设计思想, 数据结构, 算法有一定认知")]),_._v(" "),a("h3",{attrs:{id:"_12-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-git"}},[_._v("#")]),_._v(" 12. Git")]),_._v(" "),a("h3",{attrs:{id:"_13-设计和开发分布式-支持热部署-热备份-热恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-设计和开发分布式-支持热部署-热备份-热恢复"}},[_._v("#")]),_._v(" 13. 设计和开发分布式, 支持热部署, 热备份, 热恢复")])])}),[],!1,null,null,null);t.default=s.exports}}]);