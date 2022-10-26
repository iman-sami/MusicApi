import mongoose from "mongoose";
const Schema = mongoose.Schema;

const album = new Schema({

    albumTitle:{type:String},
    artist:{
        type:Schema.Types.ObjectId,
        ref:"artist"
    },
    genre:{
        type:Schema.Types.ObjectId,
        ref:"genre"
    },
    realesedyear:{type:Date},
    photo:{
        type:Array
    }
})

export default mongoose.model("album",album)