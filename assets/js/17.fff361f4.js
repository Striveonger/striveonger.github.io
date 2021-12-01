(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{668:function(t,_,e){t.exports=e.p+"assets/img/image-20210822095156760.bfe685c0.png"},669:function(t,_,e){t.exports=e.p+"assets/img/image-20210822095440452.73c9b80e.png"},670:function(t,_,e){t.exports=e.p+"assets/img/image-20210822100109621.812c40ad.png"},671:function(t,_,e){t.exports=e.p+"assets/img/image-20210822101131449.a716a893.png"},672:function(t,_,e){t.exports=e.p+"assets/img/image-20210822101228872.00c6278d.png"},673:function(t,_,e){t.exports=e.p+"assets/img/image-20210822101307944.47e64209.png"},922:function(t,_,e){"use strict";e.r(_);var v=e(4),T=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-协议层次以及它们的服务类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-协议层次以及它们的服务类型"}},[t._v("#")]),t._v(" 1. 协议层次以及它们的服务类型")]),t._v(" "),v("h3",{attrs:{id:"_1-1-osi-七层模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-osi-七层模型"}},[t._v("#")]),t._v(" 1.1 OSI 七层模型")]),t._v(" "),v("p",[v("img",{attrs:{src:e(668),alt:"image-20210822095156760"}})]),t._v(" "),v("p",[t._v("OSI 模型全称为开放式通信系统互连参考模型，是国际标准化组织 ( ISO ) 提出的一个试图使各种计算机在世界范围内互连为网络的标准框架。 OSI 将计算机网络体系结构划分为七层，每一层实现各自的功能和协议，并完成与相邻层的接口通信。OSI 的服务定义详细说明了各层所提供的服务。某一层的服务就是该层及其下各层的一种能力，它通过接口提供给更高一层。各层所提供的服务与这些服务是怎么实现的无关。")]),t._v(" "),v("p",[t._v("① 应用层")]),t._v(" "),v("p",[t._v("应用层位于 OSI 参考模型的第七层，其作用是通过应用程序间的交互来完成特定的网络应用。该层协议定义了应用进程之间的交互规则，通过不同的应用层协议为不同的网络应用提供服务。例如域名系统 DNS，支持万维网应用的 HTTP 协议，电子邮件系统采用的 SMTP 协议等。在应用层交互的数据单元我们称之为报文。")]),t._v(" "),v("p",[t._v("② 表示层")]),t._v(" "),v("p",[t._v("表示层的作用是使通信的应用程序能够解释交换数据的含义，其位于 OSI 参考模型的第六层，向上为应用层提供服务，向下接收来自会话层的服务。该层提供的服务主要包括数据压缩，数据加密以及数据描述。这使得应用程序不必担心在各台计算机中表示和存储的内部格式差异。")]),t._v(" "),v("p",[t._v("③ 会话层")]),t._v(" "),v("p",[t._v("会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层提供了数据交换的定界和同步功能，包括了建立检查点和恢复方案的方法。")]),t._v(" "),v("p",[t._v("④ 传输层")]),t._v(" "),v("p",[t._v("传输层的主要任务是为两台主机进程之间的通信提供服务。应用程序利用该服务传送应用层报文。该服务并不针对某一特定的应用，多种应用可以使用同一个传输层服务。由于一台主机可同时运行多个线程，因此传输层有复用和分用的功能。所谓复用就是指多个应用层进程可同时使用下面传输层的服务，分用和复用相反，是传输层把收到的信息分别交付上面应用层中的相应进程。")]),t._v(" "),v("p",[t._v("⑤ 网络层")]),t._v(" "),v("p",[t._v("两台计算机之间传送数据时其通信链路往往不止一条，所传输的信息甚至可能经过很多通信子网。网络层的主要任务就是选择合适的网间路由和交换节点，确保数据按时成功传送。在发送数据时，网络层把传输层产生的报文或用户数据报封装成分组和包向下传输到数据链路层。在网络层使用的协议是无连接的网际协议（Internet Protocol）和许多路由协议，因此我们通常把该层简单地称为 IP 层。")]),t._v(" "),v("p",[t._v("⑥ 数据链路层")]),t._v(" "),v("p",[t._v("数据链路层通常也叫做链路层，在物理层和网络层之间。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层协议。在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息。通过控制信息我们可以知道一个帧的起止比特位置，此外，也能使接收端检测出所收到的帧有无差错，如果发现差错，数据链路层能够简单的丢弃掉这个帧，以避免继续占用网络资源。")]),t._v(" "),v("p",[t._v("⑦ 物理层")]),t._v(" "),v("p",[t._v("作为 OSI 参考模型中最低的一层，物理层的作用是实现计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异。使其上面的数据链路层不必考虑网络的具体传输介质是什么。该层的主要任务是确定与传输媒体的接口的一些特性（机械特性、电气特性、功能特性，过程特性）。")]),t._v(" "),v("h3",{attrs:{id:"_1-2-tcp-ip-参考模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-tcp-ip-参考模型"}},[t._v("#")]),t._v(" 1.2 TCP/IP 参考模型")]),t._v(" "),v("p",[t._v("OSI 七层模型在提出时的出发点是基于标准化的考虑，而没有考虑到具体的市场需求，使得该模型结构复杂，部分功能冗余，因而完全实现 OSI 参考模型的系统不多。而 TCP/IP 参考模型直接面向市场需求，实现起来也比较容易，因此在一经提出便得到了广泛的应用。基于 TCP/IP 的参考模型将协议分成四个层次，如上图所示，它们分别是：网络访问层、网际互联层、传输层、和应用层。")]),t._v(" "),v("p",[t._v("① 应用层")]),t._v(" "),v("p",[t._v("TCP/IP 模型将 OSI 参考模型中的会话层、表示层和应用层的功能合并到一个应用层实现，通过不同的应用层协议为不同的应用提供服务。例如：FTP、Telnet、DNS、SMTP 等。")]),t._v(" "),v("p",[t._v("② 传输层")]),t._v(" "),v("p",[t._v("该层对应于 OSI 参考模型的传输层，为上层实体提供源端到对端主机的通信功能。传输层定义了两个主要协议：传输控制协议（TCP）和用户数据报协议（UDP）。其中面向连接的 TCP 协议保证了数据的传输可靠性，面向无连接的 UDP 协议能够实现数据包简单、快速地传输。")]),t._v(" "),v("p",[t._v("③ 网际互联层")]),t._v(" "),v("p",[t._v("网际互联层对应 OSI 参考模型的网络层，主要负责相同或不同网络中计算机之间的通信。在网际互联层， IP 协议提供的是一个不可靠、无连接的数据报传递服务。该协议实现两个基本功能：寻址和分段。根据数据报报头中的目的地址将数据传送到目的地址，在这个过程中 IP 负责选择传送路线。除了 IP 协议外，该层另外两个主要协议是互联网组管理协议（IGMP）和互联网控制报文协议（ICMP）。")]),t._v(" "),v("p",[t._v("④ 网络接入层")]),t._v(" "),v("p",[t._v("网络接入层的功能对应于 OSI 参考模型中的物理层和数据链路层，它负责监视数据在主机和网络之间的交换。事实上，TCP/IP 并未真正描述这一层的实现，而由参与互连的各网络使用自己的物理层和数据链路层协议，然后与 TCP/IP 的网络接入层进行连接，因此具体的实现方法将随着网络类型的不同而有所差异。")]),t._v(" "),v("h3",{attrs:{id:"_1-3-tcp-ip-五层参考模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-tcp-ip-五层参考模型"}},[t._v("#")]),t._v(" 1.3 TCP/IP 五层参考模型")]),t._v(" "),v("p",[t._v("五层体系的协议结构是综合了 OSI 和 TCP/IP 优点的一种协议，包括应用层、传输层、网络层、数据链路层和物理层。其中应用层对应 OSI 的上三层，下四层和 OSI 相同。五层协议的体系结构只是为介绍网络原理而设计的，实际应用还是 TCP/IP 四层体系结构。")]),t._v(" "),v("h3",{attrs:{id:"_1-4-osi-模型和-tcp-ip-模型异同比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-osi-模型和-tcp-ip-模型异同比较"}},[t._v("#")]),t._v(" 1.4 OSI 模型和 TCP/IP 模型异同比较")]),t._v(" "),v("p",[t._v("**相同点: **")]),t._v(" "),v("p",[t._v("① OSI 参考模型与 TCP/IP 参考模型都采用了层次结构。")]),t._v(" "),v("p",[t._v("② 都能够提供面向连接和无连接两种通信服务机制。")]),t._v(" "),v("p",[t._v("**不同点: **")]),t._v(" "),v("p",[t._v("① OSI 采用的七层模型； TCP/IP 是四层结构。")]),t._v(" "),v("p",[t._v("② TCP/IP 参考模型没有对网络接口层进行细分，只是一些概念性的描述； OSI 参考模型对服务和协议做了明确的区分。")]),t._v(" "),v("p",[t._v("③ OSI 先有模型，后有协议规范，适合于描述各种网络；TCP/IP 是先有协议集然后建立模型，不适用于非 TCP/IP 网络。")]),t._v(" "),v("p",[t._v("④ TCP/IP 一开始就提出面向连接和无连接服务，而 OSI 一开始只强调面向连接服务，直到很晚才开始制定无连接的服务标准。")]),t._v(" "),v("p",[t._v("⑤ OSI 参考模型虽然被看好，但将网络划分为七层，实现起来较困难；相反，TCP/IP 参考模型虽然有许多不尽人意的地方，但作为一种简化的分层结构还是比较成功的。")]),t._v(" "),v("h3",{attrs:{id:"_1-5-osi-和-tcp-ip-协议之间的对应关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-osi-和-tcp-ip-协议之间的对应关系"}},[t._v("#")]),t._v(" 1.5 OSI 和 TCP/IP 协议之间的对应关系")]),t._v(" "),v("p",[v("img",{attrs:{src:e(669),alt:"image-20210822095440452"}})]),t._v(" "),v("h3",{attrs:{id:"_1-6-为什么-tcp-ip-去除了表示层和会话层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-为什么-tcp-ip-去除了表示层和会话层"}},[t._v("#")]),t._v(" 1.6 为什么 TCP/IP 去除了表示层和会话层")]),t._v(" "),v("p",[t._v("OSI 参考模型在提出时，他们的理想是非常好的，但实际上，由于会话层、表示层、应用层都是在应用程序内部实现的，最终产出的是一个应用数据包，而应用程序之间是几乎无法实现代码的抽象共享的，这也就造成 OSI 设想中的应用程序维度的分层是无法实现的，例如，我们几乎不会认为数据的压缩、加密算法算是一种协议，而会话的概念则更为抽象，难以用协议来进行描述，所以在后来的 TCP/IP 协议框架的设计中，便将表示层和会话层与应用层整合在一起，让整个过程更为清晰明了。")]),t._v(" "),v("h3",{attrs:{id:"_1-7-数据如何在各层之间传输【数据的封装过程】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-数据如何在各层之间传输【数据的封装过程】"}},[t._v("#")]),t._v(" 1.7 数据如何在各层之间传输【数据的封装过程】")]),t._v(" "),v("p",[t._v("在发送主机端，一个应用层报文被传送到运输层。在最简单的情况下，运输层收取到报文并附上附加信息，该首部将被接收端的运输层使用。应用层报文和运输层首部信息一道构成了运输层报文段。附加的信息可能包括：允许接收端运输层向上向适当的应用程序交付报文的信息以及差错检测位信息。该信息让接收端能够判断报文中的比特是否在途中已被改变。运输层则向网络层传递该报文段，网络层增加了如源和目的端系统地址等网络层首部信息，生成了网络层数据报。该数据报接下来被传递给链路层，在数据链路层数据包添加发送端 MAC 地址和接收端 MAC 地址后被封装成数据帧，在物理层数据帧被封装成比特流，之后通过传输介质传送到对端。")]),t._v(" "),v("h2",{attrs:{id:"_2-应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用层"}},[t._v("#")]),t._v(" 2. 应用层")]),t._v(" "),v("h3",{attrs:{id:"_2-1-http-头部包含哪些信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-http-头部包含哪些信息"}},[t._v("#")]),t._v(" 2.1 HTTP 头部包含哪些信息")]),t._v(" "),v("p",[t._v("HTTP 头部本质上是一个传递额外重要信息的键值对。主要分为：通用头部，请求头部，响应头部和实体头部。")]),t._v(" "),v("p",[v("strong",[t._v("通用头部")])]),t._v(" "),v("p",[t._v("协议头\t说明\t举例\nCache-Control\t用来指定当前的请求/回复中是否使用缓存机制\tCache-Control: no-store\nConnection\t客户端（浏览器）想要优先使用的连接类型\tConnection: keep-alive (Upgrade)\nDate\t报文创建时间\tDate: Dec, 26 Dec 2015 17: 30: 00 GMT\nTrailer\t会实现说明在报文主体后记录哪些首部字段，该首部字段可以使用在 HTTP/1.1 版本分块传输编码时\tTrailer: Expiress\nTransfer-Encoding\t用来改变报文格式\tTransfer-Encoding: chunked\nUpgrade\t要求服务器升级到一个高版本协议\tUpgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11\nVia\t告诉服务器，这个请求是由哪些代理发出的\tVia: 1.0 fred, 1.1 itbilu.com.com (Apache/1.1)\nWarning\t一个一般性的警告，表示在实体内容中可能存在错误\tWarning: 199 Miscellaneous warning")]),t._v(" "),v("p",[v("strong",[t._v("请求头部")])]),t._v(" "),v("p",[t._v("协议头\t说明\t举例\nAccept\t告诉服务器自己允许哪些媒体类型\tAccept: text/plain\nAccept-Charset\t浏览器申明可接受的字符集\tAccept-Charset: utf-8\nAccept-Encoding\t浏览器申明自己接收的编码方法\tAccept-Encoding: gzip, deflate\nAccept-Language\t浏览器可接受的响应内容语言列表\tAccept-Language: en-US\nAuthorization\t用于表示 HTTP 协议中需要认证资源的认证信息\tAuthorization: Basic OSdjJGRpbjpvcGVul ANIc2SdDE==\nExpect\t表示客户端要求服务器做出特定的行为\tExpect: 100-continue\nFrom\t发起此请求的用户的邮件地址\tFrom: user@itbilu.com\nHost\t表示服务器的域名以及服务器所监听的端口号\tHost: www.itbilu.com:80\nIf-XXX\t条件请求\tIf-Modified-Since: Dec, 26 Dec 2015 17:30:00 GMT\nMax-Forwards\t限制该消息可被代理及网关转发的次数\tMax-Forwards: 10\nRange\t表示请求某个实体的一部分，字节偏移以 0 开始\tRange: bytes=500-999\nReferer\t表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面\tReferer: http://itbilu.com/nodejs\nUser-Agent\t浏览器的身份标识字符串\tUser-Agent: Mozilla/……")]),t._v(" "),v("p",[v("strong",[t._v("响应头部")])]),t._v(" "),v("p",[t._v('协议头\t说明\t举例\nAccept-Ranges\t字段的值表示可用于定义范围的单位\tAccept-Ranges: bytes\nAge\t创建响应的时间\tAge：5744337\nETag\t唯一标识分配的资源\tEtag：W/"585cd998-7c0f"\nLocation\t表示重定向后的 URL\tLocation: http://www.zcmhi.com/archives/94.html\nRetry-After\t告知客户端多久后再发送请求\tRetry-After: 120\nServer\t告知客户端服务器信息\tServer: Apache/1.3.27 (Unix) (Red-Hat/Linux)\nVary\t缓存控制\tVary: Origin')]),t._v(" "),v("p",[v("strong",[t._v("实体头部")])]),t._v(" "),v("p",[t._v("|协议头 | 说明 | 举例 |\nAllow\t对某网络资源的有效的请求行为，不允许则返回405\tAllow: GET, HEAD\nContent-encoding\t返回内容的编码方式\tContent-Encoding: gzip\nContent-Length\t返回内容的字节长度\tContent-Length: 348\nContent-Language\t响应体的语言\tContent-Language: en,zh\nContent-Location\t请求资源可替代的备用的另一地址\tContent-Location: /index.htm\nContent-MD5\t返回资源的MD5校验值\tContent-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==\nContent-Range\t在整个返回体中本部分的字节位置\tContent-Range: bytes 21010-47021/47022\nContent-Type\t返回内容的MIME类型\tContent-Type: text/html; charset=utf-8\nExpires\t响应过期的日期和时间\tExpires: Thu, 01 Dec 2010 16:00:00 GMT\nLast-Modified\t请求资源的最后修改时间\tLast-Modified: Tue, 15 Nov 2010 12:45:26 GMT")]),t._v(" "),v("blockquote",[v("p",[t._v("通用头：是客户端和服务器都可以使用的头部，可以在客户端、服务器和其他应用程序之间提供一些非常有用的通用功能，如Date头部。\n请求头：是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如Accept头部。\n响应头：便于客户端提供信息，比如，客服端在与哪种类型的服务器进行交互，如Server头部。\n实体头：指的是用于应对实体主体部分的头部，比如，可以用实体头部来说明实体主体部分的数据类型，如Content-Type头部。")])]),t._v(" "),v("h3",{attrs:{id:"_2-2-keep-alive-和非-keep-alive-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-keep-alive-和非-keep-alive-区别"}},[t._v("#")]),t._v(" 2.2 Keep-Alive 和非 Keep-Alive 区别")]),t._v(" "),v("p",[t._v("在早期的 HTTP/1.0 中，浏览器每次 发起 HTTP 请求都要与服务器创建一个新的 TCP 连接，服务器完成请求处理后立即断开 TCP 连接，服务器不跟踪每个客户也不记录过去的请求。然而创建和关闭连接的过程需要消耗资源和时间，为了减少资源消耗，缩短响应时间，就需要重用连接。在 HTTP/1.1 版本中默认使用持久连接，在此之前的 HTTP 版本的默认连接都是使用非持久连接，如果想要在旧版本的 HTTP 协议上维持持久连接，则需要指定 connection 的首部字段的值为 Keep-Alive 来告诉对方这个请求响应完成后不要关闭，下一次咱们还用这个请求继续交流，我们用一个示意图来更加生动的表示两者的区别：")]),t._v(" "),v("p",[v("img",{attrs:{src:e(670),alt:"image-20210822100109621"}})]),t._v(" "),v("p",[t._v("对于非 Keep=Alive 来说，必须为每一个请求的对象建立和维护一个全新的连接。对于每一个这样的连接，客户机和服务器都要分配 TCP 的缓冲区和变量，这给服务器带来的严重的负担，因为一台 Web 服务器可能同时服务于数以百计的客户机请求。在 Keep-Alive 方式下，服务器在响应后保持该 TCP 连接打开，在同一个客户机与服务器之间的后续请求和响应报文可通过相同的连接进行传送。甚至位于同一台服务器的多个 Web 页面在从该服务器发送给同一个客户机时，可以在单个持久 TCP 连接上进行。")]),t._v(" "),v("p",[t._v("然而，Keep-Alive 并不是没有缺点的，当长时间的保持 TCP 连接时容易导致系统资源被无效占用，若对 Keep-Alive 模式配置不当，将有可能比非 Keep-Alive 模式带来的损失更大。因此，我们需要正确地设置 keep-alive timeout 参数，当 TCP 连接在传送完最后一个 HTTP 响应，该连接会保持 keepalive_timeout 秒，之后就开始关闭这个链接。")]),t._v(" "),v("h3",{attrs:{id:"_2-3-http-长连接短连接使用场景是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-http-长连接短连接使用场景是什么"}},[t._v("#")]),t._v(" 2.3 HTTP 长连接短连接使用场景是什么")]),t._v(" "),v("p",[t._v("长连接：多用于操作频繁，点对点的通讯，而且客户端连接数目较少的情况。例如即时通讯、网络游戏等。")]),t._v(" "),v("p",[t._v("短连接：用户数目较多的Web网站的 HTTP 服务一般用短连接。例如京东，淘宝这样的大型网站一般客户端数量达到千万级甚至上亿，若采用长连接势必会使得服务端大量的资源被无效占用，所以一般使用的是短连接。")]),t._v(" "),v("h3",{attrs:{id:"_2-4-怎么知道-http-的报文长度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-怎么知道-http-的报文长度"}},[t._v("#")]),t._v(" 2.4 怎么知道 HTTP 的报文长度")]),t._v(" "),v("p",[t._v("当响应消息中存在 Content-Length 字段时，我们可以直接根据这个值来判断数据是否接收完成，例如客户端向服务器请求一个静态页面或者一张图片时，服务器能够很清楚的知道请求内容的大小，因此可以通过消息首部字段 Content- Length 来告诉客户端需要接收多少数据，但是如果服务器预先不知道请求内容的大小，例如加载动态页面的时候，就需要使用 Transfer-Encoding: chunked 的方式来代替 Content-Length。")]),t._v(" "),v("p",[t._v("分块传输编码（Chunked transfer encoding）是 HTTP/1.1 中引入的一种数据传输机制，其允许 HTTP 由服务器发送给客户端的数据可以分成多个部分，当数据分解成一系列数据块发送时，服务器就可以发送数据而不需要预先知道发送内容的总大小，每一个分块包含十六进制的长度值和数据，最后一个分块长度值为0，表示实体结束，客户机可以以此为标志确认数据已经接收完毕。")]),t._v(" "),v("h3",{attrs:{id:"_2-5-http-方法了解哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-http-方法了解哪些"}},[t._v("#")]),t._v(" 2.5 HTTP 方法了解哪些")]),t._v(" "),v("p",[t._v("HTTP/1.0 定义了三种请求方法：GET, POST 和 HEAD 方法。")]),t._v(" "),v("p",[t._v("HTTP/1.1 增加了六种请求方法：OPTIONS, PUT, PATCH, DELETE, TRACE 和 CONNECT 方法。")]),t._v(" "),v("p",[t._v("| 方法 | 描述 |\nGET\t请求指定的页面信息，并返回具体内容，通常只用于读取数据。\nHEAD\t类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头。\nPOST\t向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立或已有资源的更改。\nPUT\t替换指定的资源，没有的话就新增。\nDELETE\t请求服务器删除 URL 标识的资源数据。\nCONNECT\t将服务器作为代理，让服务器代替用户进行访问。\nOPTIONS\t向服务器发送该方法，会返回对指定资源所支持的 HTTP 请求方法。\nTRACE\t回显服务器收到的请求数据，即服务器返回自己收到的数据，主要用于测试和诊断。\nPATCH\t是对 PUT 方法的补充，用来对已知资源进行局部更新。")]),t._v(" "),v("h3",{attrs:{id:"_2-6-get-和-post-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-get-和-post-的区别"}},[t._v("#")]),t._v(" 2.6 GET 和 POST 的区别")]),t._v(" "),v("p",[t._v("get 提交的数据会放在 URL 之后，并且请求参数会被完整的保留在浏览器的记录里，由于参数直接暴露在 URL 中，可能会存在安全问题，因此往往用于获取资源信息。而 post 参数放在请求主体中，并且参数不会被保留，相比 get 方法，post 方法更安全，主要用于修改服务器上的资源。\nget 请求只支持 URL 编码，post 请求支持多种编码格式。\nget 只支持 ASCII 字符格式的参数，而 post 方法没有限制。\nget 提交的数据大小有限制（这里所说的限制是针对浏览器而言的），而 post 方法提交的数据没限制\nget 方式需要使用 Request.QueryString 来取得变量的值，而 post 方式通过 Request.Form 来获取。\nget 方法产生一个 TCP 数据包，post 方法产生两个（并不是所有的浏览器中都产生两个）")]),t._v(" "),v("h3",{attrs:{id:"_2-7-get-的长度限制是多少"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-get-的长度限制是多少"}},[t._v("#")]),t._v(" 2.7 GET 的长度限制是多少")]),t._v(" "),v("p",[t._v("HTTP 中的 GET 方法是通过 URL 传递数据的，而 URL 本身并没有对数据的长度进行限制，真正限制 GET 长度的是浏览器，例如 IE 浏览器对 URL 的最大限制为 2000多个字符，大概 2KB左右，像 Chrome, FireFox 等浏览器能支持的 URL 字符数更多，其中 FireFox 中 URL 最大长度限制为 65536 个字符，Chrome 浏览器中 URL 最大长度限制为 8182 个字符。并且这个长度不是只针对数据部分，而是针对整个 URL 而言，在这之中，不同的服务器同样影响 URL 的最大长度限制。因此对于特定的浏览器，GET的长度限制不同。")]),t._v(" "),v("p",[t._v("由于 POST 方法请求参数在请求主体中，理论上讲，post 方法是没有大小限制的，而真正起限制作用的是服务器处理程序的处理能力。")]),t._v(" "),v("h3",{attrs:{id:"_2-8-http-与-https-的工作方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-http-与-https-的工作方式"}},[t._v("#")]),t._v(" 2.8 HTTP 与 HTTPS 的工作方式")]),t._v(" "),v("blockquote",[v("p",[t._v("【建立连接的过程】")])]),t._v(" "),v("p",[t._v("HTTP")]),t._v(" "),v("p",[t._v("HTTP（Hyper Text Transfer Protocol: 超文本传输协议） 是一种简单的请求 - 响应协议，被用于在 Web 浏览器和网站服务器之间传递消息。HTTP 使用 TCP（而不是 UDP）作为它的支撑运输层协议。其默认工作在 TCP 协议 80 端口，HTTP 客户机发起一个与服务器的 TCP 连接，一旦连接建立，浏览器和服务器进程就可以通过套接字接口访问 TCP。客户机从套接字接口发送 HTTP 请求报文和接收 HTTP 响应报文。类似地，服务器也是从套接字接口接收 HTTP 请求报文和发送 HTTP 响应报文。其通信内容以明文的方式发送，不通过任何方式的数据加密。当通信结束时，客户端与服务器关闭连接。")]),t._v(" "),v("p",[t._v("HTTPS")]),t._v(" "),v("p",[t._v("HTTPS（Hyper Text Transfer Protocol over Secure Socket Layer）是以安全为目标的 HTTP 协议，在 HTTP 的基础上通过传输加密和身份认证的方式保证了传输过程的安全性。其工作流程如下：")]),t._v(" "),v("p",[t._v("① 客户端发起一个 HTTPS 请求，并连接到服务器的 443 端口，发送的信息主要包括自身所支持的算法列表和密钥长度等；")]),t._v(" "),v("p",[t._v("② 服务端将自身所支持的所有加密算法与客户端的算法列表进行对比并选择一种支持的加密算法，然后将它和其它密钥组件一同发送给客户端。")]),t._v(" "),v("p",[t._v("③ 服务器向客户端发送一个包含数字证书的报文，该数字证书中包含证书的颁发机构、过期时间、服务端的公钥等信息。")]),t._v(" "),v("p",[t._v("④ 最后服务端发送一个完成报文通知客户端 SSL 的第一阶段已经协商完成。")]),t._v(" "),v("p",[t._v("⑤ SSL 第一次协商完成后，客户端发送一个回应报文，报文中包含一个客户端生成的随机密码串，称为 pre_master_secre，并且该报文是经过证书中的公钥加密过的。")]),t._v(" "),v("p",[t._v("⑥ 紧接着客户端会发送一个报文提示服务端在此之后的报文是采用pre_master_secre 加密的。")]),t._v(" "),v("p",[t._v("⑦ 客户端向服务端发送一个 finish 报文，这次握手中包含第一次握手至今所有报文的整体校验值，最终协商是否完成取决于服务端能否成功解密。")]),t._v(" "),v("p",[t._v("⑧ 服务端同样发送与第 ⑥ 步中相同作用的报文，已让客户端进行确认，最后发送 finish 报文告诉客户端自己能够正确解密报文。")]),t._v(" "),v("p",[t._v("当服务端和客户端的 finish 报文交换完成之后，SSL 连接就算建立完成了，之后就进行和 HTTP 相同的通信过程，唯一不同的是在 HTTP 通信过程中并不是采用明文传输，而是采用对称加密的方式，其中对称密钥已经在 SSL 的建立过程中协商好了。")]),t._v(" "),v("h3",{attrs:{id:"_2-9-https-和-http-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-https-和-http-的区别"}},[t._v("#")]),t._v(" 2.9 HTTPS 和 HTTP 的区别")]),t._v(" "),v("p",[t._v("HTTP 协议以明文方式发送内容，数据都是未加密的，安全性较差。HTTPS 数据传输过程是加密的，安全性较好。\nHTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80 端口，后者是 443 端口。\nHTTPS 协议需要到数字认证机构（Certificate Authority, CA）申请证书，一般需要一定的费用。\nHTTP 页面响应比 HTTPS 快，主要因为 HTTP 使用 3 次握手建立连接，客户端和服务器需要握手 3 次，而 HTTPS 除了 TCP 的 3 次握手，还需要经历一个 SSL 协商过程。")]),t._v(" "),v("h3",{attrs:{id:"_2-10-https-的加密方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-https-的加密方式"}},[t._v("#")]),t._v(" 2.10 HTTPS 的加密方式")]),t._v(" "),v("p",[t._v("HTTPS 采用对称加密和非对称加密相结合的方式，首先使用 SSL/TLS 协议进行加密传输，为了弥补非对称加密的缺点，HTTPS 采用证书来进一步加强非对称加密的安全性，通过非对称加密，客户端和服务端协商好之后进行通信传输的对称密钥，后续的所有信息都通过该对称秘钥进行加密解密，完成整个 HTTPS 的流程。")]),t._v(" "),v("h3",{attrs:{id:"_2-11-客户端为什么信任第三方证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-客户端为什么信任第三方证书"}},[t._v("#")]),t._v(" 2.11 客户端为什么信任第三方证书")]),t._v(" "),v("p",[t._v("假设中间人篡改了证书原文，由于他没有 CA 机构的私钥，所以无法得到此时加密后的签名，因此无法篡改签名。客户端浏览器收到该证书后会发现原文和签名解密后的值不一致，则说明证书被中间人篡改，证书不可信，从而终止向服务器传输信息。")]),t._v(" "),v("p",[t._v("上述过程说明证书无法被篡改，我们考虑更严重的情况，例如中间人拿到了 CA 机构认证的证书，它想窃取网站 A 发送给客户端的信息，于是它成为中间人拦截到了 A 传给客户端的证书，然后将其替换为自己的证书。此时客户端浏览器收到的是被中间人掉包后的证书，但由于证书里包含了客户端请求的网站信息，因此客户端浏览器只需要把证书里的域名与自己请求的域名比对一下就知道证书有没有被掉包了。")]),t._v(" "),v("h3",{attrs:{id:"_2-12-http-是不保存状态的协议-如何保存用户状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-http-是不保存状态的协议-如何保存用户状态"}},[t._v("#")]),t._v(" 2.12 HTTP 是不保存状态的协议,如何保存用户状态")]),t._v(" "),v("p",[t._v("我们知道，假如某个特定的客户机在短时间内两次请求同一个对象，服务器并不会因为刚刚为该用户提供了该对象就不再做出反应，而是重新发送该对象，就像该服务器已经完全忘记不久之前所做过的是一样。因为一个 HTTP 服务器并不保存关于客户机的任何信息，所以我们说 HTTP 是一个无状态协议。")]),t._v(" "),v("p",[t._v("通常有两种解决方案：")]),t._v(" "),v("p",[t._v("① 基于 Session 实现的会话保持")]),t._v(" "),v("p",[t._v("在客户端第一次向服务器发送 HTTP 请求后，服务器会创建一个 Session 对象并将客户端的身份信息以键值对的形式存储下来，然后分配一个会话标识（SessionId）给客户端，这个会话标识一般保存在客户端 Cookie 中，之后每次该浏览器发送 HTTP 请求都会带上 Cookie 中的 SessionId 到服务器，服务器根据会话标识就可以将之前的状态信息与会话联系起来，从而实现会话保持。")]),t._v(" "),v("p",[t._v("优点：安全性高，因为状态信息保存在服务器端。")]),t._v(" "),v("p",[t._v("缺点：由于大型网站往往采用的是分布式服务器，浏览器发送的 HTTP 请求一般要先通过负载均衡器才能到达具体的后台服务器，倘若同一个浏览器两次 HTTP 请求分别落在不同的服务器上时，基于 Session 的方法就不能实现会话保持了。")]),t._v(" "),v("p",[t._v("【解决方法：采用中间件，例如 Redis，我们通过将 Session 的信息存储在 Redis 中，使得每个服务器都可以访问到之前的状态信息】")]),t._v(" "),v("p",[t._v("② 基于 Cookie 实现的会话保持")]),t._v(" "),v("p",[t._v("当服务器发送响应消息时，在 HTTP 响应头中设置 Set-Cookie 字段，用来存储客户端的状态信息。客户端解析出 HTTP 响应头中的字段信息，并根据其生命周期创建不同的 Cookie，这样一来每次浏览器发送 HTTP 请求的时候都会带上 Cookie 字段，从而实现状态保持。基于 Cookie 的会话保持与基于 Session 实现的会话保持最主要的区别是前者完全将会话状态信息存储在浏览器 Cookie 中。")]),t._v(" "),v("p",[t._v("优点：服务器不用保存状态信息， 减轻服务器存储压力，同时便于服务端做水平拓展。")]),t._v(" "),v("p",[t._v("缺点：该方式不够安全，因为状态信息存储在客户端，这意味着不能在会话中保存机密数据。除此之外，浏览器每次发起 HTTP 请求时都需要发送额外的 Cookie 到服务器端，会占用更多带宽。")]),t._v(" "),v("p",[t._v("拓展：Cookie被禁用了怎么办？")]),t._v(" "),v("p",[t._v("若遇到 Cookie 被禁用的情况，则可以通过重写 URL 的方式将会话标识放在 URL 的参数里，也可以实现会话保持。")]),t._v(" "),v("h3",{attrs:{id:"_2-13-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-13-状态码"}},[t._v("#")]),t._v(" 2.13 状态码")]),t._v(" "),v("p",[t._v("HTTP 状态码由三个十进制数字组成，第一个数字定义了状态码的类型，后两个并没有起到分类的作用。\nHTTP 状态码共有 5 种类型：")]),t._v(" "),v("p",[t._v("分类\t分类描述\n1XX\t指示信息--表示请求正在处理\n2XX\t成功--表示请求已被成功处理完毕\n3XX\t重定向--要完成的请求需要进行附加操作\n4XX\t客户端错误--请求有语法错误或者请求无法实现，服务器无法处理请求\n5XX\t服务器端错误--服务器处理请求出现错误")]),t._v(" "),v("p",[t._v("相应的 HTTP 状态码列表：")]),t._v(" "),v("p",[t._v("状态码\t英文名称\t中文描述\n100\tContinue\t继续。客户端继续处理请求\n101\tSwitching Protocol\t切换协议。服务器根据客户端的请求切换到更高级的协议\n200\tOK\t请求成功。请求所希望的响应头或数据体将随此响应返回\n201\tCreated\t请求以实现。并且有一个新的资源已经依据需求而建立\n202\tAccepted\t请求已接受。已经接受请求，但还未处理完成\n203\tNon-Authoritative Information\t非授权信息。请求成功。但返回的 meta 信息不在原始的服务器中，而是一个副本。\n204\tNo Content\t无内容。服务器成功处理了请求，但不需要返回任何实体内容\n205\tReset Content\t重置内容。与 204 类似，不同点是返回此状态码的响应要求请求者重置文档视图\n206\tPartial Content\t部分内容。服务器成功处理了部分 GET 请求\n300\tMultiple Choices\t多种选择。被请求的资源有一系列可供选择的回馈信息，用户或浏览器能够自行选择一个首选地址进行重定向\n301\tMoved Permanently\t永久移动。请求的资源已被永久地移动到新 URI，返回信息会包含新的 URI，浏览器会自动定向到新 URI\n302\tFound\t临时移动。与 301 类似。但资源只是临时被移动，客户端应继续使用原有URI\n303\tSee Other\t查看其它地址。与301类似。使用GET和POST请求查看\n304\tNot Modified\t未修改。如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码\n305\tUse Proxy\t使用代理。被请求的资源必须通过指定的代理才能被访问\n306\tUnused\t在最新版的规范中，306状态码已经不再被使用\n307\tTemporary Redirect\t临时重定向。请求的资源现在临时从不同的URI 响应请求，与302类似\n400\tBad Request\t客户端请求的语法错误，服务器无法理解；请求的参数有误\n401\tUnauthorized\t当前请求需要用户验证\n402\tPayment Required\t该状态码是为了将来可能的需求而预留的\n403\tForbidden\t服务器已经理解请求，但是拒绝执行它\n404\tNot Found\t请求失败，请求所希望得到的资源未被在服务器上发现\n405\tMethod Not Allowed\t客户端请求中的方法被禁止\n406\tNot Acceptable\t请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体\n407\tProxy Authentication Required\t与401响应类似，只不过客户端必须在代理服务器上进行身份验证\n408\tRequest Time-out\t请求超时。服务器等待客户端发送的请求时间过长，超时\n409\tConflict\t由于和被请求的资源的当前状态之间存在冲突，请求无法完成\n410\tGone\t被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址\n411\tLength Required\t服务器拒绝在没有定义 Content-Length 头的情况下接受请求\n412\tPrecondition Failed\t客户端请求信息的先决条件错误\n413\tRequest Entity Too Large\t服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围\n414\tRequest-URI Too Large\t请求的 URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务\n415\tUnsupported Media Type\t服务器无法处理请求附带的媒体格式\n416\tRequested range not satisfiable\t客户端请求的范围无效\n417\tExpectation Failed\t服务器无法满足Expect的请求头信息\n500\tInternal Server\t服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理\n501\tNot Implemented\t服务器不支持当前请求所需要的某个功能\n502\tBad Gateway\t作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到无效的响应\n503\tService Unavailable\t由于临时的服务器维护或者过载，服务器当前无法处理请求，一段时间后可能恢复正常\n504\tGateway Time-out\t充当网关或代理的服务器，未及时从远端服务器获取请求\n505\tHTTP Version not supported\t服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本")]),t._v(" "),v("blockquote",[v("p",[t._v("注：上表基本包含了常见的 HTTP 状态码，而面试时也是围绕以上状态码进行提问，该表并未对每种状态码进行详细的剖析，因此想要深究的同学可以针对不同的状态码自行百度。")])]),t._v(" "),v("p",[v("strong",[t._v("面试时针对状态码的常见问法：")])]),t._v(" "),v("p",[v("strong",[t._v("① 状态码 301 和 302 的区别？")])]),t._v(" "),v("p",[t._v("301：永久移动。请求的资源已被永久的移动到新的URI，旧的地址已经被永久的删除了。返回信息会包括新的URI，浏览器会自动定向到新的URI。今后新的请求都应使用新的URI代替。")]),t._v(" "),v("p",[t._v("302：临时移动。与301类似，客户端拿到服务端的响应消息后会跳转到一个新的 URL 地址。但资源只是临时被移动，旧的地址还在，客户端应继续使用原有URI。")]),t._v(" "),v("p",[v("strong",[t._v("② HTTP 异常状态码知道哪些？")])]),t._v(" "),v("p",[t._v("该问题一般只需要回答 3, 4 , 5 开头的一些常见异常状态码即可。")]),t._v(" "),v("h3",{attrs:{id:"_2-14-http-1-1-和-http-1-0-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-14-http-1-1-和-http-1-0-的区别"}},[t._v("#")]),t._v(" 2.14 HTTP/1.1 和 HTTP/1.0 的区别")]),t._v(" "),v("p",[t._v("主要区别如下：")]),t._v(" "),v("p",[t._v("缓存处理：在 HTTP/1.0 中主要使用 header 里的 if-modified-Since, Expries 来做缓存判断的标准。而 HTTP/1.1 请求头中添加了更多与缓存相关的字段，从而支持更为灵活的缓存策略，例如 Entity-tag, If-Unmodified-Since, If-Match, If-None-Match 等可供选择的缓存头来控制缓存策略。")]),t._v(" "),v("p",[t._v("节约带宽： 当客户端请求某个资源时，HTTP/1.0 默认将该资源相关的整个对象传送给请求方，但很多时候可能客户端并不需要对象的所有信息。而在 HTTP/1.1 的请求头中引入了 range 头域，它允许只请求部分资源，其使得开发者可以多线程请求某一资源，从而充分的利用带宽资源，实现高效并发。")]),t._v(" "),v("p",[t._v("错误通知的管理：HTTP/1.1 在 1.0 的基础上新增了 24 个错误状态响应码，例如 414 表示客户端请求中所包含的 URL 地址太长，以至于服务器无法处理；410 表示所请求的资源已经被永久删除。")]),t._v(" "),v("p",[t._v("Host 请求头：早期 HTTP/1.0 中认为每台服务器都绑定一个唯一的 IP 地址并提供单一的服务，请求消息中的 URL 并没有传递主机名。而随着虚拟主机的出现，一台物理服务器上可以存在多个虚拟主机，并且它们共享同一个 IP 地址。为了支持虚拟主机，HTTP/1.1 中添加了 host 请求头，请求消息和响应消息中应声明这个字段，若请求消息中缺少该字段时服务端会响应一个 404 错误状态码。")]),t._v(" "),v("p",[t._v("长连接：HTTP/1.0 默认浏览器和服务器之间保持短暂连接，浏览器的每次请求都需要与服务器建立一个 TCP 连接，服务器完成后立即断开 TCP 连接。HTTP/1.1 默认使用的是持久连接，其支持在同一个 TCP 请求中传送多个 HTTP 请求和响应。此之前的 HTTP 版本的默认连接都是使用非持久连接，如果想要在旧版本的 HTTP 协议上维持持久连接，则需要指定 Connection 的首部字段的值为 Keep-Alive。")]),t._v(" "),v("h3",{attrs:{id:"_2-15-http-1-x-和-http-2-0-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-15-http-1-x-和-http-2-0-的区别"}},[t._v("#")]),t._v(" 2.15 HTTP/1.X 和 HTTP/2.0 的区别")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("相比于 HTTP/1.X 的文本（字符串）传送， HTTP/2.0 采用二进制传送。客户端和服务器传输数据时把数据分成帧，帧组成了数据流，流具有流 ID 标识和优先级，通过优先级以及流依赖能够一定程度上解决关键请求被阻塞的问题。")])]),t._v(" "),v("li",[v("p",[t._v("HTTP/2.0 支持多路复用。因为流 ID 的存在， 通过同一个 HTTP 请求可以实现多个 HTTP 请求传输，客户端和服务器可以通过流 ID 来标识究竟是哪个流从而定位到是哪个 HTTP 请求。\nHTTP/2.0 头部压缩。HTTP/2.0 通过 gzip 和 compress 压缩头部然后再发送，同时通信双方会维护一张头信息表，所有字段都记录在这张表中，在每次 HTTP 传输时只需要传头字段在表中的索引即可，大大减小了重传次数和数据量。")])]),t._v(" "),v("li",[v("p",[t._v("HTTP/2.0 支持服务器推送。 服务器在客户端未经请求许可的情况下，可预先向客户端推送需要的内容，客户端在退出服务时可通过发送复位相关的请求来取消服务端的推送。")])])]),t._v(" "),v("h3",{attrs:{id:"_2-16-http-3-了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-16-http-3-了解吗"}},[t._v("#")]),t._v(" 2.16 HTTP/3 了解吗")]),t._v(" "),v("p",[t._v("HTTP/2 存在的问题")]),t._v(" "),v("p",[t._v("我们知道，传统 Web 平台的数据传输都基于 TCP 协议，而 TCP 协议在创建连接之前不可避免的需要三次握手，如果需要提高数据交互的安全性，即增加传输层安全协议（TLS），还会增加更多的握手次数。 HTTP 从 1.0 到 2.0，其传输层都是基于 TCP 协议的。即使是带来巨大性能提升的 HTTP/2，也无法完全解决 TCP 协议存在的固有问题（慢启动，拥塞窗口尺寸的设置等）。此外，HTTP/2 多路复用只是减少了连接数，其队头的拥塞问题并没有完全解决，倘若 TCP 丢包率过大，则 HTTP/2 的表现将不如 HTTP/1.1。")]),t._v(" "),v("p",[t._v("QUIC 协议")]),t._v(" "),v("p",[t._v("QUIC（Quick UDP Internet Connections），直译为快速 UDP 网络连接，是谷歌制定的一种基于 UDP 的低延迟传输协议。其主要目的是解决采用传输层 TCP 协议存在的问题，同时满足传输层和应用层对多连接、低延迟等的需求。该协议融合了 TCP, TLS, HTTP/2 等协议的特性，并基于 UDP传输。该协议带来的主要提升有：")]),t._v(" "),v("p",[t._v("低延迟连接。当客户端第一次连接服务器时，QUIC 只需要 1 RTT（Round-Trid Time）延迟就可以建立安全可靠的连接（采用 TLS 1.3 版本），相比于 TCP + TLS 的 3 次 RTT 要更加快捷。之后，客户端可以在本地缓存加密的认证信息，当再次与服务器建立连接时可以实现 0 RTT 的连接建立延迟。")]),t._v(" "),v("p",[t._v("QUIC 复用了 HTTP/2 协议的多路复用功能，由于 QUIC 基于 UDP，所以也避免了 HTTP/2存在的队头阻塞问题。")]),t._v(" "),v("p",[t._v("基于 UDP 协议的 QUIC 运行在用户域而不是系统内核，这使得 QUIC 协议可以快速的更新和部署，从而很好地解决了 TPC 协议部署及更新的困难。")]),t._v(" "),v("p",[t._v("QUIC 的报文是经过加密和认证的，除了少量的报文，其它所有的 QUIC 报文头部都经过了认证，报文主体经过了加密。只要有攻击者篡改 QUIC 报文，接收端都能及时发现。")]),t._v(" "),v("p",[t._v("具有向前纠错机制，每个数据包携带了除了本身内容外的部分其他数据包的内容，使得在出现少量丢包的情况下，尽量地减少其它包的重传次数，其通过牺牲单个包所携带的有效数据大小换来更少的重传次数，这在丢包数量较小的场景下能够带来一定程度的性能提升。")]),t._v(" "),v("p",[t._v("HTTP/3")]),t._v(" "),v("p",[t._v("HTTP/3 是在 QUIC 基础上发展起来的，其底层使用 UDP 进行数据传输，上层仍然使用 HTTP/2。在 UDP 与 HTTP/2 之间存在一个 QUIC 层，其中 TLS 加密过程在该层进行处理。HTTP/3 主要有以下几个特点：")]),t._v(" "),v("p",[t._v("① 使用 UDP 作为传输层进行通信；")]),t._v(" "),v("p",[t._v("② 在 UDP 之上的 QUIC 协议保证了 HTTP/3 的安全性。QUIC 在建立连接的过程中就完成了 TLS 加密握手；")]),t._v(" "),v("p",[t._v("③ 建立连接快，正常只需要 1 RTT 即可建立连接。如果有缓存之前的会话信息，则直接验证和建立连接，此过程 0 RTT。建立连接时，也可以带有少量业务数据；")]),t._v(" "),v("p",[t._v("④ 不和具体底层连接绑定，QUIC 为每个连接的两端分别分配了一个唯一 ID，上层连接只认这对逻辑 ID。网络切换或者断连时，只需要继续发送数据包即可完成连接的建立；")]),t._v(" "),v("p",[t._v("⑤ 使用 QPACK 进行头部压缩，因为 在 HTTP/2 中的 HPACK 要求传输过程有序，这会导致队头阻塞，而 QPACK 不存在这个问题。")]),t._v(" "),v("p",[t._v("最后我们使用一张图来清晰的表示出 HTTP 协议的发展变化：")]),t._v(" "),v("p",[v("img",{attrs:{src:e(671),alt:"image-20210822101131449"}})]),t._v(" "),v("h3",{attrs:{id:"_2-17-dns-的作用和原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-17-dns-的作用和原理"}},[t._v("#")]),t._v(" 2.17 DNS 的作用和原理")]),t._v(" "),v("p",[v("strong",[t._v("DNS")])]),t._v(" "),v("p",[t._v("DNS（Domain Name System）是域名系统的英文缩写，是一种组织成域层次结构的计算机和网络服务命名系统，用于 TCP/IP 网络。")]),t._v(" "),v("p",[v("strong",[t._v("DNS 的作用")])]),t._v(" "),v("p",[t._v("通常我们有两种方式识别主机：通过主机名或者 IP 地址。人们喜欢便于记忆的主机名表示，而路由器则喜欢定长的、有着层次结构的 IP 地址。为了满足这些不同的偏好，我们就需要一种能够进行主机名到 IP 地址转换的目录服务，域名系统作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。")]),t._v(" "),v("p",[v("strong",[t._v("DNS 域名解析原理")])]),t._v(" "),v("p",[t._v("DNS 采用了分布式的设计方案，其域名空间采用一种树形的层次结构：")]),t._v(" "),v("p",[v("img",{attrs:{src:e(672),alt:"image-20210822101228872"}})]),t._v(" "),v("p",[t._v("上图展示了 DNS 服务器的部分层次结构，从上到下依次为根域名服务器、顶级域名服务器和权威域名服务器。其实根域名服务器在因特网上有13个，大部分位于北美洲。第二层为顶级域服务器，这些服务器负责顶级域名（如 com、org、net、edu）和所有国家的顶级域名（如uk、fr、ca 和 jp）。在第三层为权威 DNS 服务器，因特网上具有公共可访问主机（例如 Web 服务器和邮件服务器）的每个组织机构必须提供公共可访问的 DNS 记录，这些记录由组织机构的权威 DNS 服务器负责保存，这些记录将这些主机的名称映射为 IP 地址。")]),t._v(" "),v("p",[t._v("除此之外，还有一类重要的 DNS 服务器，叫做本地 DNS 服务器。本地 DNS 服务器严格来说不在 DNS 服务器的层次结构中，但它对 DNS 层次结构是很重要的。一般来说，每个网络服务提供商（ISP） 都有一台本地 DNS 服务器。当主机与某个 ISP 相连时，该 ISP 提供一台主机的 IP 地址，该主机具有一台或多台其本地 DNS 服务器的 IP 地址。主机的本地 DNS 服务器通常和主机距离较近，当主机发起 DNS 请求时，该请求被发送到本地 DNS 服务器，它起着代理的作用，并将该请求转发到 DNS 服务器层次结构中。")]),t._v(" "),v("p",[t._v("我们以一个例子来了解 DNS 的工作原理，假设主机 A（IP 地址为 abc.xyz.edu） 想知道主机 B 的 IP 地址 （def.mn.edu），如下图所示，主机 A 首先向它的本地 DNS 服务器发送一个 DNS 查询报文。该查询报文含有被转换的主机名 def.mn.edu。本地 DNS 服务器将该报文转发到根 DNS 服务器，根 DNS 服务器注意到查询的 IP 地址前缀为 edu 后向本地 DNS 服务器返回负责 edu 的顶级域名服务器的 IP 地址列表。该本地 DNS 服务器则再次向这些 顶级域名服务器发送查询报文。该顶级域名服务器注意到 mn.edu 的前缀，并用权威域名服务器的 IP 地址进行响应。通常情况下，顶级域名服务器并不总是知道每台主机的权威 DNS 服务器的 IP 地址，而只知道中间的某个服务器，该中间 DNS 服务器依次能找到用于相应主机的 IP 地址，我们假设中间经历了权威服务器 ① 和 ②，最后找到了负责 def.mn.edu 的权威 DNS 服务器 ③，之后，本地 DNS 服务器直接向该服务器发送查询报文从而获得主机 B 的IP 地址。")]),t._v(" "),v("p",[v("img",{attrs:{src:e(673),alt:"image-20210822101307944"}})]),t._v(" "),v("p",[t._v("在上图中，IP 地址的查询其实经历了两种查询方式，分别是递归查询和迭代查询。")]),t._v(" "),v("p",[t._v("拓展：域名解析查询的两种方式")]),t._v(" "),v("p",[t._v("递归查询：如果主机所询问的本地域名服务器不知道被查询域名的 IP 地址，那么本地域名服务器就以 DNS 客户端的身份，向其他根域名服务器继续发出查询请求报文，即替主机继续查询，而不是让主机自己进行下一步查询，如上图步骤（1）和（10）。\n迭代查询：当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的 IP 地址，要么告诉本地服务器下一步应该找哪个域名服务器进行查询，然后让本地服务器进行后续的查询，如上图步骤（2）~（9）。")]),t._v(" "),v("h3",{attrs:{id:"_2-18-dns-为什么用-udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-18-dns-为什么用-udp"}},[t._v("#")]),t._v(" 2.18 DNS 为什么用 UDP")]),t._v(" "),v("p",[t._v("更正确的答案是 DNS 既使用 TCP 又使用 UDP。")]),t._v(" "),v("p",[t._v("当进行区域传送（主域名服务器向辅助域名服务器传送变化的那部分数据）时会使用 TCP，因为数据同步传送的数据量比一个请求和应答的数据量要多，而 TCP 允许的报文长度更长，因此为了保证数据的正确性，会使用基于可靠连接的 TCP。")]),t._v(" "),v("p",[t._v("当客户端向 DNS 服务器查询域名 ( 域名解析) 的时候，一般返回的内容不会超过 UDP 报文的最大长度，即 512 字节。用 UDP 传输时，不需要经过 TCP 三次握手的过程，从而大大提高了响应速度，但这要求域名解析器和域名服务器都必须自己处理超时和重传从而保证可靠性。")]),t._v(" "),v("h3",{attrs:{id:"_2-19-怎么实现-dns-劫持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-19-怎么实现-dns-劫持"}},[t._v("#")]),t._v(" 2.19 怎么实现 DNS 劫持")]),t._v(" "),v("p",[t._v("DNS 劫持即域名劫持，是通过将原域名对应的 IP 地址进行替换从而使得用户访问到错误的网站或者使得用户无法正常访问网站的一种攻击方式。域名劫持往往只能在特定的网络范围内进行，范围外的 DNS 服务器能够返回正常的 IP 地址。攻击者可以冒充原域名所属机构，通过电子邮件的方式修改组织机构的域名注册信息，或者将域名转让给其它组织，并将新的域名信息保存在所指定的 DNS 服务器中，从而使得用户无法通过对原域名进行解析来访问目的网址。")]),t._v(" "),v("p",[t._v("具体实施步骤如下：")]),t._v(" "),v("p",[t._v("① 获取要劫持的域名信息：攻击者首先会访问域名查询站点查询要劫持的域名信息。")]),t._v(" "),v("p",[t._v("② 控制域名相应的 E-MAIL 账号：在获取到域名信息后，攻击者通过暴力破解或者专门的方法破解公司注册域名时使用的 E-mail 账号所对应的密码。更高级的攻击者甚至能够直接对 E-mail 进行信息窃取。")]),t._v(" "),v("p",[t._v("③ 修改注册信息：当攻击者破解了 E-MAIL 后，会利用相关的更改功能修改该域名的注册信息，包括域名拥有者信息，DNS 服务器信息等。")]),t._v(" "),v("p",[t._v("④ 使用 E-MAIL 收发确认函：在修改完注册信息后，攻击者在 E-mail 真正拥有者之前收到修改域名注册信息的相关确认信息，并回复确认修改文件，待网络公司恢复已成功修改信件后，攻击者便成功完成 DNS 劫持。")]),t._v(" "),v("p",[t._v("用户端的一些预防手段：")]),t._v(" "),v("p",[t._v("直接通过 IP 地址访问网站，避开 DNS 劫持。\n由于域名劫持往往只能在特定的网络范围内进行，因此一些高级用户可以通过网络设置让 DNS 指向正常的域名服务器以实现对目的网址的正常访问，例如将计算机首选 DNS 服务器的地址固定为 8.8.8.8。")]),t._v(" "),v("h3",{attrs:{id:"_2-20-socket-套接字有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-20-socket-套接字有哪些"}},[t._v("#")]),t._v(" 2.20 Socket() 套接字有哪些")]),t._v(" "),v("p",[t._v("套接字（Socket）是对网络中不同主机上的应用进程之间进行双向通信的端点的抽象，网络进程通信的一端就是一个套接字，不同主机上的进程便是通过套接字发送报文来进行通信。例如 TCP 用主机的 IP 地址 + 端口号作为 TCP 连接的端点，这个端点就叫做套接字。")]),t._v(" "),v("p",[t._v("套接字主要有以下三种类型：")]),t._v(" "),v("ul",[v("li",[t._v("流套接字（SOCK_STREAM）：流套接字基于 TCP 传输协议，主要用于提供面向连接、可靠的数据传输服务。由于 TCP 协议的特点，使用流套接字进行通信时能够保证数据无差错、无重复传送，并按顺序接收，通信双方不需要在程序中进行相应的处理。")]),t._v(" "),v("li",[t._v("数据报套接字（SOCK_DGRAM）：和流套接字不同，数据报套接字基于 UDP 传输协议，对应于无连接的 UDP 服务应用。该服务并不能保证数据传输的可靠性，也无法保证对端能够顺序接收到数据。此外，通信两端不需建立长时间的连接关系，当 UDP 客户端发送一个数据给服务器后，其可以通过同一个套接字给另一个服务器发送数据。当用 UDP 套接字时，丢包等问题需要在程序中进行处理。")]),t._v(" "),v("li",[t._v("原始套接字（SOCK_RAW）：由于流套接字和数据报套接字只能读取 TCP 和 UDP 协议的数据，当需要传送非传输层数据包（例如 Ping 命令时用的 ICMP 协议数据包）或者遇到操作系统无法处理的数据包时，此时就需要建立原始套接字来发送。")])]),t._v(" "),v("h3",{attrs:{id:"_2-21-uri和-url之间的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-21-uri和-url之间的区别"}},[t._v("#")]),t._v(" 2.21 URI和 URL之间的区别")]),t._v(" "),v("blockquote",[v("p",[t._v("URI（统一资源标识符）\nURL（统一资源定位符）")])]),t._v(" "),v("p",[t._v("URL，即统一资源定位符 (Uniform Resource Locator )，URL 其实就是我们平时上网时输入的网址，它标识一个互联网资源，并指定对其进行操作或获取该资源的方法。例如 https://leetcode-cn.com/problemset/all/ 这个 URL，标识一个特定资源并表示该资源的某种形式是可以通过 HTTP 协议从相应位置获得。")]),t._v(" "),v("p",[t._v("从定义即可看出，URL 是 URI 的一个子集，两者都定义了资源是什么，而 URL 还定义了如何能访问到该资源。URI 是一种语义上的抽象概念，可以是绝对的，也可以是相对的，而URL则必须提供足够的信息来定位，是绝对的。简单地说，只要能唯一标识资源的就是 URI，在 URI 的基础上给出其资源的访问方式的就是 URL。")]),t._v(" "),v("h3",{attrs:{id:"_2-22-为什么-fidder-charles-能抓到你的包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-22-为什么-fidder-charles-能抓到你的包"}},[t._v("#")]),t._v(" 2.22 为什么 fidder，charles 能抓到你的包")]),t._v(" "),v("blockquote",[v("p",[t._v("【抓取数据包的过程】")])]),t._v(" "),v("p",[t._v("假如我们需要抓取客户端的数据包，需要监控客户端与服务器交互之间的网络节点，监控其中任意一个网络节点（网卡），获取所有经过网卡中的数据，对这些数据按照网络协议进行解析，这就是抓包的基本原理。而中间的网络节点不受我们控制，是基本无法实现抓包的，因此只能在客户端与服务器之间进行抓包。")]),t._v(" "),v("p",[t._v("① 当采用抓包工具抓取 HTTP 数据包时，过程较为简单：")]),t._v(" "),v("ul",[v("li",[t._v("首先抓包工具会提出代理服务，客户端需要连接该代理；")]),t._v(" "),v("li",[t._v("客户端发出 HTTP 请求时，会经过抓包工具的代理，抓包工具将请求的原文进行展示；")]),t._v(" "),v("li",[t._v("抓包工具使用该原文将请求发送给服务器；")]),t._v(" "),v("li",[t._v("服务器返回结果给抓包工具，抓包工具将返回结果进行展示；")]),t._v(" "),v("li",[t._v("抓包工具将服务器返回的结果原样返回给客户端。")])]),t._v(" "),v("p",[t._v("这里抓包工具相当于透明人，数据经过的时候它一只手接到数据，然后另一只手把数据传出去。")]),t._v(" "),v("p",[t._v("② 当抓取 HTTPS 数据包时：")]),t._v(" "),v("ul",[v("li",[t._v("客户端连接抓包工具提供的代理服务，并安装抓包工具的根证书；")]),t._v(" "),v("li",[t._v("客户端发出 HTTPS 请求，抓包工具模拟服务器与客户端进行 TLS 握手交换密钥等流程；")]),t._v(" "),v("li",[t._v("抓包工具发送一个 HTTPS 请求给客户端请求的目标服务器，并与目标服务器进行 TLS 握手交换密钥等流程；")]),t._v(" "),v("li",[t._v("客户端使用与抓包工具协定好的密钥加密数据后发送给抓包工具；")]),t._v(" "),v("li",[t._v("抓包工具使用与客户端协定好的密钥解密数据，并将结果进行展示；")]),t._v(" "),v("li",[t._v("抓包工具将解密后的客户端数据，使用与服务器协定好的密钥进行加密后发送给目标服务器；")]),t._v(" "),v("li",[t._v("服务器解密数据后，做对应的逻辑处理，然后将返回结果使用与抓包工具协定好的密钥进行加密发送给抓包工具；")]),t._v(" "),v("li",[t._v("抓包工具将服务器返回的结果，用与服务器协定好的密钥解密，并将结果进行展示；")]),t._v(" "),v("li",[t._v("抓包工具将解密后的服务器返回数据，使用与客户端协定好的密钥进行加密后发送给客户端；")]),t._v(" "),v("li",[t._v("客户端解密数据。")])]),t._v(" "),v("p",[t._v("这个时候抓包工具对客户端来说相当于服务器，对服务器来说相当于客户端。在这个传输过程中，客户端会以为它就是目标服务器，服务器也会以为它就是请求发起的客户端。")])])}),[],!1,null,null,null);_.default=T.exports}}]);