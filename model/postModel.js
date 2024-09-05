const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
     content :{
          type:String,
          required:true,
     },
     createdAt:{
          type:Date,
          default: Date.now()
     }
     ,userId:{
          type:Number
     }
},{timestamps:true})

const Post = mongoose.model("Post",postSchema)
module.exports = Post