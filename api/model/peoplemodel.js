import mongoose from "mongoose";

const Peopleschema=new mongoose.Schema({
    confession:{
        type:String,
        required:true,
        unique:false,
    }
} , {timestamps:true})

const People= mongoose.model('People',Peopleschema);

export default People;