// 1. 引入express
const { response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send("HELLO AJAX - 1");

});

// app.post('/server',(request, response)=>{
//all可以接收任意类型的请求，（包括自定义）
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send("HELLO AJAX POST");

});

app.all('/json-server', (request, response) => {
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


//针对 IE 缓存
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send("HELLO IE - 5");

});

//针对 请求超时：作延时响应：2s
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send("延时响应");
    }, 3000)


});

//针对 jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'Nliverd的AJAX学习笔记'};

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});


//针对 axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'Nliverd的AJAX学习笔记'};

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});


//针对 fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'Nliverd的AJAX学习笔记'};
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
});

//针对 jsonp 服务
app.all('/jsonp-server', (request, response) =>{
    // response.send('HELLO JSONP-server');
    // script标签最好还是返回js代码，要的是一段函数的调用
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'Nliver的学习笔记-1'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`handle(${str})`);

});

//用户名检测是否存在
app.all('/check-username', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`handle(${str})`);

});

//jQuery服务中的jsonp
app.all('/jquery-jsonp-server', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'Nliver',
        city: ['北京', '上海', '深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);

});

app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

    response.send('hello CORS');
})
//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动， 8000端口监听中....");
})