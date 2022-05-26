const fs=require("fs")
fs.readFile("./移动端.html","utf8",function (err,succ) {
    if (err) {
        console.log("读取文件失败");
    }
    console.log(succ);
       
})