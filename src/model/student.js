const { error } = require("console")
const mongoose = require("mongoose")
const validator = require("validator")
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        require:true,
        unique:[true,"Email present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw error("Email are invalid")
            }

        }

    },
    phone:{
        type:Number,
        minlength:10,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})
const Student = new mongoose.model('Studentdata',studentSchema)
module.exports=Student;