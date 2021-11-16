var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    username: String,
    password: String,
  });

  module.exports=mongoose.model("User", userSchema);