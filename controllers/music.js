import { catchAsync } from "../middleware/errorHandler";
import music from "../models/music.js";
import serverError  from "../config/serverError";
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

}