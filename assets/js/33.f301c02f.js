(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{507:function(t,e,i){t.exports=i.p+"assets/img/image-20210707095723161.3df03990.png"},508:function(t,e,i){t.exports=i.p+"assets/img/image-20210707095646093.394d6b39.png"},773:function(t,e,i){"use strict";i.r(e);var s=i(0),v=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("RabbitMQ 消息失败之后")]),t._v(" "),e("p",[t._v("系统可能会有很多错误, 我们将关注也许是最常见的恼人问题: 消费者可能无法成功处理其消费的消息")]),t._v(" "),e("p",[e("img",{attrs:{src:i(507),alt:"image-20210707095723161"}})]),t._v(" "),e("p",[t._v("我们不能一直重试那条消息, 也不能简单的跳过这条错误的消息.")]),t._v(" "),e("p",[t._v("你会发现最受欢迎的一种解决方案就是重试主题(retry topics)的概念. 具体细节因实现而异, 但总体概念是这样的:")]),t._v(" "),e("ol",[e("li",[t._v("消费者尝试消费主要主题中的一条消息.")]),t._v(" "),e("li",[t._v("如果未能正确消费该消息, 则消费者将消息发布到第一个重试主题, 然后提交消息的偏移量, 以便继续处理下一条消息.")]),t._v(" "),e("li",[t._v("订阅重试主题的是重试消费者, 它包含与主消费者相同的逻辑, 该消费者在消息消费尝试之间引入了短暂的延迟. 如果这个消费者也无法消费该消息, 则会将该消息发布到另一个重试主题, 并提交该消息的偏移量.")]),t._v(" "),e("li",[t._v("这一过程继续, 并增加了一些重试主题和重试消费者, 每个重试的延迟越来越多(用作退避策略). 最后, 在最终重试消费者无法处理某条消息后, 该消息将发布到一个死信队列(Dead Letter Queue, DLQ)中, 工程团队将在该队列中对其进行手动分类.")])]),t._v(" "),e("p",[e("img",{attrs:{src:i(508),alt:"image-20210707095646093"}})]),t._v(" "),e("blockquote",[e("p",[t._v("参考文章")]),t._v(" "),e("ul",[e("li",[t._v("https://www.infoq.cn/article/51XSHW2opSmakhHmtth8")]),t._v(" "),e("li")])])])}),[],!1,null,null,null);e.default=v.exports}}]);