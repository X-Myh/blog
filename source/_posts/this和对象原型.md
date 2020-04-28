---
layout: 第二部分
title: this和对象原型
date: 2019-10-27 14:48:55
tags:
  - 读书笔记
  - 《你不知道的JavaScript》
  - JavaScript
  - 前端
---


### 第一章 关于this

1. this误区：
    * 误区一：指向函数自身
    * 误区二：指向函数的作用域
 
2. 到底this是什么
this是在运行时绑定的，它的上下文取决于函数调用时的各种条件，this的绑定和函数的位置没有任何关系，只取决于函数的调用方式，当一个函数被调用时，会创建一个活动记录（执行上下文），这个记录会包含函数在哪里被调用、函数的调用方式、传入的参数等信息，this就是这个记录的一个属性，会在函数执行的过程中用到。


### 第二章 this全面解析

函数的this是在调用时绑定的，完全取决于函数的调用位置

##### 绑定规则

1. 默认绑定：独立函数调用（绑定到全局对象或undefined，取决于是否是严格模式）
```javascript
function foo() {
  console.log(this.a);
}
var a = 2;

foo();  // 2
```
2. 隐式绑定：函数调用位置是否有上下文对象
```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
}
obj.foo();  // 2
```
***隐式丢失***：被隐式绑定的函数会丢失绑定对象，也就是说，它会应用默认绑定规则，如下示例，函数调用位置引用的是函数本身，即函数独立调用
```javascript
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo;  // 函数别名
var a = "oops, global"; // 全局对象属性
bar();  // "oops, global"

// 另一种常见的情况是传入回调函数时：
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  fn();
}

var obj = {
  a: 2,
  foo: foo,
}
var a = "oops, global";
doFoo(obj.foo);  // 参数传递其实就是一种隐式赋值，所以结果和上面例子一致
```
3. 显式绑定（call/apply、bind）

    * 硬绑定
    * API调用的"上下文"：一些内置函数、三方库提供的额外参数，作用和bind类似
    
4. new 绑定
和传统面向对象的语言不一样，javascript中new操作符的作用完全不一样：
    * 创建一个全新的对象
    * 这个新对象会被执行Prototype连接
    * 这个心对象会绑定到函数调用的this
    * 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象

##### 绑定规则优先级

1. new绑定：绑定到新创建的对象
2. 显式绑定：绑定到指定对象
3. 隐式绑定：绑定到引用上下文(对象)
4. 默认绑定：严格模式下绑定到undefined，否则绑定到全局对象

##### 被忽略的this

在进行显示绑定时，某些情况你会将null/undefined作为绑定对象（apply展开数组，bind函数柯里化），这些值在调用时会被忽略，实际应用默认绑定。但这可能会带来一些副作用，比如某个函数确实使用了this，那就会对全局属性造成影响，后果无法预估。

另一种更安全的做法是，传入一个特殊的对象，把this绑定到这个对象不会对你的程序产生任何副作用，一个空的非委托对象，如下：
```javascript
function foo(a, b) {
  console.log(a, b);
}
var ø = Object.create(null);

// 把数组展开
foo.apply(ø, [2, 3]);  // 2, 3

// 使用bind进行函数柯里化
var bar = foo.bind(ø, 2);
bar(3);  // 2, 3
```

##### 箭头函数
箭头函数不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的this绑定。


### 第三章 对象
##### 语法
对象可以通过两种形式定义：声明形式和构造形式。
```javascript
// 对象的文字语法：
var myObj = {
  key: "value"
}

// 构造形式：
var myObj = new Object();
myObj.key = "value";
```
##### 类型
对象是JavaScript的基础，在JavaScript中一共有六种主要(简单基本)类型：
* string
* number
* boolean
* null 
* undefined
* object

简单基本类型本身并不是对象，"JavaScript中万物皆是对象"这显然是错误的，null有时会被当做一种对象类型，即对null执行typeof null时会返回字符串"object"，这是语言本省的一个bug。
***备注：***在JavaScript中，二进制前三位都为0的话会被判断为object类型，null的二进制表示是全0，所以执行typeof时会返回"object"

##### 内置对象(函数)
* String
* Number
* Boolean
* Object
* Function
* Array
* Date
* RegExp
* Error

