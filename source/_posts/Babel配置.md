---
title: Babel配置
date: 2019-12-14 06:24:46
tags:
  - 前端
  - Babel
  - JavaScript
---

### 一、背景
我们知道，Babel是基于插件的，但要使用哪些插件，这个是取决于我们自己的需求的，我们可以通过配置文件的形式明确指定Babel使用哪些插件进行转换工作。

### 二、如何使用
官网提供了多种不同的配置方式：

1. babel.config.js
    * 动态创建配置
2. .babelrc
    * 静态配置
3. package.json#babel
    * 同.babelrc
4. .babelrc.js（**推荐：基本可以满足大多数场景**）
    * 基本和.babelrc相同，但可以使用JavaScript
    * 可以使用任何Node.js API去做一些额外的事情，如使用执行环境变量做动态的配置
5. 使用命令号工具
    * @babel/cli
6. 使用babel API
    * @babel/core


### 三、核心配置

1. presets
 presets是Babel的一系列预设插件组合，常用的有@babel/preset-env、@babel/preset-react，这些present都发布到了npm上，你也可以创建自己的preset来个性化定制plugin组合。
 
2. plugins
  babel是一个编译器（源代码 => 目标代码），它运行时执行三个步骤：解析（源代码）、（按规则）转化、生成（新代码）。每一个步骤都是由plugin来完成的，所以说babel是基于plugin的（和webpack的思想有点像）。
  这是官网列举的[plugins](https://babeljs.io/docs/en/plugins)列表。