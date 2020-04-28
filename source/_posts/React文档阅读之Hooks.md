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

### 构建你自己的Hooks

1. 一个Hooks可以返回一个状态值（类似state），且这个值可变，而改变的逻辑就在定义这个Hooks的函数中
2. 一般自定义最底层的Hooks都会用到系统Hooks（useState、useEffect等）
3. 下面是[一个简单的例子](http://jsfiddle.net/avbqfcm7/4/)：

```jsx
const { useState, useEffect } = React;

function useTime() {
	const [time, setTime] = useState();
  useEffect(() => {
  	setTimeout(() => {
    	setTime(Date.now());
    }, 1000);
  })
  return time;
}

function MyHooks(props) {
	const time = useTime();
  return (
  	<h3>{time}</h3>
  );
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <MyHooks />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))

```

### Hooks API引用

1. 基础Hooks
   * useState
   * useEffect
   * useContext
2. 其它Hooks
   * useReducer
   * useCallback
   * useMemo
   * useRef
   * useImperativeHandle
   * useLayoutEffect
   * useDebugValue

### Hooks FAQ

* 使用策略
  1. 版本：16.8
  2. 当前Hooks并未覆盖所有的class场景，如getSnapshotBeforeUpdate、componentDidCatch生命周期，还有部分三方库可能不支持
  3. 和Redux集成，React Redux since v7.1.0已经支持Hooks方式，之前版本可仍使用以前的方式
  4. 静态类型：Flow和TypeScript React定义已经支持React Hooks
  5. 测试使用Hooks的组件
  6. lint 规则强制做了哪些：
     1. Hooks本身在一个函数组件或另一个Hooks里
     2. Hooks每次调用顺序不会变
* 从Classes到Hooks
  1. 生命周期映射