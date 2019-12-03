---
title: redux原理
date: 2019-11-14 16:28:39
tags:
  - JavaScript
  - 前端
  - flux
  - redux
  - react
---

redux核心概念和flux类似，除了一些简化外，我觉得最重要的是它的中间件。

每个中间件接受一个(包装过的)dispatch函数，并返回一个新的(包装过)dispatch函数，可以作为下一个中间件的参数，以达到将中间件串起来的目的。然后借助Array.reduce函数将中间件层层包裹，比如中间件函数为[f1, f2, f3]，执行reduce后为(f1(f2(f3())))。

redux中间件源码中最重要的感觉就一行代码：funcs.reduce((a, b) => (...args: any) => a(b(...args)))，不过真的很难理解，函数嵌套的太深了，不过也就做了函数嵌套一件事。

至于在react中使用的话，也就是提供一个外层的container做state与store的同步，在react-redux中，是用context的搞的，这样的话，可以不用props层层传递。

像redux-thunk这种的话，源码就一句，action(dispatch, getState, extraArgument)，我们正常情况下action是一个特定格式的对象，但如果是函数的话，就把它当做一个异步任务，redux-thunk就会处理，然后action是我们自己定义的函数，但会接收到dispatch, getState参数，我们可以在这个action里面很多事情，调接口、各种耗时任务，至于何时调用dispatch，由你自己决定，其实就是延迟调用dispatch而已。

当然我们完全可以不用redux-thunk，而是将异步流程从redux流程分离，在执行完异步任务后再直接发起dispatch，当然，这样可能要把代码写在View层了。

像redux-saga就比较复杂了，毕竟人家的目标是管理side effects，就像上面的一些异步任务，会涉及到先执行哪一个effect、同步执行、异步执行等等乱七八糟的东西，还没仔细看，等研究后单独记录下。