const express = require("express");
const myrou=require("./express03")
const app=express()
// 挂载路由,并添加路由模块
app.use('/api',myrou)

app.listen(80,()=>{
    console.log("服务器正在运行");
})