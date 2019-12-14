---
title: React_v15-拾荒记
date: 2019-12-12 11:39:54
tags:
  - React
  - 前端
---

### jsx

> jsx是React.createElement(component, props, ...children)函数的一个语法糖，需要babel插件（preset-react）做转换。

需要注意的点：
1. React必须在当前作用域
2. 自定义组件必须首字母大写
3. 可以使用点标记(如：MyComponent.HeaderComponent)
4. Booleans、Null、和Undefined会被忽略(可以使用String(undefined/false/null))
5. 属性值默认为true

### setState()函数

setState函数有时是异步执行的，处于对性能的考虑，React有时会将多个setState操作合并成一个更新操作。

当你调用setState函数时，React会将需要更新的state与原state进行合并(merge)，合并的过程是浅拷贝。


### 事件处理

this指向问题，使用箭头函数或bind

**为什么：** js的class机制


### list和key
diff算法

### 表单处理
受控组件和非受控组件


### 条件渲染
注意渲染的条件必须返回boolean值，如：
```jsx harmony
function Hello() {
  return <h3>你好啊${ 0 && "我很好"}</h3>
}
// 显示会将0也显示出来
// 因为：Booleans, Null, and Undefined Are Ignored
```