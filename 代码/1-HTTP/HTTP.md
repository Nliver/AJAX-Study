### HTTP协议请求报文与响应体

#### HTTP

HTTP（hypertext transport protocol）协议【**超文本传输协议**】，协议详细规定了浏览器和万维网服务器之间互相通信的规则

#### 请求报文

重点是格式与参数

```http
行	请求类型:GET/POST     路径URL  /s？ie=utf-8   协议版本HTTP/1.1
头  HOST: blog.sliber.cn
    Cookie: name=LMK
	Content-type: application/x-www-form-urlencoded
	Uer-Agent: chrom 83    
空行
体   username=admin&password=admin
```

#### 响应报文

```
行	协议版本：HTTP/1.1    响应状态码200   响应字符串OK
头	Content-Type: text/html;charset=utf-8
	 Content-length: 2048
	 Content-encoding: gzip

空行
体    <html>
		<head>
		</head>
		<body>
			<h1>ajax学习</h1>
		</body>
	  </html>
```
*404
*403
*401
*500
*200
