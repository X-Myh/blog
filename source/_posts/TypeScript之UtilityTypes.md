---
title: TypeScript之UtilityTypes
date: 2020-04-28 15:04:50
tags:
  - TypeScript
---

> 原文：https://www.typescriptlang.org/docs/handbook/utility-types.html

### Partial&lt;T&gt;
  构造一个和T一样的类型，并使得其所有属性为可选的

### Readonly&lt;T&gt;
  构造一个和T一样的类型，并使得其所有属性为只读

### Record&lt;K,T&gt;
  构造一个拥有属性K，值(Type)为T的的类型

### Pick&lt;T,K&gt;
  构造一个从T中取出一个集合K的类型

### Omit&lt;T,K&gt;
  构造一个和T一样的类型，然后删除K，和Pick刚好相反

### Exclude&lt;T,U&gt; 
  构造一个和T一样的类型，但不包含U（注意和Omit的区别）

### Extract;T,U&gt;
### NonNullable&lt;T&gt;
### Parameters&lt;T&gt;
### ConstructorParameters&lt;T&gt;
### ReturnType&lt;T&gt;
### InstanceType&lt;T&gt;
### Required&lt;T&gt;
### ThisParameterType
### OmitThisParameter
### ThisType&lt;T&gt;