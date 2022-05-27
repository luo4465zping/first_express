const express=require("express")
const app=express()
const routers=require("./router/routers")
// 导入并配置cors生产token的中间件
const cors=require("cors")
app.use(cors())
//配置解析表单数据中间件
app.use(express.urlencoded({extended:false}))
// 使用中间件优化代码，
app.use(function (req,res,next) {
    res.cc=function (err,status=1) {
        res.send({
            status,
            msg:err instanceof Error ? err.message:err,
        })
    }
  next()  
})
app.use("/api",routers)
app.listen(80,()=>{
    console.log("服务器启动成功");
})