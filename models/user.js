var mongoose = require("mongoose");
//var Objectid=mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    username: String,
    password: String,
    //rooms :[{type:Objectid,ref:'Room'}]
  });

  module.exports=mongoose.model("User", userSchema);