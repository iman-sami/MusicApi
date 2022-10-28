import { json } from "express";
import serverError from "../config/serverError.js";
import { catchAsync } from "../middleware/errorHandler.js";
import playlist from "../models/playlist.js";

export const PlaylistController= {

    // create playlist 
  createPlaylist:catchAsync(async (req,res,next)=>{
    const data = req.body
    playlist.create({
        data
    }).then((responce)=>{
        res.json({
            message:"success creating your playlist",
            responce
        })
    }).catch((err)=>{
        return next(new serverError(err.message,404))
    })
  }),

// view playlist
viewPlaylists:catchAsync(async (req,res,next)=>{

    const id = req.params.id

    playlist.findOne({userid:id})
    .exec((err,results)=>{
        if(err) return next(new serverError(err.message,404))

        res.json(results)
    })


}),

// selectedPlaylist
selectedPlaylist:catchAsync(async (req,res,next)=>{
    const id = req.params.id
    playlist.findById({_id:id})
    .populate("music")
    .exec((err,results)=>{
        if (err) return next (new serverError(err.message,404))
        res.json(results)
    })
}),
//delete playlist
deletePlaylist:catchAsync(async (req,res,next)=>{
    const id = req.query.id
    playlist.findByIdAndDelete({_id:id})
    .exec((err,results)=>{
        if (err) return next (new serverError(err.message,404))
        res.json(results)
    })
})
}