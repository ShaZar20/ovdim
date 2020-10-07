'use strict'
const path = require('path');
const express = require('express');
var cors = require('cors');
const API_PORT = process.env.PORT || 3001;
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const Users = require('./models/Users');
const Answers = require('./models/Answers');


const validation = require("./router/validation");
let bodyParser=require('body-parser');

app.use(cors());
app.set('trust proxy', true);

app.use(bodyParser.json())
app.use('/api', router);
app.use("/api/validation", validation);

const dbRoute = require('./config/keys').mongoURI;
mongoose.connect(dbRoute, {
  useNewUrlParser: true ,
   useUnifiedTopology: true,
   useFindAndModify: false
 });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// --------------------------------------
router.post('/getstatus',(req,res)=>{
  let query ={
    id:req.body.id
  }
  Users.findOne(query,(err,data)=>{
    if(err)console.log(err)
    res.send(data)
  })
})


router.post('/setstatus',(req,res)=>{
  let query ={
    id:req.body.id
  }
  Users.findOneAndUpdate(query,{step:req.body.step},(err,data)=>{
    if(err)console.log(err)
    res.send(data)
  })
})

// -------- לטופס הערכת עובדים -----------------
router.post('/getuser',(req,res)=>{
  Users.findById({_id:req.body._id},(err,doc)=>{
    if(err){
      console.log(err)
    }
    res.send(doc)
  })
})

router.post('/getanswersforuser',(req,res)=>{
  Answers.find({about:req.body.name},(err,doc)=>{
    if(err){
      console.log(err)
    }
    res.send(doc)
  })
})

// ------------------- סיום --------------------------

router.post('/getusersby',(req,res)=>{
  console.log(req.body)
  console.log("un")
  Users.find({bigunit:req.body.hanaga},(err,data)=>{
    res.send({data})
  })
})
router.post('/getusersby2',(req,res)=>{
  console.log(req.body)
  Users.find({unit:req.body.hanaga},(err,data)=>{
    res.send({data})
  })
})

router.post('/getusers',(req,res)=>{
  // console.log("boom ")
  Users.find({},(err,data)=>{
    // console.log(data)
    res.send({data})
  })
})

router.post('/getquestions',(req,res)=>{
  console.log(req.body)
  Answers.find({from:req.body.from},(err,data)=>{
    console.log(data)
    res.send(data)
  })
})
router.post('/saveanswers',(req,res)=>{
  console.log("save me")
  console.log(req.body.data.length)
  req.body.data.forEach((x,i)=>{
    let query = {
      from:x.from,
      about:x.about,
      order:x.order,
    }
    Answers.findOneAndUpdate(query,x,{upsert:true},function(err,doc){
      if(err){
        console.log(err)  
      }
      else{
        if(i+1 == req.body.data.length){
          res.send({done:true})
        }
      }
    })
  })
})





router.get('/',(req,res)=>{
    res.send({response:"i am alive"}).status(200);
  })

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(API_PORT,()=>{
    console.log("server is runing on port ",API_PORT)
})