某些内置对象和基本类型很像，但它们并不一样，功能上倒是和一些面向对象语言的"装箱"类似，而且在必要时，string、number会自动转换成对象的内置对象。null和undefined没有对应的构造形式，Date只有构造形式，Object、Array、Function、RegExp无论使用文字形式还是构造形式，他们都是对象，不是字面量。Error很少在代码中显式创建，一般是在抛出异常时被自动创建，也可以使用new Error(...)这种构造形式来创建。

##### 内容
对象的内容是由一些存储在特定命名位置的任意类型的值组成的，我们称之为属性。

1. 可计算属性名
ES6增加了可计算属性名，可以在文字形式中使用[]包裹一个表达式来当做属性名：
```javascript
var prefix = "foo";
var myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world",
}

myObject["foobar"];  // hello
myObject["foobaz"];  // world
```
2. 数组
数组有一套更加结构化的值存储机制。数组也是对象，所以虽然每个下标都是整数，你仍然可以给数组添加属性：
```javascript
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray.length;  // 3
myArray.baz;  // "baz"
```
无论添加了命名属性，数组的length值并不会发生改变。
***注意：***如果你试图向数组添加一个属性，但是属性名"看起来"像一个数字，它会变成一个数值下标，因此会修改数组的内容，而不是添加一个属性：
```javascript
var myArray = ["foo", 42, "bar"];
myArray["3"] = "baz";
myArray.length;  // 4
myArray[3];  // "baz"
```
3. 复制对象
JavaScript中没有内置的copy函数，因为我们无法选择一个默认的复制算法，但却可以通过一些其他手段做到这一点。
    * JSON序列化: 深度拷贝
    * Object.assign：浅度拷贝

4. 属性描述符
    * Object.getOwnPropertyDescriptor(obj, prop)：获取属性描述符
    * Object.defineProperty(obj, prop, descriptor)：设置属性描述符
```javascript
var myObject = {
  a: 2
}
Object.getOwnPropertyDescriptor(myObject, "a");
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// }
Object.defineProperty(myObject, "a", {
  value: 3,
  writable: false,
  configurable: false,
  enumerable: false,
})
```
描述符属性的意义：
* writable：决定是否可以修改属性的值
* configurable: 决定是否可以修改描述符，将configurable改成false是单向操作，无法撤销。例外是，可以将writable由true改为false，但无法由false改为true。configurable还会禁止删除这个属性，即delete语句会失败
* enumerable：控制属性是否会出现在对象的枚举属性中，如是否出现在for...in循环中
* value：定义该属性的值
* get/set：定义属性访问时的特殊行为

5. （浅）不变性
所有的方法创建的都是浅不变性，也就是说，他们只会影响目标对象和他的直接属性，如果目标对象引用了其他对象，其他对象的内容不受影响，仍然是可变的。
    * 对象常量：使用writable + configurable可以创建一个真正的常量属性（不可修改、重定义或者删除）
    * 禁止扩展：Object.preventExtensions(obj)禁止添加新的属性并且保留已有属性
    * 密封：Object.seal()会创建一个"密封"的对象，这个方法实际上会在一个现有对象上调用Object.preventExtensions()并把所有现有属性标记为configurable: false
    * 冻结：Object.freeze()会创建一个"冻结对象"，这个方法实际上会在一个现有对象上调用Object.seal()，并把所有的"数据访问"属性标记为writable: false
    
