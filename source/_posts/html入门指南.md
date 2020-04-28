---
title: html入门指南
date: 2019-10-23 10:42:16
tags: 
  - 前端
  - html
---
第一次开始接触的时候，你可能会复制(从书上、网上、看视频手打)下面一段代码片段：
``` html
<!DOCTYPE html>
<html>
<head>
    <title>Document Title</title>
</head>
<body>
    Hello World !
</body>
</html>
```
你用记事本、Sublime text、WebStorm等你习惯的编辑器，然后保存为.html格式的文件，接着你双击这个文件，你的默认浏览器自动打开(或者将文件拖拽到你喜欢的浏览器)，你看到了空白的浏览器中显示着“Hello World !”，你还看到了浏览器Tab的标题显示着“Document Title”。

你欣赏着自己的作品，心里默念一句：卧槽，HTML真简单，劳资5min就学会了。

简单使你的学习欲望顿时上升了一大截，在接下来的学习中，你又了解到各种新的词汇：
比如标签、文档、w3c、块元素、内联元素等。渐渐地你对HTML的结构开始熟悉起来了，知道HTML有固定的格式，这是因为规范如此。
<b>备注</b>：<i>
既然是规范，想必是为了众多浏览器能够统一实现API，规定HTML结构，浏览器只要按规范实现即可，也降低了开发者的学习成本，不用为每种不同的浏览器学习不同的语法，使用不同的代码编写同样的效果。谁来制定呢，当然是[w3c](https://www.w3.org/TR/html52/)了，后来w3c决定制定一个最终版HTML规范，就是以后再也不改了， 但是浏览器厂商却不同意，觉得HTML还是要更加灵活，于是就有了分歧，几个浏览器厂商联合起来又搞了个组织[whatwg](https://html.spec.whatwg.org/)，目前w3c的规范也是趋向于whatwg。
</i>

在逐渐深入的过程种你发现，学习HTML无非就是学习标签而已，只要记住了常用的标签，出门就能说自己精通HTML。

<b>备注：</b><i>推荐一个网站: [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)，MDN将HTML分为了四大模块进行介绍，<b>基础、多媒体与嵌入、表格、表单</b>，每个模块里又有更细的划分与详尽的介绍。</i>

你挑选了一些常用的标签：div、h1~h5、a、form、label、button、input、textarea、select + option、span、ol/ul + li、table、img。这些标签你每个都手敲了一遍，或者根据网上的例子，看看在浏览器中的真实展示效果。

至此，你的标签储备足够你日常使用了。学习了别人的规范，接下来就得规范自己了，什么代码风格、语义化啊。

HTML真的是太简单了，就算是你平时一直在用，也不会出现什么特别的问题值得你去积累，去研究。

对于HTML的学习，个人觉得真额是考验单词储备量，平时真正用到的也就那几个。

<b>一些常用的链接：</b>

1. 一个很完整的Table例子：https://roy-tian.github.io/mdn-examples/html/planets-data/
2. 原生表单控件：https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets
3. 块级元素：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements
4. 行内元素：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements
5. w3c组织：https://www.w3.org/TR/html52/
6. whatwg组织：https://html.spec.whatwg.org/

下面是我创建项目时经常用到的一个模板：

``` html
<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <!--指定文档编码方式，一般都是UTF-8-->
    <meta charset="UTF-8" />

    <!--作者-->
    <meta name="author" content="iWuzhi" />

    <!--描述-->
    <meta name="description" content="" />

    <!--关键词 作弊者会充斥大量的关键词扰乱搜索引擎，所以这个不再怎么使用了-->
    <meta name="Keywords" content="" />

    <!--指定文档的兼容模式-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <!--让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

    <!--阻止移动设备自动识别某些额外的功能，如拨打电话功能，主要针对Safari-->
    <meta name="format-detection" content="telephone=no,email=no,address=no" />

    <!--防止页面被缓存-->
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <!--站点图标-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

    <!--标题-->
    <title>通用html模板</title>

</head>
<body>
    <div id="root"></div>
</body>
</html>
```