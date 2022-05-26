// 使用步骤：
/*
1.导入模块
2.创建服务器实例
3.服务器监听客户请求
4.开启服务器
*/
const http=require('http')
const server =http.createServer()
server.on("request",function (req,res) {
    res.setHeader("Content-Type","text/html;charset=utf8")
    const urls=req.url
    const paths=req.method
    res.end("请求路径为"+urls)
})
server.listen(8081,()=>{
    console.log("服务器已经开启");
})