import mongoose from "mongoose";

const Peopleschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
    },
    image:{
        type:String,
        required:true,
        unique:false
    },
    description:{
        type:String,
        required:false,
        unique:false,
    }

} , {timestamps:true})

const People= mongoose.model('People',Peopleschema);

export default People;