(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{677:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v(".NET,IOS中RSA加解密使用的是PKCS1，而Java使用的是PKCS8")]),s._v(" "),a("p",[s._v("如果是按1024取模(通常都是1024)，PKCS1格式的私钥长度应该是812。如果是PKCS8的格式的密钥长度为861。")]),s._v(" "),a("p",[s._v("不管是PKCS1, 还是PKCS8. 都是公钥与私钥的的文件格式. 其本身依旧是密钥对.")]),s._v(" "),a("h4",{attrs:{id:"pkcs1与pkcs8格式私钥互相转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pkcs1与pkcs8格式私钥互相转换"}},[s._v("#")]),s._v(" PKCS1与PKCS8格式私钥互相转换")]),s._v(" "),a("h5",{attrs:{id:"生成pkcs1私钥："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成pkcs1私钥："}},[s._v("#")]),s._v(" 生成PKCS1私钥：")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("OpenSSL> genrsa -out pkcs1_private.pem 1024")])])]),s._v(" "),a("p",[s._v("内容:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-----BEGIN RSA PRIVATE KEY-----\nMIICWwIBAAKBgQCYMTaH4NMw5fQsgx3pv8xaAxhOdtUz/m5nfl9XHtGboXNzUzx/\nehh8c3RgpGcig83JXOYOXafmx3OS28Ed3e2fmC5Yo5RD6DRHnBCid28EjQ5PgCTd\ndNqDvcXU3YMH4sO1qNBx5MQpk92Kt/NdquIJmzhgpjP15MO5CFHcU90ZvQIDAQAB\nAoGANlvdjkrPI/f+bqemV4caBkx0shHftOJ7rJuGkid/1oakJdzlDuMdO9ZBCwOt\nkrZhGjsEML1i6xryPNIg9/n8lSdQqIUW61HXYwKUK5xQWz/MstWbbIx3t5driQFR\nFv53NLdemeF/0AJiD5COO1fkoM+1By2LlI0ths8cQLcOpgECQQDIc46yV1N5IuS0\nMYD0LgggaJ08WF0PrwjXgs+DRp3+ZE5WTs1JDkBQM9E598xbmy7AAFtdtR3L5CH8\n5Qh+KfwJAkEAwl4MuRMdIjiHiw1YoIUliy6t3XPvxeOEiG/P15adKrxI5A5QylM0\nTtbZT3YZurdy3nrJ75LxuU9cSYKzxtVFFQJAMboJElD7kjeHyPPm66xns7KAHzJE\nk9l2NhBrbkOcejlj/aE65/6zEbJpGxpQBgGvTU5JXCvMIoKLs/MVckb0EQJASze+\nULkW4zFhMuy9SZF9T/mGi1bciYZcubgbhODifbFTu/3WQhYk/gWjH18i4eEwcOyv\nzSjepsoRetk73UyXaQJAOfr3Gg1dGvoLiwZ3fXoDVupahnKg73SAd72+24qQs2AT\n16T8FKop259xisLu+WSUTfSUhao5qOpZJ/PTwFRlzw==\n-----END RSA PRIVATE KEY-----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h5",{attrs:{id:"pkcs1私钥转换为pkcs8-该格式一般java调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pkcs1私钥转换为pkcs8-该格式一般java调用"}},[s._v("#")]),s._v(" PKCS1私钥转换为PKCS8(该格式一般Java调用):")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("OpenSSL> pkcs8 -topk8 -inform PEM -in pkcs1_private.pem -outform pem -nocrypt -out pkcs8_private.pem")])])]),s._v(" "),a("p",[s._v("内容:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-----BEGIN PRIVATE KEY-----\nMIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJgxNofg0zDl9CyD\nHem/zFoDGE521TP+bmd+X1ce0Zuhc3NTPH96GHxzdGCkZyKDzclc5g5dp+bHc5Lb\nwR3d7Z+YLlijlEPoNEecEKJ3bwSNDk+AJN102oO9xdTdgwfiw7Wo0HHkxCmT3Yq3\n812q4gmbOGCmM/Xkw7kIUdxT3Rm9AgMBAAECgYA2W92OSs8j9/5up6ZXhxoGTHSy\nEd+04nusm4aSJ3/WhqQl3OUO4x071kELA62StmEaOwQwvWLrGvI80iD3+fyVJ1Co\nhRbrUddjApQrnFBbP8yy1ZtsjHe3l2uJAVEW/nc0t16Z4X/QAmIPkI47V+Sgz7UH\nLYuUjS2GzxxAtw6mAQJBAMhzjrJXU3ki5LQxgPQuCCBonTxYXQ+vCNeCz4NGnf5k\nTlZOzUkOQFAz0Tn3zFubLsAAW121HcvkIfzlCH4p/AkCQQDCXgy5Ex0iOIeLDVig\nhSWLLq3dc+/F44SIb8/Xlp0qvEjkDlDKUzRO1tlPdhm6t3LeesnvkvG5T1xJgrPG\n1UUVAkAxugkSUPuSN4fI8+brrGezsoAfMkST2XY2EGtuQ5x6OWP9oTrn/rMRsmkb\nGlAGAa9NTklcK8wigouz8xVyRvQRAkBLN75QuRbjMWEy7L1JkX1P+YaLVtyJhly5\nuBuE4OJ9sVO7/dZCFiT+BaMfXyLh4TBw7K/NKN6myhF62TvdTJdpAkA5+vcaDV0a\n+guLBnd9egNW6lqGcqDvdIB3vb7bipCzYBPXpPwUqinbn3GKwu75ZJRN9JSFqjmo\n6lkn89PAVGXP\n-----END PRIVATE KEY-----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h5",{attrs:{id:"生成pkcs1公钥："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成pkcs1公钥："}},[s._v("#")]),s._v(" 生成PKCS1公钥：")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("OpenSSL> rsa -in pkcs1_private.pem -pubout -out pkcs1_public.pem")])])]),s._v(" "),a("p",[s._v("内容:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYMTaH4NMw5fQsgx3pv8xaAxhO\ndtUz/m5nfl9XHtGboXNzUzx/ehh8c3RgpGcig83JXOYOXafmx3OS28Ed3e2fmC5Y\no5RD6DRHnBCid28EjQ5PgCTddNqDvcXU3YMH4sO1qNBx5MQpk92Kt/NdquIJmzhg\npjP15MO5CFHcU90ZvQIDAQAB\n-----END PUBLIC KEY-----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"pkcs1公钥转换为pkcs8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pkcs1公钥转换为pkcs8"}},[s._v("#")]),s._v(" PKCS1公钥转换为PKCS8:")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("OpenSSL> rsa -in pkcs8_private.pem -pubout -out pkcs8_public.pem")])])]),s._v(" "),a("p",[s._v("内容:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYMTaH4NMw5fQsgx3pv8xaAxhO\ndtUz/m5nfl9XHtGboXNzUzx/ehh8c3RgpGcig83JXOYOXafmx3OS28Ed3e2fmC5Y\no5RD6DRHnBCid28EjQ5PgCTddNqDvcXU3YMH4sO1qNBx5MQpk92Kt/NdquIJmzhg\npjP15MO5CFHcU90ZvQIDAQAB\n-----END PUBLIC KEY-----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意:")]),s._v(" "),a("p",[s._v("使用RSA进行加密的时候, 如果报不正常长度, 那么就要进行分段加解密.")]),s._v(" "),a("p",[s._v("RSA加解密:")]),s._v(" "),a("p",[s._v("1024位的证书, 加密时最大支持117个字节, 解密时为128;")]),s._v(" "),a("p",[s._v("2048位的证书, 加密时最大支持245个字节, 解密时为256.")]),s._v(" "),a("p",[s._v("加密时支持的最大字节数: 证书位数/8 -11(比如：2048位的证书，支持的最大加密字节数：2048/8 - 11 = 245)")]),s._v(" "),a("p",[s._v(".NET中的RSA加密算法为了提高安全性, 在待加密数据前要添加一些随机数. 因此, 使用.NET中的RSA加密算法一次最多加密117字节数据(多于117字节需要拆分成多段分别加密再连接起来), 经过加密后得到一个长度为128字节的加密数据.")]),s._v(" "),a("p",[s._v("RSA实际可加密的明文长度最大也是1024bits, 但问题就来了: 如果小于这个长度怎么办? 就需要进行padding, 因为如果没有padding, 用户无法区分解密后内容的真实长度, 字符串之类的内容问题还不大, 以0作为结束符.")]),s._v(" "),a("p",[s._v("但对二进制数据就很难理解, 因为不确定后面的0是内容还是内容结束符. 只要用到padding, 那么就要占用实际的明文长度, 于是才有117字节的说法.\n我们一般使用的padding标准有NoPPadding, OAEPPadding, PKCS1Padding等, 其中PKCS#1建议的padding就占用了11个字节. 如果大于这个长度怎么办? 很多算法的padding往往是在后边的, 但PKCS的padding则是在前面的, 此为有意设计, 有意的把第一个字节置0以确保m的值小于n.\n这样, 128字节（1024bits）-减去11字节正好是117字节, 但对于RSA加密来讲, padding也是参与加密的. 所以, 依然按照1024bits去理解, 但实际的明文只有117字节了.")])])}),[],!1,null,null,null);a.default=e.exports}}]);