---
title: yume-ywc项目新增React脚手架
date: 2019-12-03 15:44:31
tags:
  - React
  - yume-ywc
  - yeoman
  - 脚手架
  - 工具
---

### 前言（废话）

很久前就想写这个脚手架了，一直没有时间。最近比较空了，先把之前写一半的react脚手架第一个版本(0.1.0)搞完并发布。

### 背景

和众多创建脚手架的目的一致：

1. 快速创建一个初始化项目
2. 继承众多依赖，或者更高层次的封装，让使用者觉得更加易用和简单
3. 市面上的众多脚手架大多有一些毛病：
    * 可配置性差(create-react-app)
    * 版本更新较慢(dva)，无法使用较新版本的类库
    
    
### 如何解决
将依赖配置不直接写入package.json，而是通过yeoman工具在使用者执行脚手架命令时动态写入package.json。整个模板的是从这两年的项目经验总结探索出来的，集成了redux、react-router、redux-saga、css module等功能。

### 框架基础结构
<img src="/images/ywc-react-structure.png">


### 如何使用

1. 安装
```javascript
npm install -g yo
npm install -g generator-ywc
```

2. 创建项目
```javascript
mkdir yourAPPDir
cd yourAPPDir
yo ywc:react  //ywc: Yume-web-cli:react
```
3. 启动
```javascript
yarn start
```

看到控制台编译成功后，在浏览器打开http://localhost:3000 即可看到下面页面：
<img src="/images/2019-12-03_16-07-49.png" />



### 有用链接

Github: https://github.com/iWuzhi/yume-ywc/tree/master/generators/react
Issues: https://github.com/iWuzhi/yume-ywc/issues



