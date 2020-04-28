---
title: 我如何写React代码之Context
date: 2020-01-06 22:25:59
tags:
  - React
  - JavaScript
  - 前端
  - 我如何写React代码
---



### 背景

[我如何写React代码之原始人](/2020/01/03/我如何写React代码之原始人/)

### 我该用Context吗？

1. https://reactjs.org/docs/context.html

2. https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076

### Context能做什么？

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

所以在需要对子组件传递一些props，而且嵌套比较深的时候，可以考虑使用Context.

### 我该如何使用？

![图](/images/2020-01-06_22-42-58.png)

### 注意事项

1. 只要Provider的value变化consumers就会重新渲染，和shouldComponentUpdate没有关系
2. Provider的value是否变化的算法和Object.is()一致@[可能会遇到的问题](https://reactjs.org/docs/context.html#caveats)
3. React.Component.contextType属性：
   * 因为context是react内置的API，所以这个属性也相当于是给Context的使用(consumer)提供了一种简洁的方式
   * 限制：只会使用最近Provider提供的value值，且只能使用这一个Context
4. Context.Consumer
   * 这个是堂堂正正的ContextAPI，以函数回调的方式订阅context的变化，可以通过多层嵌套使用不同Provider提供的context
   * 缺点：没有contextType那么简洁



### 扩展

1. React router是如何使用ContextAPI的？
2. Redux和Context如何选择

