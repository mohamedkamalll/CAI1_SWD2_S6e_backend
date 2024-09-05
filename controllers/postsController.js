const Post = require("../model/postModel")

const getPosts =async (req,res,next)=>{
     let posts = [{id:0}]
     res.send(posts)
}

const addPost = async(req,res)=>{
     const {content,userId} = req.body
     console.log(req.body)
     try{
          const newPost = await new Post({
               content:content,
               userId:userId
          })
          await newPost.save()
     }catch(e){
          console.log(e)
     }
}

const deletePost = async(req,res)=>{
     const {id }= req.body
     try{
          const del = await Post.deleteOne({
               userId: id
          })
     }catch(e){
          console.log(e)
     }
}

module.exports = {getPosts,addPost,deletePost} 

