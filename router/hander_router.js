exports.myregister=function (req,res) {
    const userinfo=req.body
    if(!userinfo.username ||!userinfo.password){
        return res.send({status:1,msg:"请检查用户名或密码是否合法"})
    }
    console.log("正在注册请求");
    res.send(userinfo)
}
exports.mylogin=function (req,res) {
    console.log("正在登录请求");
    res.send("login ok")
}
// exports一般跟.属性进行，module.expors={}一般跟对象
// module.exports={mylogin,myregister}
// exports={mylogin,myregister}