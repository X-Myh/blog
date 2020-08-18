---
title: Picker弹窗位于表单之下问题查找记录
date: 2020-08-17 21:58:09
tags:
  - 工作日常
---

### 背景

今天遇到一个问题，picker列表第一次弹出的时候出现在表单之下。在分析获得原因后，计算了一下花费的时间，从早上11:00开始正式投入，到下午4:00多，大概花费了4个小时多，基本就多半天的时间没了，因为分析后感觉原因很简单，但过程花费了这么多时间，于是分析了下自己在这个过程中到底将时间花在哪里了及原因。

### Step 1: 现象分析【30min-】
稍加分析便知道是因为z-index值初次设置不对，但z-index值是从何时哪里设置的，查找起来比较麻烦(项目比较庞大且是老项目和React糅合，业务也很复杂，看起来真的很费劲)。

### Step 2: 顺藤摸瓜【1h30min+】
从React项目的form的picker点击事件经中间衔接层到到老项目的$.dialog，其中对jQuery-ui不了解，熟悉了一下widget的生命周期，这个也花了不少时间，这其中更是由于业务关系，层层嵌套、继承，真的是****

### Step 3: 弹窗起源[30min-]
要想知道z-index的值是如何被赋予的，就必须知道整个弹窗是如何被创建然后挂载到DOM上的，其实找到dialog就好办多了，直接去看jquery-ui的源码就可以，[dialog源码#_moveToTop](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/dialog.js)

### Step 4: 解决问题？
现在已经基本知道问题了，锁定在可视元素.ui-front类即可，第一次为什么没有设置z-index值，肯定是因为找不到可视的.ui-front类。可还有一个问题，线上环境第一次弹出却是正确的

### Step 5: 线上为什么第一次弹出时就有了可视的.ui-front类？？？【1h30min+】
说起这个可真是\*\*，[dialog源码#_createOverlay](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/dialog.js)，如果options.modal是true的话，就动态的造一个，\*\*\*\*，_createOverlay到现在还没理解用来干嘛的，也没issue，\*\*

### 总结
Step1-Step3可以说是正常消费，Step5完全是出乎意料，就不完全不懂作者的意图。总的来说，这其中消费了大量的时间，其实都是源于对jquery-ui的不熟，不然Step2、Step5基本可以省下来。算下来，除了Step5的时间花的不值得，其他时间消费还在情理之中。

### 经验教训
凡是消费**30min**以上的问题查找，一定要重新提问(确定自己需要解决什么问题，现在正在解决什么问题)，确保查找方向不会走偏，要不真的就是在浪费时间。
