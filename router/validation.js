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
    const from = 'Zofim Ovdim';
    const to = req.body.number;
    const text = 'Your code: ' + req.body.pincode;
    
    nexmo.message.sendSms(from, to, text);   
    res.send({status:0}) 
    // nexmo.verify.request({
    //     number: req.body.number,
    //     brand: 'Nexmo',
    //     code_length: '6'
    //   }, (err, result) => {
    //     if(err ){
    //       console.log(err)
    //     }
    //     else{
    //       console.log(result)
    //       res.send(result)
    //     }
    //   });
})

router.post('/finduser',(req,res)=>{
  let query = {
    phone : req.body.phone,
    id: parseInt(req.body.id)
  }
  console.log(query)
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