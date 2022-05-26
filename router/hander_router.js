const db=require("../db/index")
exports.myregister=function (req,res) {
    const userinfo=req.body
    // 查询输入是否合法
    if(!userinfo.username ||!userinfo.password){
        return res.send({status:1,msg:"请检查用户名或密码是否合法"})
    }
// 查询用户是否已经注册
    const sqlstr="select * from ev_user where username=?"
    db.query(sqlstr,[userinfo.username],(err,result)=>{
        // 执行sql失败
        if(err){
            return res.send({status:1,msg:err.msg})
        }
        // 判断用户是否占用
        if(result.length>0){
            return res.send({status:1,msg:"请更换用户名或密码是否合法"})
        }

    })
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