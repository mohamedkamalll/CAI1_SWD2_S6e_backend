const mongoose = require("mongoose")

const connectToDb = async ()=>{
     try {
          mongoose.connect("mongodb://localhost:27017",{
          dbName:"firstProject",
          }).then(()=>{
          console.log("db connected")
          })
     } catch (error) {
          (error)=>{
               console.log(e)
               }
     }
}


module.exports = connectToDb