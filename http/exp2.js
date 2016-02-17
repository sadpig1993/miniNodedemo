var http = require('http');

var requestHandlers = {
    start : function () {
        return "<html><head></head><body><h1>大王让我教她node</h1></body></html>"
    },
    home : function () {
        return "<html><head></head><body><h1>所以我们开始吧</h1></body></html>"
    },
}

http.createServer(function (request, response) {
    var body = [];
    var handle={};

    handle["/"]=requestHandlers.start;
    handle["/start"]=requestHandlers.home;

    console.log(request.method);
    // 在控制台里打印请求的方法 get 或者 post
    console.log(request.headers);
    // 打印出请求的头信息
    console.log(request.url);
    // 打印出请求的url

    var html = handle[request.url]();


    response.writeHead(200, { 'Content-Type': 'text-plain' });

    response.end(html + ' \n');
    // 返回html给用户
}).listen(8888);
