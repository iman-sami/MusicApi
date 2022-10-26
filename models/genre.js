import mongoose from "mongoose";

const Schema = mongoose.Schema;

const genre = new Schema({

    genrename:{type:String,required:true}
})