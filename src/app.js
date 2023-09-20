const express = require("express")
require("./db/conn")
const Student = require("./model/student")
const app = express()
const port = process.env.PORT||3000
app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("hello guys...")
// })

 
app.post("/student",(req,res)=>{
    const user = new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err)
    })

})
app.listen(port,()=>{
    console.log(`listing port number is ${port}` )
})