---
title: 借助Hooks API创建局部模块类Redux的数据流
date: 2020-03-08 15:23:23
tags:
  - React
  - React Hooks
---


### 背景

目前做的项目每个模块都单独分离，不再和整体应用内聚，所以在对redux等全局工具的使用上就显得有些笨手笨脚。纵使模块高度分离，但是大部分的模块应用复杂度仍然很高。

之前一直使用contex来管理模块顶层数据，但这会使模块顶层组件变得臃肿难懂。

最近研究了下Hooks API，觉得非常符合现在的开发模式，因为借助useReducer和contex可以基本实现一个局部的类redux的开发流程，以使得单个模块内有清晰的数据流。



### 如何实现


![](/images/react-hooks-pratice.png)


### 简单示例

https://github.com/iWuzhi/react-hooks-practice
