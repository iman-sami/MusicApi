import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile:{type:String,default:'null'}
})

export default mongoose.model("User",user);