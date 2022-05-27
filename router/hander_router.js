const db=require("../db/index")
const bcrypt=require("bcrypt")
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
            // return res.send({status:1,msg:err.msg})
            return res.cc(err)
        }
        // 判断用户是否占用
        if(result.length>0){
            // return res.send({status:1,msg:"请更换用户名或密码是否合法"})
            return res.cc("请更换用户名或密码是否合法")
        }
        userinfo.password=bcrypt.hashSync(userinfo.password,10)
        // 进行插值操作
        const sql="insert into ev_user set ?"
        db.query(sql,{username:userinfo.username,password:userinfo.password},(errs,results)=>{
            if(err){
                // return res.send({status:1,msg:err.msg})
                return res.cc(err)
            }
            if(results.affectedRows !=1){
                // return res.send({status:1,msg:"创建用户失败，请稍后再试"})
                return res.cc("创建用户失败，请稍后再试")
            }
            //  res.send({status:0,msg:"创建用户成功"})
            return res.cc("创建用户成功",0)
        })

    })
    
}
exports.mylogin=function (req,res) {
    console.log("正在登录请求");
    res.send("login ok")
}
// exports一般跟.属性进行，module.expors={}一般跟对象
// module.exports={mylogin,myregister}
// exports={mylogin,myregister}