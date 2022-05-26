const express=require("express")
const expS=require("express-session")
const app=express()
app.use(expS({
    secret:"666",
    resave:false,
    saveUninitialized:true
}))
app.post('/api/login',function (req,res) {
    if(req.body.username !='admin'){
        return res.send({staus:1,msg:"登录失败"})
    }
    // 将信息保存若用户正确
    req.session.user=req.body
    res.send({staus:0,msg:"登录成功"})
})