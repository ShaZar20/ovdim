'use-strict'
const express = require('express')
const router = express.Router()
const Nexmo = require('nexmo');
const mongoose = require('mongoose');
const Users = require('../models/Users');

mongoose.set('useFindAndModify', false);
const nexmo = new Nexmo({
    apiKey: '8691da7f',
    apiSecret: 'FBT1qvCHYI7vqcuP',
  });

router.post('/',(req,res)=>{
    console.log(req.body)
    // let x = req.body.number
    
    // send message
    // return the nexmo request id
    nexmo.verify.request({
        number: req.body.number,
        brand: 'Nexmo',
        code_length: '6'
      }, (err, result) => {
        if(err ){
          console.log(err)
        }
        else{
          console.log(err)
          res.send(result)
        }
      });
})

router.post('/finduser',(req,res)=>{
  let query = {
    phone : req.body.phone,
    id: req.body.id
  }

  Users.findOne(query,(err,data)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(data)
      if (data == null){
        res.send({IsUser:false})
      }
      else{
        res.send({data,IsUser:true})
      } 
    }
  })
})
router.post('/check',(req,res)=>{
  console.log(req.body.code)
    nexmo.verify.check({
      request_id: req.body.request,
      code: req.body.code
    }, (err, result) => {
      console.log(err ? err : result)
    });
    res.send({damn:false})
})

module.exports = router