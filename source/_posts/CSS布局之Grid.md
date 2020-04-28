---
title: CSS布局之Grid
date: 2020-05-03 14:21:13
tags:
  - Css
  - Grid
---

> 原文：https://css-tricks.com/snippets/css/complete-guide-grid/


### 基本术语
1. Grid Contianer
2. Grid Item
3. Grid Line
4. Grid Cell
5. Grid Track
7. Grid Area
  * 横跨行或列的多个Cell集合

### Grid Container的属性
1.  display: grid | inline-grid;
2.  grid-template-columns:  ... |   ...;
  * 单位可以是长度、百分比、fr（剩余空间占比）
  * line-name可以指定一个更可读的名称，用来代替指个具体的line(默认是: 1\~n, -n~-1)，可以在item里使用，同时可以指定多个line-name
  * repeat()函数可更简洁方便的定义重复部分
  * 多个line具有相同的line-name时，可以指定count来获取具体某一个line
3. grid-template-rows
4. grid-template-areas
  * 定义grid-area
  * .表示一个空格子
  * 相同的name定义会组成一个area区域，可供Item直接使用
5. grid-template: none | &lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;;
6. column-gap: &lt;line-size&gt;;
7. row-gap: &lt;line-size&gt;;
8. gap: &lt;grid-row-gap&gt; &lt;grid-column-gap&gt;;
9. justify-items: start | end | center | stretch;
  * 针对Cell对齐、Row
10. align-items: start | end | center | stretch;
  * 针对Cell对齐、Column
11. place-items: &lt;align-items&gt; / &lt;justify-items&gt;
12. justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  * 针对Container、Row
13. align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  * 针对Container、Column
14. place-content: &lt;align-content&gt; / &lt;justify-content&gt;
15. grid-auto-columns: &lt;track-size&gt; ...;
  * 定义容器之外的默认空间
16. grid-auto-rows: &lt;track-size&gt; ...;
17. grid

***
### Grid Item的属性
1. grid-column-start: &lt;number&gt; | &lt;name&gt; | span &lt;number&gt; | span &lt;name&gt; | auto;
2. grid-column-end: &lt;number&gt; | &lt;name&gt; | span &lt;number&gt; | span &lt;name&gt; | auto;
3. grid-row-start: &lt;number&gt; | &lt;name&gt; | span &lt;number&gt; | span &lt;name&gt; | auto;
4. grid-row-end: &lt;number&gt; | &lt;name&gt; | span &lt;number&gt; | span &lt;name&gt; | auto;
  * 可以使用z-index控制展示顺序
5. grid-column: &lt;start-line&gt; / &lt;end-line&gt; | &lt;start-line&gt; / span &lt;value&gt;;
6. grid-row: &lt;start-line&gt; / &lt;end-line&gt; | &lt;start-line&gt; / span &lt;value&gt;;
7. grid-area: &lt;name&gt; | &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;;
8. justify-self: start | end | center | stretch;
9. align-self: start | end | center | stretch;
10. place-self: &lt;align-self&gt; / &lt;justify-self&gt;


### 简记
  Grid的布局方式更像是Table，但比Table更灵活，因为Grid的Item可以任意定义在Grid Container的某个指定区域。比起Flex也是更加强大，Flex只是单纯的在主轴|交叉轴上定义一个比较模糊的布局方式，还是继承了比较传统的流的概念，Grid让你可以进行很精确的布局，而且Item可以重叠(z-index，这就有点像position)，就像是定好的格子在那里，Item想要那些完全可以自己选择。




