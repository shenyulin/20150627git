
/*一个简单的服务器*/
var http=require('http');
function waiter(req,res){

    //设置头信息
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    //获取客户端请求的信息
    var url=req.url;
   if(url=="/menu"){
       var str='<a href="http://nodeapi.ucdok.com/#/api/">nodejsAPI</a><br/><br/><a href="dagou100.com">大狗商城</a>';
       res.end(str);
   }else{
       res.end("在url后输入menu试试");
   }
}

var server=http.createServer(waiter);

server.listen(88);