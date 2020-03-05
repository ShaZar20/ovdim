
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new Schema (
    {
        id:String,
        name:String,
        lastName:String,
        unit:String,
        bigUnit:String,
        role:String,
        mail:String,
        phone:String,
        step:String
    }
  );
  module.exports = mongoose.model("users",Users,'users');

