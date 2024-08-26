const express = require("express")
const app = express()
//allow frontend to access the back end 
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
  })
  
app.get('/',(req,res)=>{
     res.send("Hello")
})

const userRoutes = require('./routes/userRoutes')
app.use(userRoutes)


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