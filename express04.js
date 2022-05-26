// 中间件的使用
// 1.中间件也是一个函数，但多了next参数，每次使用一个中间件必须需要next()传送给下一个
// 2.中间件中定义的变量可以供下游使用，共想同一份req，res
const express = require("express");
const myrou=require("./express03")
const app=express()
// 中间件的使用
const middle=function(req,res,next){
    console.log("中间件开始了");
    
}
app.use(middle)
// 挂载路由,并添加路由模块
app.use('/api',myrou)
// 挂载中间件


app.listen(80,()=>{
    console.log("服务器正在运行");
})