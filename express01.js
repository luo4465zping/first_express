// express服务器的使用步骤
/*
1.导入express模块
2.创建express实例
3.开启express
4.监听客户端的请求方法
*/
const express=require("express")
const app=express()
app.get("/home",(req,res)=>{
    res.send(req.url)
})
// 动态参数的获取,id这个字段名不是固定的，可以随便，但最后的结果是以该属性为键
app.get("/user/:id",(req,res)=>{
    res.send(req.params)
    console.log(req.params);
})
app.listen(80,function(){
    console.log("express is running");
})
