import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    username:{type:String,required:true,}
})