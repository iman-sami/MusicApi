import mongoose from "mongoose";
const Schema = mongoose.Schema;

const artist = new Schema({
 
  artistname:{type:String},
  birthdate:{type:Date},
  artistdescription:{type:String},
  artistLink:{type:Array}
})


export default mongoose.model("artist",artist)