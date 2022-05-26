// 
/*
1.自己创建的模块需要加路径，否则会去node对应的库中查找
2.模块具有作用域，当模块中有变量时外界不能访问
3.moudle对象在每个js文件中，可以通过moudule的exports属性进行变量的抛出共享
4.通过require方法得到的是moudule.exports对象
5.exports对象与moudle.exports对象相同，但最终的导入结果以moudle.exports为准
6.快速创建package.json包管理使用npm init -y；在项目开始前执行
*/
const my=require("./my.js")
console.log(my);