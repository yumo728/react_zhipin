const express = require('express');
const router = express.Router();

//引入models暴露的model对象
const UserModel = require('../db/models').UserModel
//引入md5加密
const md5 = require('blueimp-md5')
const filter = {password: 0,_v:0} // 查询时过滤出指定的属性

//使用一个路由：用户注册
/*
    a)	path为: /register
    b)	请求方式为: POST
    c)	接收username和password参数
    d)	admin是已注册用户
    e)	注册成功返回: {code: 0, data: {_id: 'abc', username: ‘xxx’, password:’123’}
    f)	注册失败返回: {code: 1, msg: '此用户已存在'}
*/
/*
    1.获取请求参数
    2.处理
    3.返回响应数据
*/
//注册路由
router.post('/register',(req,res)=>{
    // 1.获取请求参数
    const {username,password,type} = req.body
    // 2.处理:判断用户是否已经存在，如果存在，提示错误信息，如果不存在，保存
    //查询（根据username）
    UserModel.findOne({username},(err,user)=>{
        //如果user有值（已存在）
        if(user){
            //返回错误信息
            res.send({code:1,msg:'此用户名已被注册'})
        }else{ // 如果没值，不存在
            //保存
            new UserModel({username,type,filter,password:md5(password)}).save((err,user)=>{
                //生成一个cookie(userid:user._id),并交给浏览器保存
                res.cookie('userid',user._id,{maxAge:1000*3600*24*7})
                //返回包含user的json数据
                const data = {username,type,_id:user._id}
                res.send({code:0,data})
            })
        }
    })
    // 3.返回响应数据
})

//登陆路由
router.post('/login',(req,res)=>{
    const {username,password} = req.body
    //根据username和password查询数据库users，如果没有，返回提示错误的信息，如果有，返回登陆成功的信息（包含user）
    UserModel.findOne({username,password:md5(password)},(err,user)=>{
        if(user){ //登陆成功
            //生成一个cookie(userid:user._id),并交给浏览器保存
            res.cookie('userid',user._id,{maxAge:1000*3600*24*7})
            //返回登陆成功的信息(包含user)
            res.send({code:0,data:user})
        }else{ //登陆失败
            res.send({code:1,msg:'用户名或密码不正确！'})
        }
    })
})

module.exports = router;




