var mysql = require('mysql')
// 创建数据库连接对象
const db=mysql.createPool({
    host: '10.1.222.244', // 服务器地址
    user: 'zcajbi', // mysql用户名称
    password: 'zcaj@2021', // mysql用户密码
    port: '3306', // 端口
    database: '各类报表', // 数据库名称
})
module.exports=db