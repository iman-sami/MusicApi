import serverError  from "../config/serverError.js";
import { catchAsync } from "../middleware/errorHandler.js";
import user from "../models/user.js";

export const userController = {

    me:catchAsync(async (req,res,next)=>{
        const id = req.params.id
         user.findOne({_id:id})
         .exec((err,results)=>{
            if(err) return next (new serverError(err.message),404)
            res.json(results)
         })

    }),

    update: catchAsync(async (req,res,next)=>{
      const body = req.body
      const id = req.params.id
      user.findByIdAndUpdate({_id:id},body)
      .exec((err,results)=>{
        if(err) return next (new serverError(err.message),404)
        res.json({
            status:"updated"
        })
      })
    }),


    delete:catchAsync(async (req,res,next)=>{
    const id = req.query.id 
    user.findByIdAndDelete({_id:id})
    .exec((err,results)=>{
        if(err) return next (new serverError(err.message),404)
        res.json({
            status:"deleted"
        }) 

    })


    })



}