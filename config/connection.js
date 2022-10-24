
import mongoose  from "mongoose";
import {MongoURL} from './constant.js'
// import your mongodb url from constant or 
export function db(){
  mongoose.connect(MongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(()=>console.log("mongoose is connected"))
  .catch((err)=>console.log(err.message))
}