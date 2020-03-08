
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new Schema (
    {
        id:Number,
        name:String,
        lastname:String,
        unit:String,
        bigUnit:String,
        role:String,
        mail:String,
        phone:String,
        step:String,
        menalYashir:String,
        menoalimYeshirim:Array,
        notniShirot:Array,
        melave:String,
        merakezHanaga:String,
        melaveShevet:String,
        melaveMiktzoey:String,
        deregMelove:Array,
        meloveMerhav:Array,
        meloveMeanhaga:Array
    }
  );
  module.exports = mongoose.model("users",Users,'users');

