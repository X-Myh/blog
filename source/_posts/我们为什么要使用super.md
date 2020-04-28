---
title: 我们为什么要使用super(props)
date: 2020-04-27 12:22:31
tags:
  - React
---

> 原文：https://overreacted.io/why-do-we-write-super-props/

1. 为什么调用super() ?
  答：调用super()后，才可以使用(parent定义的)this，所以如果你想在构造函数中使用this，Js会强制你首先调用super()函数

2. 为什么传递props参数？
  答：React会将props合并到实例（即使你仅仅调用super()），但是在合并之前(super - 构造函数结束)，你无法使用this.props。对于使用context的组件，你为什么不调用super(props, context)？？和props一个原理，context在构造函数中使用的场景更少。如果你不需要在构造函数里做一些额外的工作，只是声明state的话，可以使用class fields proposal，类似 state = {}，那就不会有super的问题

```
/ Inside React
class Component {
  constructor(props) {
    this.props = props;
    // ...
  }
}

// Inside your code
class Button extends React.Component {
  constructor(props) {
    super(); // 😬 We forgot to pass props
    console.log(props);      // ✅ {}
    console.log(this.props); // 😬 undefined 
  }
  // ...
}
```