---
title: 面试整理-html
date: 2019-10-23 10:50:56
tags:
  面试整理
  html
---

1. Doctype 作用？
DOCTYPE是用来声明文档类型和DTD规范的。<!DOCTYPE html>声明位于HTML文档中的第一行，不是一个 html 标签，处于 html 标签之前。告诉浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

2. 标准模式与兼容模式各有什么区别？
标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容，HTML5 不基于SGML，所以不用指定DTD。

3. canvas和svg的区别
canvas是html5提供的新元素，而svg存在的历史要比canvas久远，已经有十几年了。svg并不是html5专有的标签，最初svg是xml技术(超文本扩展语言，可以自定义标签或属性)描述二维图形的语言。在H5中看似canvas和svg很像，但是，它们有巨大的差别。
首先，从它们的功能上讲，canvas可以看做是一个画布。其绘制出来的图形为标量图，因此，可以在canvas中引入.jpg或.png这类格式的图片，在实际开发中，大型的网络游戏都是用canvas画布做出来的，并且canvas的技术现在已经相当娴熟。另外，我们喜欢用canvas来做一些统计用的图表，如柱状图曲线图或饼状图等。而svg，所绘制的图形为矢量图，所以其用法上受到了限制。因为只能绘制矢量图，所以svg中不能引入普通的图片，因为矢量图的不会失真效果，在项目中我们会用来做小图标。但是由于其本质为矢量图，可以被无限放大而不会失真，这很适合被用来做地图，而百度地图就是用svg技术做出来的。
另外从技术方面来讲canvas里面绘制的图形不能被引擎抓取，如我们要让canvas里面的一个图片跟随鼠标事件：canvas.onmouseover = function(){}。而svg里面的图形可以被引擎抓取，支持事件的绑定。另外canvas中我们绘制图形通常是通过JavaScript来实现，而svg更多的是通过标签来实现，如在svg中绘制正矩形，这里我们不能用属性style="width:xxx;height:xxx"来定义。

4. 行内元素有哪些？块级元素有哪些？空元素有哪些？
定义：CSS规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值，如 div 的 display 默认值为“block”，则为“块级”元素；span 默认 display 属性值为“inline”，是“行内”元素。
行内元素有：a b span img input select
块级元素有：div ul ol li dl dt dd h1 h2 h3 ....p
空元素：br hr meta img link input

5. 介绍一下你对浏览器内核的理解？
主要分两部分：渲染引擎(layout engineer 或 Rendering Engine)和JS引擎。
渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后渲染到用户的屏幕上。
JS引擎：解析和执行 JavaScript 来实现逻辑和控制 DOM 进行交互。
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于渲染引擎。

6. HTML和DOM的关系
HTML只是一个字符串
DOM由HTML解析而来
JS可以操作DOM

7. 主流浏览器及其内核
    * IE: trident
    * firefox: gecko
    * Safari: webkit
    * chrome: Chromium/Blink, 在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。
    * Opera: blink
    
8. 简述一下你对HTML语义化的理解？
    * 用正确的标签做正确的事情，增加代码可读性。
    * 方便搜索引擎解析，利于SEO
    * 即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的

9. 描述一下 cookies、sessionStorage 和 localStorage的区别
|  | cookies | sessionStorage | localStorage的 |
| :---- | :----: | :----: | ----: |
| 存储大小 | 4kb(请求会携带cookie) | 5M(或更大) | 5M(或更大) |
| 有效期 | cookie的过期时间 | 持久存储 | 当前浏览器(标签)会话期间 |
| 共享 | 同源/path规则 | 不能共享 | 同源 |

10. 为什么我们要弃用table标签
    * table要比其他HTML占更多字节
    * 延迟页面加载，等待整个table加载完毕
    * 限制页面的自由性，自适应之类
    * 语义不正确，它描述的是表现，而不是内容
    
11. 移动端项目需要注意的问题
    meta中设置viewport，阻止用户手滑放大或缩小页面
    ```html
       <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    ```

12. 300毫秒点击延迟问题
在移动端开发中，引入fastclick.js

13. 如何实现浏览器多个标签之间的通信？
    * WebSocket: win1 => server => win2，可以说是间接的实现win1和win2的通信
    * localStorage: onChange事件/轮询
    * cookie: 轮询
    * ShareWorker：很多浏览器都不支持，看起来还有点复杂，涉及线程啥的，之后研究
    * postMessage：还是有兼容性，必须要持有目标窗口的引用
    
14. webSocket 如何兼容低浏览器？
    * socket.io
    
15. html5 有哪些新特性、移除了哪些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等。功能的增加：
    * 绘画canvas
    * 用于媒介播放的 video 和 audio 元素
    * 本地离线存储localStorage，sessionStorage
    * 语义化更好的内容元素，比如 article、footer、header、nav、section
    * 表单控件： calendar、date、time、email、url、search
    * 新的技术 webworker、websocket、Geolocation
    * 移除的元素：
        * 纯表现的元素：basefont、big、center、font、s、strike、u
        * 对可用性产生负面影响的元素：frame、frameset、noframes
    * 支持 HTML5 新标签：
        * IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式
    * 如何区分 HTML5：DOCTYPE 声明\新增的结构元素\功能元素

16. html5 离线存储
    * 应用缓存(manifest)：已弃用
    * service workers

17. iframe 有哪些缺点
    * iframe 会阻塞主页面的Onload事件
    * 搜索引擎的检索程序无法解读这种页面，不利于SEO
    * iframe和主页面共享连接池，而浏览器对相同域的链接有限制，所以会影响页面的并行加载
    * 使用iframe 之前需要考虑这两个缺点，如果需要使用 iframe，最好是通过JavaScript
    * 动态给iframe添加src属性值，这样可以绕开以上两个问题。

18. 如何在页面上实现一个圆形的可点击区域？
    * map+area 或者 svg
    * border-radius
    * 纯js实现，需要求一个点在不在圆上简单算法、获取鼠标坐标等等

19. 资源的加载顺序(js、css)