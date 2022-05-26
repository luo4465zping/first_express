// 文件的读取
const fs=require("fs")
fs.readFile("./移动端.html","utf8",function (err,succ) {
    console.log(err);
    console.log(succ);    
})
// 文件的写入
fs.writeFile("./移动端.html","这是写入的内容，测试node",function (params) {
    console.log(params);
})