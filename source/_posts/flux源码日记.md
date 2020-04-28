---
title: flux源码日记
date: 2019-11-12 16:10:09
tags:
  - JavaScript
  - 前端
  - flux
  - redux
  - react
---

官网：https://facebook.github.io/flux/， 官方示例代码用flow搞得，看得还是有点烦，但主体结构还算是认识，下图虚线框内上半部分就是flux的核心思想了，单向数据流，固定的更改状态方式，虚线框下半部分就是flux如何做到store和react的state同步，其实就是事件通知，最后还是依赖react的状态与页面同步。

<img src="/images/2019-11-12_16-15-27.png">