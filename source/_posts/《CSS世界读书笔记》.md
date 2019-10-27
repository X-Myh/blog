---
title: 《CSS世界》读书笔记
date: 2019-09-18 16:15:51
tags:
  - 前端
  - 读书笔记
  - CSS
  - 《CSS世界》
---

### 第一章 概述

本书中CSS世界特指CSS2.1。

这个世界的事情只要发生了，都是有原因的，CSS世界的出现也不例外。要想深入理解CSS属性的一些设计原因、表现原理，离不开当时的历史环境，CSS世界的诞生就是为图文信息展示服务的。

作者认为，（文档）"流"是影响整个CSS世界的一个重要因素，"流"是一种基本的定位和布局机制，可以形象描述成CSS世界中引导元素排列和定位的一条看不见的"水流"，当然"流"可以被破坏（特殊布局），流向亦可以改变。

### 第二章 需提前了解的术语和概念

1. 属性：CSS世界内置的固有属性，每个属性都有不同的作用，用来定制我们自己的页面
2. 值：一般包括以下类型（与属性值关系密切）
    * 数值(z-index: 2)
    * 百分比(height: 30%)
    * 颜色值(red, #000)
3. 关键字：CSS内置的一些固定值(transparent、solid、red等)
4. 变量（本书不做介绍）
5. 长度单位：
    * 时间单位：s, ms
    * 角度单位：deg, rad
    * 长度单位: px, em
    * 其他：vh、vw等
6. 功能符（css函数）：
    * rgba
    * hsla
    * calc
    * url等
7. 属性值：值 + 关键字 + 功能符
8. 声明：属性名 + 属性值
9. 声明块：花括号（{}）包裹的一系列声明
10. 规则或规则集：选择器 + 声明块
11. 选择器：瞄准目标元素的东西
12. 关系选择器：根据元素之间的关系选择元素的选择器
13. @规则：以@字符开始的一些规则，像@media、@font-face、@page、@support

```css
body {
    color: red;  /* color是属性，red是值, red也是关键字(代表红颜色) */
}
```
##### CSS世界中的"未定义行为"

web标准未定义的行为表现，（甚至标准已定义的表现）各大浏览器厂商表现并不一致，默认样式不一致等。


### 第三章 流、元素与基本尺寸

width和height作用于content-box（当然可以凭借box-sizing更改），width: auto作用于不用类型的盒子（模型）上，会有不同的效果：充分利用可用空间(div)、收缩与包裹(span)、收缩到最小(table)、超出容器限制(white-space: nowrap)

`
书中特技：`
1. 在绝对定位模型中，默认情况元素的宽度表现是"包裹性"，宽度由内部尺寸决定，但是，当left/right或top/bottom对立方位的属性值同事存在的时候，元素的宽度表现为"格式化"宽度，如下可以间接设置宽度和高度（高度自适应100%）
<img src="/images/1568877786779.jpg" style="width: 800px; margin: 0;">

2. 一行文字居中，多行文字居左，其实就是用两个容器来控制，外面控制居中，里面控制居左，如下：

```html
<span class="out">
    <span class="inner">一些文字</span>
</span>
```
```css
.out {
    text-align: center;  /* 我能一行居中 */
}
.inner {
    text-align: left;  /* 我能多行居左 */
}
```
具体实例：https://demo.cssworld.cn/3/2-5.php

##### 首选最小宽度（指元素最适合的最小宽度）

<img src="/images/1568880343740.jpg" style="width: 400px; margin: 0;">

容器将宽度设置为0，子元素的宽度并不为0，但会影响到布局，从布局的角度来看，子元素也的确是不见了(不占位置)。

`书中奇技淫巧：`
1. 利用中英(连续英文单词不换行)文的最小宽度不同，可以构造类似凹凸的图形。
具体示例：https://demo.cssworld.cn/3/2-6.php
2. height: 100%：必须给与父元素固定高度或使用绝对定位。
3. 实现子元素等高：子元素自动撑开父元素，父元素position设置为relative，其他子元素再设置position: absolute, height： 100%，可实现这些绝对定位的子元素与撑开父元素的子元素等高。如下：
具体示例：https://demo.cssworld.cn/3/2-12.php 
```css
.box {
  display: inline-block;
  position: relative;
}
.prev, 
.next {
  width: 50%; height: 100%;
  position: absolute;
  top: 0;
  opacity: .5;
}
.prev {
  left: 0;
  background-color: #cd0000;
}
.next {
  right: 0;
  background-color: #34538b;
}
```
4. 利用max-height做任意高度元素的展开收起动画
5. 幽灵空白节点：
```css
/* <div><span></span></div> */
div {
    background-color: red;  /* 这个DIV本来高度应该是0，但实际不是，可自测，和font-size，line-height相关 */
}
span {
    display: inline-block;
}
```

### 第四章 盒尺寸四大家族

盒尺寸中的4个盒子，content、padding、border、marginß

##### 4.1 content与替换元素

1. 替换元素使用content可以替换原有替换属性的值，具体示例：https://demo.cssworld.cn/4/1-4.php

2. 普通元素也可添加content属性，值若设置为url()，那元素就会被替换，表现和img标签类似，具体示例：https://demo.cssworld.cn/4/1-5.php

3. content替换的只是视觉替换，比如替换图片后，无法保存content属性的图片
 
`书中奇技淫巧：`
1. 利用::before和::after实现两端对齐，具体示例：https://demo.cssworld.cn/4/1-7.php
2. 配合@font-face规则实现图标字体效果，具体示例：https://demo.cssworld.cn/4/1-8.php
3. 利用\A的换行特性，实现打点加载功能，具体示例：https://demo.cssworld.cn/4/1-9.php
4. content图片生成，具体示例：https://demo.cssworld.cn/4/1-10.php
5. content开启闭合符号生成，还可生成固定表单前缀，示例如下：
```css
/* 生成固定闭合符号：书名号 */
q::before {
    content: "《";
}
q::after {
    content: "》";
}
/* 固定表单前缀，或其他类似功能 */
.form-item::before {
    content: "请输入：";
}
```
6. content attr函数属性值内容生成
7. content计数器，counter-reset、counter-increment、counter()/counters()，可以像ul/ol一样制造序号，利用content的特性，结合content其他技术，可以更加灵活使用，具体示例：https://demo.cssworld.cn/4/1-11.php ~ https://demo.cssworld.cn/4/1-19.php

##### 4.2 温和的padding属性（温和是指很少出现意外的情况）

1. padding会影响元素的尺寸，会影响布局
2. padding的百分比计算始终是相对于（父元素）宽度的
3. 各个浏览器下不同元素的默认paading值一般都不一样（即兼容问题，通常可引入一些初始化CSS文件，如normalize.css）
`书中奇技淫巧：`
1. 实现类菜单icon（我觉得关键还是background-clip: content-box;三条线分别是上border、中content、下border，然后利用background-clip将padding的背景色隐藏掉），具体示例：https://demo.cssworld.cn/4/2-4.php
2. 实现双圆点效果（这个原理和2差不多，就是加了border的一些特性），具体示例：https://demo.cssworld.cn/4/2-4.php

##### 4.3 激进的margin属性
1. padding控制元素内边距，margin控制元素外边距
2. 元素尺寸：
    * margin尺寸：无对应DOM API
    * border尺寸：offsetWidth/offsetHeight
    * padding尺寸：clientWidth/clientHeight
    * content尺寸：(style.width)
3. 某些情况下，margin会影响到元素尺寸，具体示例：https://demo.cssworld.cn/4/3-1.php
4. 底部留白（有滚动条）不能用padding-bottom，有兼容问题（Firefox），使用margin的话留白部分没有滚动条，可多加个元素专门用作留白处理
5. 利用margin的负值可以扩大子元素相对于父元素的限制（非常使用于：整体左右padding固定，但是中间部分突出的布局）
6. margin合并：块级元素的上下外边距有时会合并为单个外边距（合并的意义：如下图，考虑到h1标签的上下边距，若没有margin合并，则两个h1中间部分会是现在的2倍，这样想来，margin合并还是有点道理的）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>hello</h1>
    <h1>world</h1>
</body>
</html>
```
<img src="/images/1569319838971.jpg" />

`书中特技：`
1. 实现等高布局：具体示例：https://demo.cssworld.cn/4/3-2.php，等高布局可百度搜索关键字：等高布局，我觉得比较靠谱的还是flex和table
2. 利用margin实现左右上下对齐，具体示例：https://demo.cssworld.cn/4/3-5.php

##### 4.4 功勋卓越的border属性









