// 模块化路由，使用express.Router()方法进行创建路由对象
const express=require("express")
const router=express.Router()
router.get('/user',function(req,res){
    const query=req.query
    res.send({
        status:200,
        data:{"name":"zs","age":34},
        msg:"请求成功"
    })
    console.log("访问到user");
})
module.exports=router