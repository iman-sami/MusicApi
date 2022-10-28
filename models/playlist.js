import mongoose from "mongoose"
const Schema = mongoose.Schema;

const playlist = new Schema({

    playlistTitle:{type:String},
    date:{type:Date},
    Songs:[{
        type:Schema.Types.ObjectId,
        ref:"music"
    }],
    userid:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
})

export default mongoose.model("playlist",playlist)