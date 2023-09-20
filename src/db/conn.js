const mongoose = require("mongoose")
const mongoURI = 'mongodb://127.0.0.1:27017/employee';

mongoose.connect(mongoURI).then(()=>{
    console.log("connection is sucessful")
}).catch((err)=>{console.log(err)})