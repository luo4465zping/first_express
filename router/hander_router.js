exports.myregister=function (req,res) {
    console.log("正在注册请求");
    res.send("register ok")
}
exports.mylogin=function (req,res) {
    console.log("正在登录请求");
    res.send("login ok")
}
// exports一般跟.属性进行，module.expors={}一般跟对象
// module.exports={mylogin,myregister}
// exports={mylogin,myregister}