---
title: 论如何优化一个Webpack项目
date: 2019-12-08 21:53:32
tags:
  - Webpack
  - 系统优化
  - React
---

### 背景

最近在写脚手架的模板(generator-ywc:react)，想把antd引进来，方便布局之类的。但是，发现打包后的main.bundle特别大，足足1M多。

### 分析
于是使用webpack-bundle-analyzer分析了下，主要原因有：
1. antd
2. mockjs
3. moment
4. react

### 逐个解决
首先Antd组件是使用babel-plugin-import方式按需加载的，其中主要是icon全量引入(>500kb)。官网给出的方案是：使用resolve.alias（https://github.com/ant-design/ant-design/issues/12011#issuecomment-420038579 ）。

然后mockjs、moment引入都可以单独在entry设置，之后再利用splitChunks即可将这两个类库分离出来单独加载，而且大多时候都可以将其设置为异步加载。

接着react、react-dom也可以单独的entry形式设置，但要考虑到脚本的执行顺序，一定要将其放在前面，并同步加载。

最后webpack的配置文件entry看起来就像这样：
```javascript
entry: {
    lib: ["@babel/polyfill", "react", "react-dom"],
    moment: "moment",
    mockjs: "mockjs",
    app: path.join(process.cwd(), "src/index.jsx")
}
```

### 结果
<img src="/images/2019-12-08_23-13-37.png" />

### 延伸（如何使用Webpack优化一个项目）
<img src="/images/2019-12-08_23-11-08.png" />

### 在线演示
http://106.13.230.115
