// 1. 引入express
const { response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send("HELLO AJAX - 2");

});

// app.post('/server',(request, response)=>{
//all可以接收任意类型的请求，（包括自定义）
app.all('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send("HELLO AJAX POST");

});

app.all('/json-server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'sliber'

    };
    //对对象进行字符串转化
    let str = JSON.stringify(data);
    //设置响应体
    // response.send("HELLO AJAX JSON");
    response.send(str);

});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动， 8000端口监听中....");
})