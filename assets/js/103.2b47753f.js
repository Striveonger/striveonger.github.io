(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{609:function(t,e,n){"use strict";n.r(e);var a=n(4),s=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("数据源.......")]),this._v(" "),e("p",[this._v('在Java开发中，使用JDBC操作数据库的四个步骤如下：\n①加载数据库驱动程序(Class.forName("数据库驱动类")😉\n②连接数据库(Connection con  = DriverManager.getConnection()😉\n③操作数据库(PreparedStatement stat = con.prepareStatement(sql);stat.executeQuery()😉\n④关闭数据库，释放连接(con.close()😉\n也就是说，所有的用户都需要经过此四步进行操作，但是这四步之中有三步(①加载数据库驱动程序、②连接数据库、④关闭数据库，释放连接)对所有人都是一样的，而所有人只有在操作数据库上是不一样，那么这就造成了性能的损耗。\n那么最好的做法是，准备出一个空间，此空间里专门保存着全部的数据库连接，以后用户用数据库操作的时候不用再重新加载驱动、连接数据库之类的，而直接从此空间中取走连接，关闭的时候直接把连接放回到此空间之中。\n那么此空间就可以称为连接池（保存所有的数据库连接），但是如果要想实现此空间的话，则必须有一个问题要考虑？\n1、 如果没有任何一个用户使用连接，那么那么应该维持一定数量的连接，等待用户使用。\n2、 如果连接已经满了，则必须打开新的连接，供更多用户使用。\n3、 如果一个服务器就只能有100个连接，那么如果有第101个人过来呢？应该等待其他用户释放连接\n4、 如果一个用户等待时间太长了，则应该告诉用户，操作是失败的。')]),this._v(" "),e("p",[this._v("如果直接用程序实现以上功能，则会比较麻烦，所以在Tomcat 4.1.27之后，在服务器上就直接增加了数据源的配置选项，直接在服务器上配置好数据源连接池即可。在J2EE服务器上保存着一个数据库的多个连接。每一个连接通过DataSource可以找到。DataSource被绑定在了JNDI树上（为每一个DataSource提供一个名字）客户端通过名称找到在JNDI树上绑定的DataSource，再由DataSource找到一个连接。如下图所示：\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/yuchen352416/blog_images/master/node-mysql_09_001.gif",alt:"title"}}),this._v("\n那么在以后的操作中，除了数据库的连接方式不一样之外，其他的所有操作都一样，只是关闭的时候不是彻底地关闭数据库，而是把数据库的连接放回到连接池中去。\n如果要想使用数据源的配置，则必须配置虚拟目录，因为此配置是在虚拟目录之上起作用的。需要注意的是，如果要想完成以上的功能，在Tomcat服务器上一定要有各个数据库的驱动程序。")])])}),[],!1,null,null,null);e.default=s.exports}}]);