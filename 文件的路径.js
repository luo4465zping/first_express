// __dirname:表示当前文件的路径

const path = require("path");

// console.log(__filename);
const myPath=path.join(__dirname,"文件的路径.js")
path.basename(myPath)//获取其最后一部分
console.log(myPath);