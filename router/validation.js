'use-strict'
const express = require('express')
const router = express.Router()
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '8691da7f',
    apiSecret: 'FBT1qvCHYI7vqcuP',
  });

router.post('/',(req,res)=>{
    console.log(req.body)
    // go to db 
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
          res.send(result)
        }
      });
})

router.post('/check',(req,res)=>{
    res.send({damn:false})
})

module.exports = router