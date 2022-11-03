import { catchAsync } from "../middleware/errorHandler.js";
import music from "../models/music.js";
import album from "../models/album.js";
import artist from "../models/artist.js";
import serverError  from "../config/serverError.js";
import { json } from "express";
export const MusicController = {
    // all music
    allMusics: catchAsync(async (req,res,next)=>{
        music.find()
        .populate("album")
        .populate("genre")
        .exec((err,results)=>{
            if (err) return next(new serverError(err.message,404))
            res.json(results)
        })
    }),
    // selected music
    selectedMusic:catchAsync(async(req,res,next)=>{
        const id = req.params.id
        music.findOne({_id:id})
        .populate("album")
        .populate("genre")
        .exec((err,results)=>{
            if (err) return next(new serverError(err.message,404))
            res.json(results)
        })
    }),

    // search music 
    searchMusic:catchAsync(async (req,res,next)=>{
        const musicsearch = req.query.musictitle
        music.findOne({title:musicsearch})
        .populate("album")
        .populate("genre")
        .exec((err,results)=>{
            if(err) return next(new serverError(err.message,404))
            res.json(results)
        })
    }),
    // upload music
    uploadMusic:catchAsync(async (req,res,next)=>{
        const data = req.body
        music.insertMany([
            data
        ])
        .then((responce)=>{
            res.json({
                message:"musics uploaded",
                responce
            })
        }).catch((err)=>{
            return next(new serverError(err.message),404)
        })
    }),

    // selected album 

    selectedAlbum:{



    },

    // selected artist

    selectedArtist:{

    },

    // all artists

    artists:{



    },

   // selected artist albums
    selectedArtistAlbums:{

        
    }

}