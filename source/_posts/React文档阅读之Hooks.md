---
title: React文档阅读之Hooks
date: 2020-01-12 17:25:11
tags:
  - React
  - JavaScript
  - React文档阅读
---



### 简介

Hooks是在16.8新增的功能，它们能够让你在没有Class的情况下使用state和其他React功能。

### 为什么要新增Hooks？

1. 组件之间难以共享状态逻辑(props + HOC，wrapper hell)
2. 复杂组件难以理解（重复的逻辑，初始化/更新/卸载）
3. JavaScript class机制对于人们造成的误解（this指向）

### 我该什么时候使用Hooks？

1. 如果你喜欢Hooks，可以在新增的功能产品上使用Hooks
2. 不建议将以前的代码全部重写

### Hooks概览

1. State Hook: useState()
2. Effect Hook: useEffect()
3. Hooks规则：
   * 只允许在函数顶层使用Hooks，不允许在条件、循环、内部函数里使用
   * 只允许在函数组件或自定义的Hooks里调用Hooks
   * 可以使用linter pluginl避免违反上面规则
4. 创建你自己的Hooks(自定义Hooks)
5. 其他Hooks
   * useContext
   * useReducer

### 使用State Hook（useState()干了什么？）

1. 声明一个状态变量，这个变量会被React存储
2. useState('hello')，hello是该状态变量的默认值
3. useState()返回一个数组，[state, setState]，state表示这个状态变量，setState用来更新这个状态变量
4. 可以通过多次调用useState()函数以声明多个状态变量

### Effect Hook（useEffect()干了什么？）

1. Effect Hook可以让你在函数组件里执行一些副作用的操作，比如数据获取、手动更新DOM等
2. useEffect()会在每次render的时候都会重新调用(可能会有性能问题)
3. useEffect()第二个参数可以用来控制是否在render的过程中重新执行
4. 可以在回调函数里返回一个卸载函数（就像componentWillUnmount）,不像class，这种返回函数的写法可以将某个逻辑中注册和清除的工作放在一起
5. 可以使用Effect Hook将逻辑分割成不同的自定义Hook，已达到代码分割及复用的目的

### Hooks规则（为什么会有这些规则）

> React依赖于Hooks的调用顺序

我们在声明一个状态变量的时候，没有给定一个key或者其他的唯一标识。React会存储我们声明的状态变量，每次render之后，再次调用useState()会根据调用次序正确返回已存储的状态变量。



....未完