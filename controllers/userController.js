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

const getUsers = (req,res)=>{
     // res.redirect("https://hello")
      console.log("Get users called")
         res.json(data)
    }

const addUser = (req,res)=>{
     console.log("Add user called",req.body)
     data.push(req.body)
     res.end()     
}

const deleteUser = (req,res)=>{
     const {id} = req.body
     const newData = data.filter((user)=> user.id !== id)
     console.log(newData)
     data = newData
     console.log("deleteuser called",req.body,id)
     res.end()
}
module.exports = {getUsers,addUser,deleteUser}