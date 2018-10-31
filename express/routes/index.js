var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/user.js')

/* GET home page. */

router.post('/buy',function(req,res,next){
   let data = req.body
   User.findOne({username:data.username},function(err,doc){
     if(err){
       res.json({
         status:'1',
         msg:err.message
       })
     }else{
       if(doc){
           doc.tickets.push(data.ticket)
           doc.save(function(err){
             if(err){
               res.json({
                 status:'1',
                 msg:err.message
               })
             }else{
              res.json({
                status:'0',
                result:'suc'
              })
             }
           })
       }else{
        res.json({
          status:'1',
          msg:'没找到用户'
        })
       }
     }
   })
})
//退票
router.post('/reserve',function(req,res,next){
   let data = req.body
   User.findOne({username:data.username},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      if(doc){
        console.log(doc)
      let index =  doc.tickets.findIndex(item=>{
         return item.tId == data.ticket.tId
       })
       console.log('index',index)
       if(index > -1){
         doc.tickets.splice(index,1)
         console.log(doc.tickets)
       }
       doc.save(function(err){
        if(err){
          res.json({
            status:'1',
            msg:err.message
          })
        }else{
         res.json({
           status:'0',
           result:'suc'
         })
        }
      })
    }else{
     res.json({
       status:'1',
       msg:'没找到用户'
     })
    }
    }
   })
   
})
module.exports = router;
