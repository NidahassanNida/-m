const mongoose = require("mongoose")
const {Schema}=mongoose;

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const collection= new mongoose.model("user",UserSchema);
module.exports=collection;