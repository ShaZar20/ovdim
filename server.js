'use strict'
const path = require('path');
const express = require('express');
var cors = require('cors');
const API_PORT = process.env.PORT || 3001;
const router = express.Router();
const app = express();

const validation = require("./router/validation");
let bodyParser=require('body-parser');

app.use(cors());
app.set('trust proxy', true);

app.use(bodyParser.json())
app.use('/api', router);
app.use("/api/validation", validation);



router.get('/',(req,res)=>{
    res.send({response:"i am alive"}).status(200);
  })

app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, 'build')));
// Handle React routing, return all requests to React app
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/public/index.html'));
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(API_PORT,()=>{
    console.log("server is runing on port ",API_PORT)
})