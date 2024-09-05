const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name:{
    type:String
  },
  age:Number,
  gender:{
    type:String
  }
})

const User = mongoose.model("UsersTable",userSchema)

module.exports = User