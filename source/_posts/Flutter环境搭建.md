---
title: Flutter环境搭建
date: 2019-12-28 23:36:43
tags:
  - 移动端APP
  - Flutter
---

### 一、基础资源设置 + 下载

```shell
// 设置国内镜像
vi ~/.zshrc
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
source .zshrc

// 下载flutter sdk
cd ~/Desktop/github
git clone https://github.com/flutter/flutter.git

// 设置flutter环境变量
vi ~/.zshrc
export PATH="$PATH:~/desktop/github/flutter/bin"
source .zshrc
```

### 二、基础环境

1. 安装Xcode、IOS模拟器、Android Studio
2. 执行flutter doctor命令，这里还是要挂VPN（要不就卡在build flutter tool...）
3. 根据第**2**执行的结果有啥毛病按提示解决掉

### 三、编辑器设置（VSCode）

1. 安装flutter扩展程序
2. 设置flutter扩展程序的flutter sdk path
3. cmd + shift + p: flutter: 创建新项目
4. 启动IOS模拟器
5. 按下F5

![完美](/images/2019-12-29_00-04-01.png)



