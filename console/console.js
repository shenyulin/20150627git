var name="small";
console.log(name);


/*全局对象 global -> window */
//console.log(global);


//console的用法
/*log  标准的输入和输出流*/

console.log("字符串：%s","shen");  //字符串
console.log("JSON：%j",{name:"shen"});  //json
console.log("数字：%d",99);   //数字


/*warn */
console.warn("warn");
console.error("error");


//当前代码的堆栈 trace(用于调试)
//console.trace();


//assert断言（用于测试）
//console.assert();

console.assert(1==2);




//好记性：
// 按住ctrl可以查看它的“源代码”