6. [[Get]]和[[Put]]
JavaScript在属性访问时，实现了[[Get]]和[[Put]]操作，类似函数。ES5中可以使用getter和setter部分改写默认操作，但是只能应用在单个属性上，getter是一个隐藏函数，会在获取属性值时调用，setter也是一个隐藏函数，会在设置属性值时调用。
```javascript
// 方法一：对象文字语法
var myObj = {
  get a() {
    return this._a_;
  },
  set a(val) {
    this._a_ = val * 2;
  }
}
myObj.a = 2;
myObj.a;  // 4

// 方法二：属性描述符
// 忽略value和writable特性，取而代之的是set和get
var myObject = {
  a: 2,
}
Object.defineProperty(myObject, "b", {
 get: function() {
   return this.a * 2;
 },
 enumerable: true,
})
myObject.a;  // 2
myObject.b;  // 4
```
7. （属性）存在性
    * in操作符会检查属性是否在对象及其[[Prototype]]原型链中，hasOwnProperty只会检查属性是否在当前对象中，不会检查[[Prototype]]链，所有的普通对象都可以通过对于Object.prototype的委托来访问hasOwnProperty()，但有的对象没有链接到Object.prototype（通过Object.create(null)来创建的对象），这种情况下，调用hasOwnProperty()会失败，这时可以使用Object.prototype.hasOwnProperty.call(myObject, "a")，借用该方法并把它显示绑定到myObject上。
    * for...in循环有时会产生出令人意料之外的结果，因为这种枚举不仅会包含所有的数值索引，还会包含所有的可枚举属性，最好只在对象上应用for...in循环。
    * propertyIsEnumerable()会检查给定的属性名是否直接存在于对象中（而不是原型链上）并且满足enumerable: true
    * Object.keys()会返回一个数组，包含所有可枚举的属性
    * Object.getOwnPropertyNames()会返回一个数组，包含所有属性，无论它们是否可枚举
    （目前）并没有内置的方法可以获取in操作符使用的属性列表（对象本省的属性以及[[Prototype]]链中的所有属性）
    
8. （值）遍历
    * 数组：for循环，辅助迭代器（如forEach()、every()、some()）
    * for...in：根据循环中的属性索引取值
    * for...of：要求本身有迭代器，数组内置了迭代器，你可以在自己的对象中定义迭代器，从而使用for...of语法
    ```javascript
    var myObject = {
     a: 2,
     b: 3,
    }
    Object.defineProperty(myObject, Symbol.iterator, {   
      configurable: true,
      writable: false,
      enumerable: false,  // 这个比较关键，使其不可枚举
      value: function() {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
          next: function() {
            return {
              value: o[ks[idx++]],
              done: (idx > ks.length)
            }
          }
        }
      }
    })
    ```
### 第四章 混合对象"类"

##### 类理论
面向对象编程强调的是数据和操作数据的行为本质上是互相关联的，类理论可以恰当的描述这种关系。类理论描述了一种代码的组织结构形式——一种在软件中对真实世界中问题领域的建模方法，类的一个核心概念是实例化、继承和多态（父类的通用行为可以被子类用更特殊的行为重写）。

类通过复制操作被实例化为对象形式。

##### 类的机制
* 实例化：由一个特殊的类方法构造，方法名通常和类名相同，被称为构造函数，大多需要new来调用构造新的实例
* 继承：子类会包含父类行为的原始副本，但是也可以重写所有继承的行为甚至定义新行为，类的继承其实就是复制
* 多态：任何方法都可以引用继承层次中高层的方法，在继承链的不同层次中一个方法名可以被多次定义，当调用方法时会自动选择合适的定义，多态并不表示子类和父类有关联，子类得到的只是父类的一份副本。
* 多重继承：大多数面向对象的语言不会有多重继承，因为使用多重继承的代价太高（从多个父类继承到多个同名方法时无从选择）

##### 混入
JavaScript中的类和其他语言的并不一样。简单来说，JavaScript中只有对象，并不存在可以被实例化的"类"，一个对象不会被复制到其他对象，它们会被关联起来。

1. 显式混入：其实就是简单的将一个对象的属性复制到另一个对象，当然不能完全复制，如对象引用。复制的目的是模仿类模式。(this显式绑定规则)
2. 隐身混入：借助this的隐式绑定规则，动态的为对象生成一样的属性
```javascript
// 显式混入
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];  // 并不会完全复制，有可能是对象引用
    }
  }
  return targetObj;
}
var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log("Turning on my engine,");
  },
  drive: function() {
    this.ignition();
    console.log("Steering and moving forward");
  }
}
var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);  // 借用Vehicle.drive方法
    console.log("Rolling on all " + this.wheels + " wheels");
  }
})

// 隐式混入
var Something = {
  cool: function() {
    this.greeting = "Hello World";
    this.count = this.count ? this.count + 1 : 1;
  }
}
Something.cool();
Something.greeting;  // Hello World
Something.count;  // 1
var Another = {
  cool: function() {
    Something.cool.call(this);
  }
}
Another.cool();
Another.greeting;  // Hello World
Another.count;  // 1
```