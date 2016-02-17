var http = require('http');

http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    // 在控制台里打印请求的方法 get 或者 post
    console.log(request.headers);
    // 打印出请求的头信息
    console.log(request.url);
    // 打印出请求的url

    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
    // 返回hello world给用户
}).listen(8888);
