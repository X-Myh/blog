---
title: antd#Form bug
date: 2020-03-07 13:06:09
tags:
  - Antd
  - React
  - Bug
---

### 现象

Antd#Form.getFieldDecorator使用nodeName作为表单字段时，会报错：

```
Uncaught TypeError: element.nodeName.toLowerCase is not a function
```

### 如何重现

https://github.com/iWuzhi/antd-form-bug


### 已知issue

1. https://github.com/ant-design/ant-design/issues?q=nodeName

2. https://github.com/facebook/react/issues/6284

### 原因

 https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement


    对于HTMLFormElement可以通过id或name获取Form下的一个表单项(Input, Select等)，
    当id或name为nodeName时，会覆盖HTMLFormElement原有的nodeName属性
    即：'FORM' => Element
    将一个字符串类型改为一个Element节点
    所以调用toLowerCase报错
