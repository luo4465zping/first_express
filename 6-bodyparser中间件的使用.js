const express=require("express")
const myrou=require("./express03")
const app=express()
// 解析body的post请求参数
app.use(express.urlencoded({extended:false}))
app.use('/api',myrou)
app.listen(80,function(){
    console.log("express is running");
})