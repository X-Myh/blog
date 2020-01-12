---
title: 关于VSCode
date: 2019-12-27 22:22:29
tags:
  - VSCode
  - 编辑器
---

### 前言

本人Webstorm党，特别依赖它集成的git工具，觉得特别好用。以前也因为团队用的是SourceTree + VSCode，有一段时间去尝试适应，但SourceTree真的太丑了，VSCode主题真的太丑了（到现在我都还没有找到一款很合我口味的亮色主题），就像Sublime Text一样。但WebStorm很吃内存，项目第一次加载时特别慢，不过这都不是问题，关键是要收费（怪不得做的这么好）。所以也一直想往VSCode方向转，这次换工作后也是一个契机吧，刚好git也要用原始的命令号来搞了（非要把逼格搞上去不可），VSCode做merge的时候两个窗口的比较也没以前那么差劲了。所以VSCode就好好学下吧。

### 常用配置

1. 主题：FlatUI Immersed
2. tab缩进设置：2|4
3. 快捷键设置
   * ctrl + u：转换为小写
   * ctrl + shift + u：转换为大写
4. 设置PanelDefault Location位置为right
5. cmd + shift + p => shell（在path中安装code命令），可以在终端使用code命令打开编辑器
6. List: Open Mode设置双击点开文件夹

### 常用插件

1. Auto Close Tag
2. Todo Tree
3. FlatUI
4. Reactjs code snippets
5. vscode-icons
6. settings sync（牛逼，写好一份配置）



### 自定义代码片段(cmd + shift + p => snippets)

1. cl

   ```javascript
   console.log($0);
   ```

   

2. cld

   ```javascript
   console.log(`-----  start  -----`);
   console.log($0);
   console.log(`-----  end  -----`);
   ```

3. author

   ```javascript
   /**
   * author: iWuzhi
   * date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND
   */
   ```

### 常用快捷键

| 快捷键               | 功能                  |
| -------------------- | --------------------- |
| option + shfit + ↑/↓ | 向上/下复制一行       |
| option + ↑/↓         | 向上/下移动           |
| cmd + shift + p      | 全局命令面板          |
| cmd + shift + n      | 新窗口                |
| cmd + shift + w      | 关闭编辑器            |
| cmd + w              | 关闭当前tab           |
| cmd + shift + k      | 删除当前行            |
| cmd + enter          | 下一行插入            |
| cmd + shift + enter  | 上一行插入            |
| cmd + shift + \|     | 花括号闭合处跳转      |
| cmd + []             | 调整缩进              |
| cmd + shift + []     | 窗口tab切换           |
| options + shift + a  | 区块注释              |
| ctrl + g             | 行跳转                |
| cmd + k, cmd + s     | 快捷键绑定/查询       |
| ctrl + `             | 打开终端              |
| cmd + shift + t      | 撤销最近关闭的一个tab |



### 总结

能想到一些就写一些吧，^_^