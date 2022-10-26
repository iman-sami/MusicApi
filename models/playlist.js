import mongoose from "mongoose"
const Schema = mongoose.Schema;

const playlist = new Schema({

    playlistTitle:{type:String},
    date:{type:Date},
    Songs:{
        type:Array
    }
})

export default mongoose.model("playlist",playlist)