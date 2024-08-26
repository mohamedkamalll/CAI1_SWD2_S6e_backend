const express = require("express")
const app = express()

let data = [
     {
       id: 8,
       name: "Sara",
       age: 20,
       gender: "female",
     },
     {
       id: Math.floor((Math.random() * 800)),
       name: "Omar",
       age: 20,
       gender: "male",
     },
     {
       id: Math.floor((Math.random() * 800)),
       name: "Ali",
       age: 20,
       gender: "male",
     },
     {
       id: Math.floor((Math.random() * 800)),
       name: "Salma",
       age: 20,
       gender: "female",
     },
     {
       id: Math.floor((Math.random() * 800)),
       name: "Ahmed",
       age: 20,
       gender: "male",
     },
     {
       id: Math.floor((Math.random() * 800)),
       name: "Farah",
       age: 20,
       gender: "female",
     },
   ]

//allow frontend to access the back end 
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use((req,res,next)=>{
     console.log("hello",req.method)
     next()
})
app.get('/',(req,res)=>{
    /*  res.write(`<div>
          <h1>Hello world</h1>
     </div>`)
     console.log("worked")
     res.end() */

     res.send("Hello")
})

app.get('/getUsers',(req,res)=>{
     console.log("Get users called")
     res.json(data)
})

app.post('/addUser',(req,res)=>{
     console.log("Add user called",req.body)
     data.push(req.body)
     res.end()     
})

app.post('/deleteUser',(req,res)=>{
     const {id} = req.body
     const newData = data.filter((user)=> user.id !== id)
     console.log(newData)
     data = newData
     console.log("deleteuser called",req.body,id)
     res.end()
})

app.listen(3004,()=>{
     console.log("server on 3004")
})