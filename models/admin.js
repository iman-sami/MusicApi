import mongoose from "mongoose";
const Schema = mongoose.Schema;

const admin = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    role:{
        type:String,
        enum:['admin','marketing','artist','test'],
        default:'test'
        }
})

export default mongoose.model("admin",admin)