const res = require("express/lib/response")

// 1.安装cors中间件来解决跨域问题，一定要在路由之前配置中间件
/*2.cors只支持post，get，head请求，若想要其它请求的话，需要设置响应头，
res.setHeader("ACC-":"*")
*/