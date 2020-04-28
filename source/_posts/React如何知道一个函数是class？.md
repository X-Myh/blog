---
title: React如何知道一个函数是class？
date: 2020-04-27 12:54:52
tags:
  - React
---

> 原文：https://overreacted.io/how-does-react-tell-a-class-from-a-function/

问题：当你调用一个组件时，&lt;ComponentName /&gt;，你不知道ComponentName是一个function或class(尤其是在浏览器环境中，它们都是函数，大多情况被babel编译，[如何区别Class和Function？？](https://stackoverflow.com/questions/29093396/how-do-you-check-the-difference-between-an-ecmascript-6-class-and-function))，React内部需要做出区别，因为函数组件和类组件在React里是被区别对待的。

这个问题涉及到：new, this, class, arrow functions, prototype, __proto__, instanceof，还要考虑到被Babel编译后的情况。

  1. this和new
  2. class和function
    * class语法必须使用new操作符，否则会报错
    * 大佬的这个表格很有必要：<table>
    <thead>
    <tr>
    <th></th>
    <th><code class="language-text">new Person()</code></th>
    <th><code class="language-text">Person()</code></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><code class="language-text">class</code></td>
    <td>✅ <code class="language-text">this</code> is a <code class="language-text">Person</code> instance</td>
    <td>🔴 <code class="language-text">TypeError</code></td>
    </tr>
    <tr>
    <td><code class="language-text">function</code></td>
    <td>✅ <code class="language-text">this</code> is a <code class="language-text">Person</code> instance</td>
    <td>😳 <code class="language-text">this</code> is <code class="language-text">window</code> or <code class="language-text">undefined</code></td>
    </tr>
    </tbody>
    </table>

3. 为什么不直接使用new操作符(来执行所有的函数、类)
  * 箭头函数不能被new调用(箭头函数没有prototype，可以判断一个函数是否是箭头函数做差异化处理，但babel编译后不行)
  * React组件支持String和其他基本类型，但是使用new操作对于函数返回的基本类型会直接忽略而返回一个对象，这是因为new操作符的设计本身如此

4. React到底是如何判断的呢？
  * React.Component：当你编写Class组件时，必须继承React.Component，继承相关，prototype问题，instanceof关键词，可以通过判断是否继承React.Component来作为Class的依据，但当页面有多份React的拷贝时instanceof将不再可靠
  * Component.prototype.isReactComponent：所以目前React的做法是在React.Component的原型上加了判断依据(static properties 容易丢失)

> If the final API is successful, its users never have to think about this process.—— by Dan Abramov
