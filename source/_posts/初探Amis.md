---
title: 初探Amis
date: 2021-01-23 09:31:45
tags: 
  - Amis
---

### 缘起
最近公司内部做了一些比较大的调整，框架层也从自研转到了Amis。

### 初识
Amis是百度出品的一款低代码框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。
* What ?
* Why ?
* How ?
这几个问题可去官网看下介绍：https://baidu.gitee.io/amis/zh-CN/docs/index

### 核心概念
1. 配置与组件
  * Amis通过JSON配置构建组件树(和多数低代码框架一致，不过Amis的Schema更简单些)
  * 重要的是json type到React component的映射及数据传递
  ```
  {
    "type": "xxx",
    ...其它属性
  }
  ```
2. 数据域与数据链
  * 数据域就是json节点上有个特殊的**data**属性，在配置其他属性是可以直接从data里取得数据
  * 可与后台协商直接通过接口板返回data数据做出更加灵活的配置
  * 数据链的设计应该是模仿JavaScript的原型链设计，就是data的取值可以延伸到父级，直到根节点
  ```
  {
  "type": "page",
  "data": {
    "name": "zhangsan",
    "age": 20
  },
  "body": [
    {
      "type": "tpl",
      "tpl": "my name is ${name}"
    },
    {
      "type": "service",
      "data": {
        "name": "lisi"
      },
      "body": {
        "type": "tpl",
        "tpl": "my name is ${name}, I'm ${age} years old"
      }
    }
  ]
}
  ```
3. 模板
  * 模板中可以嵌入数据域的数据、HTML、及一些js表达式
  * **模板 + 数据域 + 数据链** 可以产出非常灵活的Schema，这也是json配置满足大部分需求的基础
4. 数据映射
  * 数据映射其实基本用到的就是模板取值能力，Amis额外添加了链式取值、过滤器等一些方便的操作
  * 除此之外，对于一些复杂的数据结构，Amis提供了**&**用来展开对象、**$**用来提取数组
5. 表达式
  * 这个表达式仅限于结果为Boolean类型，主要用于一些开关的控制
  * 如是否请求接口、是否展示，一般属性命名为xxxOn
  ```
  {
  "type": "tpl",
  "tpl": "当前作用域中变量 show 是 1 的时候才可以看得到我哦~",
  "visibleOn": "this.show === 1"
}

  ```
6. 联动
  * 联动指的是组件之间的行为交互及数据交换
  * 对于行为控制一般是使用表达式
  * 对于form的数据交互，一般使用target触发
7. 行为
  * Amis内置了一个Action控件，可以接受各种事件
  * 包括ajax、表单提交、弹出Dialog...
  ```
  {
  "type": "page",
  "body": {
    "type": "action",
    "label": "发出一个请求",
    "actionType": "ajax",
    "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm"
  }
}
  ```
8. 样式
  * Amis中的样式主要还是通过className去自定义
  * 也提供了一些方便的class集合供我们快速使用(旧)
  * 后面辅助class精简了tailwindcss并提供了一些Css变量

### 核心类型
1. SchemaNode
  * 每一个SchemaNode对应到React其实就是一个真实的Component
  * 由大量SchemaNode构成的json结构其实就是一个React组件树
2. API
  * Amis为了更加灵活的json配置，提供API直接可以将后台的数据融合到SchemaNode的数据域(data)中
3. Definitions
  * 类似一些框架中的Mix，定义一些公用的SchemaNode
  * 其他地方可直接引用

### 组件
https://baidu.gitee.io/amis/zh-CN/docs/components/component

### 工作原理
amis 的渲染过程是将 json 转成对应的 React 组件。先通过 json 的 type 找到对应的 Component 然后，然后把其他属性作为 props 传递过去完成渲染，具体：
首先是向Amis注册React组件(@Renderer || @FormItem)，注册好组件池之后，Amis便能从json的type信息及相关path定义找到对应的组件并渲染。

1. 组件注册
``` jsx
@Renderer({
  test: /(^|\/)form$/
  // ... 其他信息隐藏了
})
export class FormRenderer extends React.Component {
  // ... 其他信息隐藏了
  render() {
    const {
      title,
      controls,
      render // 用来渲染孩子节点，如果当前是叶子节点则可以忽略。
    } = this.props;
    return (
      <form className="form">
        {controls.map((control, index) => (
          <div className="form-item" key={index}>
            {render(`${index}/control`, control)}
          </div>
        ))}
      </form>
    );
  }
}
```
2. 编写Schema
``` json
{
  "type": "page",
  "title": "页面标题",
  "subTitle": "副标题",
  "body": {
    "type": "form",
    "title": "用户登录",
    "controls": [
      {
        "type": "text",
        "name": "username",
        "label": "用户名"
      }
    ]
  }
}
```
3. 真实渲染
``` jsx
<Page title="页面标题" subTitle="副标题">
  <Form
    title="用户登录"
    controls={[
      {
        type: 'text',
        name: 'username',
        label: '用户名'
      }
    ]}
  />
</Page>
```

### 扩展
1. 自定义组件
Amis提供了两种方式来使用，SDK + React，SDK的方式就忽略了，SDK方式主要是暴露给用户做一些简单的扩展。自己用的时候基本表都是集成React来用。为了满足更加复杂的需求，Amis除了内置的一些组件外，还支持我们自定义组件，然后注册到Amis组件池中供我们在json中配置使用。
``` jsx
import * as React from 'react';
import {FormItem} from 'amis';
import * as cx from 'classnames';

@FormItem({
  type: 'custom-checkbox'
})
export default class CustomCheckbox extends React.Component {
  validate() {
    // 通过 this.props.value 可以知道当前值。

    return isValid ? '' : '不合法，说明不合法原因。';
  }
  // ... 其他省略了
}
```
2. 扩展Amis内置组件

### 端上定制
1. 通过特定结点属性(mobile)
2. 通过class特定前缀(m:)

### 多语言
1. 内置中文 + 英文
2. 扩展，参照英文扩展

### 总结
1. 简单：Schema配置足够简单。
2. 灵活：数据域、数据链、模板提供灵活的配置
3. 扩展能力强：自定义组件，能满足各种需求【但也和low code背道而驰】

在实际的开发过程中，也的确遇到了很多问题：
1. 社区用户少
2. 文档不完善
3. 框架本身还不够成熟（开源、面向客户的产品）
4. 以及面对复杂的业务场景，内置的一些组件组合无法满足需求，需要做大量的Hack或适配开发

好在Amis的设计不是特别复杂，源码阅读基本无障碍，所以也很快能基于源码的设计给出一些解决方案，不至于一些业务能力无法实现。