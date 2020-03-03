
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new Schema (
    {
        name:String,
        phone:String,
        id:String,
        role:String
    }
  );
  module.exports = mongoose.model("users",Users,'users');

