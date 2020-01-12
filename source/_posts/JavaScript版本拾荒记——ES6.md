---
title: JavaScript版本拾荒记——ES6
date: 2019-12-15 10:33:03
tags:
  - 前端
  - JavaScript
  - ES版本
  - ES 6
---

### 前言
之前看东西都是杂七杂八的，主要在MDN上看，一般都只会读到最新版的文档，因为有babel这种神器，也不会太去考虑版本兼容的问题，最近发现自己在这方面真的是太弱势了，所以想总结下ES各个版本的变化及差异。查查资料，看看JS的发展史，瞬间就感觉自己是半道（2016年学艺）出家，有太多的空白需要填补。

目前考虑ES6主线以阮一峰大佬的ES 6入门为主：https://es6.ruanyifeng.com/
ES5查漏补缺以网道为主：https://wangdoc.com/javascript/basic/

### let和const
1. （不存在）变量提升
2. 暂时性死区（一定要先声明，后赋值）
3. typeof不再100%安全（一定要先声明，后赋值）
4. 不允许重复声明
5. 块级作用域（ES5：全局作用域 + 函数作用域）
6. const一旦声明变量，就必须立即初始化，不能留到以后赋值
7. const声明常量的局限性（仅针对变量指针的不变而非值，如数组等依旧可以改变）（考虑Object.freeze）
8. 变量声明方式归纳：var、function、let、const、import、class

### 变量的解构赋值
1. 不完全解构和解构不成功
2. 数组解构依赖Iterator接口（按次序）
3. 对象解构依赖属性（按属性名）
4. 默认值，生效的条件是值必须严格等于undefined，如null是不会生效的
5. 对象解构是找到同名属性再赋值，属性重命名（别名）
6. 嵌套解构
7. 解构赋值可以拿到原型链上的属性
8. 使用圆括号解决已声明变量的解构赋值报错问题（一般不要这么做，代码丑陋而且容易出问题）
9. 数组可以以下标的方式进行对象解构（这没有任何意义，因为我们可以直接使用下标对数组进行访问）
10. 字符串会被当做数组进行解构
11. 数值和布尔值会被当成其对应的包装对象进行解构
12. 函数参数解构赋值，参数默认值和变量默认值
##### 常见用途
    1. 模块加载
    2. Map遍历，for...of => [key, value]形式
    3. 函数参数默认值
    4. 交换变量的值（数组按顺序，对象按属性）

> 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

### 字符串的扩展
1. Unicode表示法
2. 字符串遍历（注意和for循环的区别）
3. 模板字符串
4. 标签模板（函数调用）
5. API更新：
    * String.fromCodePoint()
    * String.raw()
    * s.codePointAt()
    * s.normalize()
    * s.includes(), startsWith(), endsWith()
    * s.repeat()
    * s.padStart()，padEnd()
    * s.trimStart()，trimEnd()
    * s.matchAll()

### 正则的扩展
1. 构造函数行为
2. 字符串API正则表达式
3. u修饰符
4. RegExp.prototype.unicode属性
5. y修饰符
6. RegExp.prototype.sticky
7. RegExp.prototype.flags
8. s 修饰符：dotAll 模式 
9. 后行断言
10. Unicode 属性类
11. 具名组匹配
12. String.prototype.matchAll

### 数值的扩展

1. Number.isFinite()
2. Number.isNaN()
3. Number.parseInt()
4. Number.parseFloat()
5. Number.isInteger()
6. Number.EPSILON
7. Number.isSafeInteger()
8. Math.trunc()
9. Math.sign()
10. Math.cbrt()
11. Math.clz32()
12. Math.imul()
13. Math.fround()
14. Math.hypot()
15. Math.expm1()
16. Math.log1p()
17. Math.log10()
18. Math.log2()
19. Math.sinh()
20. Math.cosh()
21. Math.tanh()
22. Math.asinh()
23. Math.acosh()
24. Math.atanh()
25. 指数运算符：\*\*
26. BigInt数据类型

### 函数的扩展

1. 函数参数默认值
2. rest参数
3. name属性
4. 箭头函数

### 数组的扩展



