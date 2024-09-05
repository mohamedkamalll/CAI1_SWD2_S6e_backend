const express = require("express")
 const db = require("./config/config")

const app = express()




//allow frontend to access the back end 
const cors = require('cors');
app.use(cors());
//Start database connection
db()

app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
  })
  

const userRoutes = require('./routes/userRoutes')
const postsRoutes = require("./routes/postsRoutes")
app.use(userRoutes)
app.use(postsRoutes)
app.use((req,res,next)=>{
     console.log("error handler called")
     res.end()
})
app.listen(3004,()=>{
     console.log("server on 3004")
})



// const foo = require('./foo')
// console.log(foo)
// foo.num = 149
// const f = require('./first')
// console.log(f)
// f.f()

// const {m} = require('./first')