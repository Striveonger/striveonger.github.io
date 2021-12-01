(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{651:function(t,r,i){"use strict";i.r(r);var e=i(4),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("在平时工作中整理一些面试问题.")]),t._v(" "),i("p",[t._v("List用于存放多个元素，能够维护元素的次序，并且允许元素的重复。List接口一共有三个实现类，分别是ArrayList、Vector和LinkedList。")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("ArrayList是最常用的List实现类，内部是通过数组实现的，它允许对元素进行快速随机访问。数组的缺点是每个元素之间不能有间隔，当数组大小不满足时需要增加存储能力，就要讲已经有数组的数据复制到新的存储空间中。当从ArrayList的中间位置插入或者删除元素时，需要对数组进行复制、移动、代价比较高。因此，它适合随机查找和遍历，不适合插入和删除。")])]),t._v(" "),i("li",[i("p",[t._v("Vector与ArrayList一样，也是通过数组实现的，不同的是它支持线程的同步，即某一时刻只有一个线程能够写Vector，避免多线程同时写而引起的不一致性，但实现同步需要很高的花费，因此，访问它比访问ArrayList慢。")])]),t._v(" "),i("li",[i("p",[t._v("LinkedList是用链表结构存储数据的，很适合数据的动态插入和删除，随机访问和遍历速度比较慢。另外，他还提供了List接口中没有定义的方法，专门用于操作表头和表尾元素，可以当作堆栈、队列和双向队列使用。")])])]),t._v(" "),i("blockquote",[i("p",[t._v("关于ArrayList和Vector区别如下：")])]),t._v(" "),i("ol",[i("li",[t._v("ArrayList在内存不够时默认是扩展50% + 1个，Vector是默认扩展1倍。")]),t._v(" "),i("li",[t._v("Vector提供indexOf(obj, start)接口，ArrayList没有。")]),t._v(" "),i("li",[t._v("Vector属于线程安全级别的，但是大多数情况下不使用Vector，因为线程安全需要更大的系统开销。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);