
这是nodejs的第一节课

一、主要内容有：

1、本地和github的关联；    [github.md]

2、nodejs创建静态的服务器  [repl]

3、http协议  [http.md]

4、console常见方法   [console.js]

5、repl


二、扩展点：

1、计算JS的运行时间；[driver.js]

2、读文件;  [driver.js]

3、nodeAPI文档：http://nodeapi.ucdok.com/#/api/


三、nodejs解决后台的问题：

1、如何把服务器上的文件返回给客户端？  fs

2、如何定位文件？  path（处理路劲）

3、如何把图片等内容返回给客户端进行正确解析？ buffer

4、如何控制发送的速度？ stream

5、如何记录日志？  console

6、如何传输数据？  udp、tcp

7、如何压缩数据？  gzip

8、如何加密保存数据？  crypto

9、如何利用多核cpu？

10、如何获取服务器信息？

11、如何与数据库进行交互？


四、作业：做一个静态文件服务器

1.有索引页，可以列出所有的文件和文件夹；

2.点击文件夹，进入 下一级目录 ；

3.点击文件渲染或下载该文件；

4.防止用户阅读系统文件。

