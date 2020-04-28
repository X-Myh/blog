---
title: Git常用命令记录
date: 2020-01-18 19:57:05
tags:
  - Git
---



### 基础配置

1. git config -- global user.name/email
2. git config --global alias.visual '!gitk'（别名配置，方便快速使用一些繁琐或不方便记忆的命令）

### 帮助

1. git help \<verb\>

### 初始化

1. git init
2. git clone

### 基础 操作

1. git status（当前状态，未跟踪、未改变、已改变、已暂存）

2. git add

3. git commit

   * git commit -m \'message\'

   * git commit -a -m \'message\'

4. git rm

   * git rm --cache（不删除已存在文件，新增.gitignore时很有用）

5. git log

   * git log -p
   * git log --oneline
   * git log --stat

### 撤销操作

1. git commit --amend（忘记提交一些东西或者提交message错误时很有用）
2. git reset（常见的git reset HEAD，取消暂存）
3. git checkout --（文件恢复）

### 忽略文件(.gitignore)

1. 文件格式
2. glob（文件）匹配模式
3. 匹配注意事项：如开头/防止递归

### 远程仓库

1. SSH key: ssh-keygen

1. git remote
   * git remote -v（所有本地到远程仓库的映射）
   * git remote add（一个已存在的本地项目初始化时经常用到）
   * git remote rename（远程地址变更时）
   * git remote rm（远程地址变更时）
2. git fetch
3. git push
4. git pull（fetch + merge）

### 分支

1. git branch
   * git branch -d 本地分支（删除本地分支）
   * git push origin :远程分支（删除远程分支）
   * git branch -v/-a
   * git fetch origin :远程分支（会在本地新建一个分支）
2. git checkout
   * git checkout 分支
   * git checkout -b 分支
3. git merge/rebase（分支合并）
4. git cherry-pick（随意pick一些离散的commit）

### 标签

1. git tag
   * git tag -a version -m 'message'（当前HEAD）
   * git tag -a version 某个提交（某个commit）
   * git push --tags
   * git tag -d 标签（删除本地）
   * git push origin :refs/tags/标签（远程）
   * git checkout -b 分支名 标签（从标签检出分支）

### HEAD

1. HEAD分离
2. ^相对HEAD移动，后面加数字表示第几个父节点（merge会有多余一个节点可能）
3. ~相对HEAD移动，后面加数字表示移动位置

### Git Hooks

1. git规范

### 学习资源

1. Git官网：https://git-scm.com/book/zh/v2
2. 一个可视化闯关式练习：https://learngitbranching.js.org/



