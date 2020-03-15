---
title: 如何使用Html 5 Drag API 实现一个可拖拽排序的列表
date: 2020-03-10 20:11:40
tags:
  - React
  - HTML 5 拖放
---

### 背景

项目中遇到一个需要拖拽排序的功能，稍微研究了下拖拽方面的东西。

针对React比较流行的库有：

1. react-draggable: 纯粹使用transform进行移动，pass掉
2. react-dnd：基于h5拖放API，OK

接着便开始着手研究react-dnd的文档，稍微有点复杂，核心还是把元素的拖拽行为变为数据的拖拽行为，符合React的一贯作风。
但我觉得就一个排序的拖拽，这个库有稍微有点复杂了。而且库本身体积还挺大的(746 kB)，于是就放弃了，开始直接研究原始的API。

### 如何实现

1. ondragstart
对可拖拽的目标注册ondragstart事件，记录该目标的索引

2. ondragover
对投放目标添加ondragover事件，并将元素索引绑定至data-index，
接着在事件函数里判断被拖拽的元素索引和当前投放目标的索引(此处要注意event.target和event.currentTarget的区别)，
并未其添加相应hover样式。

3. ondragleave
还要对投放目标添加ondragleave事件，这个是和ondragover事件相对应起来的，需要将ondragover里做的一些事情复原，比如样式的改动

4. ondrop
最后一步就是目标投放，还是为投放目标添加ondrop事件，然后在ondrop事件里可以拿到当前投放的索引，以及之前在ondragstart事件里记录的被拖拽索引。
接着就是改变列表list的顺序就可以了。



