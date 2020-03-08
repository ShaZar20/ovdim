

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Answers = new Schema (
    {
        from:String,
        about:String,
        subject:String,
        question:String,
        content:String,
        type:String,
        order:Number
    }
  );
  module.exports = mongoose.model("answers",Answers,'answers');

