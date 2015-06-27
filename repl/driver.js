
/*事件驱动*/


var http=require('http');

//读文件
var fs=require("fs");
fs.readFile("../http.md",function(err,data){
    console.log(data.toString());
});

//计算js的运行时间
console.time("sumTime");
for(var i=0;i<100000000;i++){}
console.timeEnd("sumTime");


var server=http.createServer(function(req,res){
    //在浏览器中输入localhost：8080 查看结果
    res.write("hello world");
    res.end();
});
server.listen(8080);