# AJAX的学习笔记(Node.js环境)
AJAX学习的笔记，主要环境为Node.js
# 尚硅谷Web前端Ajax教程初学者零基础入门到精通全套完整版（ajax最新版）

课程地址：   https://www.bilibili.com/video/BV1WC4y1b78y

## 第一章： 原生Ajax

### 1.1 Ajax简介

- Ajax全称为Asynchronous Javascript And XML，即异步JS和XML
- 通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**
- AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

### 1.2 XML简介

- XML：可扩展标记语言
- XML：被设计用来传输和存储数据
- XML和HTML类似，不同点：HTML中都是预定义标签，XML中没有预定义标签，全是自定义标签，用来表示一些数据
- 现在已被JSON取代

### 1.3 AJAX 的特点

#### 1.3.1 AJAX的优点

1. 可以无刷新页面与服务端进行通信
2. 允许你根据用户事件来更新部分页面内容

#### 1.3.2 AJAX 的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好（爬虫获取不到信息）

### 1.4 AJAX 的使用

#### 1.4.1 核心对象

## 第二章 jQuery中的AJAX

### 2.1 get请求

```
$.get(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callbac: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```



## 第三章： 跨域

### 3.1 同源策略

同源策略（Same-Origin Policy）最早由 Netscape 公司提出，是浏览器的一种安全策略。

 同源：协议、域名、端口号 必须完全相同

违背同源策略就是跨域

### 3.2 如何解决跨域

#### 3.2.1 JSONP

1. JSONP是什么

   JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求

2. JSONP 怎么工作的？

   在网页有一些标签天生具有跨域能力，比如：img, link, iframe, script

   JSONP就是利用**script**标签的跨域能力来发送请求的

3. JSONP的使用

   1. 动态的创建一个script标签

      ```js
      var script = document.createElement("script");
      ```

   2. 设置script的src，设置回调函数

      ~~~js
      script.src = "http://locallhost:3000/textAJAX?callback=abc"
      ~~~

      