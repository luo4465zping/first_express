// 局部中间件的使用
const fn=(req,res,next)=>{
    console.log("中间件正在运行");
    next()
}
const server=require("express")
const app=server()
app.get("/",fn,(req,res)=>{res.send("hello");
console.log("qingq");})
app.get("/user",(req,res)=>{res.send("world")})
app.listen(80,()=>{console.log("服务器正在运行");})