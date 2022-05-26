const express=require("express")
const router=express.Router()
const myFun=require("./hander_router")
router.post("/register",myFun.myregister)
router.post("/login",myFun.mylogin)
module.exports= router