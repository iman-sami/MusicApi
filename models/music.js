import mongoose from "mongoose";
const Schema = mongoose.Schema;

const music = new Schema({
    title:{type:String,required:true},
    trackno:{type:String},
    duration:{type:String},
    lyrics:{type:String},
    song:{type:String},
    genre:{
        type:Schema.Types.ObjectId,
        ref:"Genre"
    },
    album:{
        type:Schema.Types.ObjectId,
        ref:"Album"
     } 
})
export default mongoose.model("music",music)