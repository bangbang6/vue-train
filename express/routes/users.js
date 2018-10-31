var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/user.js')


//连接数据库

mongoose.connect("mongodb://127.0.0.1:27017/train", {useNewUrlParser:true}, function(err){
  
  　　if(err){
  
  　　　　console.log('Connection Error:' + err)
  
  　　}else{
  
  　　　　console.log('Connection success!') }
  
  })
mongoose.connection.on('connect',function(){
console.log('connect suc')
})
mongoose.connection.on('disconnect',function(){
  console.log('disconnect')
})
mongoose.connection.on('error',function(){
  console.log('connect error')
})
let i = 0
router.post('/register',function(req,res,next){
  let data = req.body
  let user = new User({
    id:''+i,
    username:data.username,
    password:data.password,
    tickets:[]
  })
  user.save(function(err,res1){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      console.log(res1)
      res.json({
        status:'0'
      })
      i++
    }
  })
 
})
router.post('/login',function(req,res,next){
   let data = req.body
   User.findOne({username:data.username,password:data.password},function(err,doc){
     if(err){
       res.json({
         status:'1',
         msg:err.message
       })
     }else{
       if(doc){
        res.cookie('userId',doc.id,{
          path:'/',
          maxAge:1000*60*60
        })
       
        res.json({
          status:'0',
          result:doc.username
        })
       }else{
         res.json({
           status:'1',
            result:'密码错误'
         })
       }
      
     }
   })
})

router.get('/allTickets',function(req,res,next){
  let data = req.query
  User.findOne({username:data.username},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      if(doc){
        
        res.json({
          status:'0',
          result:doc.tickets
        })
      }else{
        res.json({
          status:'1',
          msg:'没该用户'
        })
      }
    }
  })
})
module.exports = router;
