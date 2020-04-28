---
title: CSS布局之Flex
date: 2020-04-28 17:54:11
tags:
  - Css
  - Flex
---

> 原文：https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### 背景
  在不知道元素具体尺寸的情况下，提供一种更有效的布局手段，对齐方式，以及在容器的各项之间分配空间。

### 基本术语
  1. flex container
  2. flex item
  3. 主轴、交叉轴
  4. main-statr/main-end、cross-start/cross-end
  5. main-size、cross-size

### 属性介绍
  1. display: flex;
  2. flex-direction: row(default) | row-reverse | column | column-reverse;
  3. flex-wrap: nowrap(default) | wrap | wrap-reverse;
  4. flex-flow: row(default) nowrap(default);
    * flex-direction 和 flex-wrap的简写
  5.   justify-content: flex-start(default) | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    * start: item排列在writing-mode的方向
    * left: 和start很类似
    * Edge不支持space-between
    * chrome不支持start/end/left/right
    * 可靠的值为：flex-start、flex-end 和 center
    * safe/unsafe ???
      > There are also two additional keywords you can pair with these values: safe and unsafe. Using safe ensures that however you do this type of positioning, you can’t push an element such that it renders off-screen (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).
  6. align-items: stretch(default) | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
    * stretch: 交叉轴填充容器
    * baseline：items基于baseline对齐
    * left、right、safe、unsafe、start、end：大多数浏览器不支持
  7. align-content: flex-start(default) | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
    * 交叉轴上多行的对齐方式(justify-content是主轴上的对齐方式)
    * 目标是轴，不是Item，注意和align-item的区别
  ***
  8. order: 0(default);
  9. flex-grow: 0(default);
  10. flex-shrink: 0(default);
  11. flex-basis: auto(default);
    * 设置flex item的初始值
    * [MDN详细介绍](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
  12. flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  13. align-self: auto | flex-start | flex-end | center | baseline | stretch;

### 其他一些资源
  1. https://bennettfeely.com/flexplorer/
  2. https://bocoup.com/blog/dive-into-flexbox
  3. https://www.w3.org/TR/css-flexbox-1/

### Bugs
  1. https://github.com/philipwalton/flexbugs




