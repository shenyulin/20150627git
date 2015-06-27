
/**/


var http=require('http');
function waiter(req,res){

    //设置头信息
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    //获取客户端请求的信息
    var url=req.url;
   if(url=="/menu"){

       res.end('<a href="dagou100.com">大狗商城</a>')
   }else{
       res.end(url);
   }


}

var server=http.createServer(waiter);

server.listen(88);