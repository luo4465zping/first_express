const express=require("express")
const app=express()
const routers=require("./router/routers")
// 导入并配置cors生产token的中间件
const cors=require("cors")
app.use(cors())
//配置解析表单数据中间件
app.use(express.urlencoded({extended:false}))
app.use("/api",routers)
app.listen(80,()=>{
    console.log("服务器启动成功");
})