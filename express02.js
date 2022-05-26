// express中静态资源的使用
const express=require("express")
const app=express()
app.listen(80,()=>{
    console.log("服务器");
})
// express中静态资源的使用,public不会出现在访问目录中，将public文件夹中的内容进行共享，直接访问http://localhost/test.html
app.use(express.static("public"))