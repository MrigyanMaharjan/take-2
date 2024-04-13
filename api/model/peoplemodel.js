import mongoose from "mongoose";

const Peopleschema=new mongoose.Schema({
    Item:{
        type:String,
        required:true,
        unique:false,
    },
    description:{
        type:String,
        required:true,
        unique:false,
    },
    likes:{
        type:Number,
        required:false,
        unique:false,
    },
    liked:{
        type:Boolean,
        required:false,
        unique:false
    }
} , {timestamps:true})

const People= mongoose.model('People',Peopleschema);

export default People;