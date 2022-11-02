import { catchAsync } from "../middleware/errorHandler.js";
import user from "../models/user.js";
import bcrypt from 'bcryptjs'
import serverError from "../config/serverError.js";
import { createToken } from "../config/utils.js";
export const AuthController= {
    // register new user
    register: catchAsync(async (req,res,next)=>{
    
        const data= req.body
        data.password =  await bcrypt.hash(data.password,12)
        const userExisit = user.findOne({email:data.email})
        if(userExisit) return next(new serverError("User Already Exisist!!",404))
        console.log(userExisit)
        await user.create(data)
        .then((responce)=>{
            createToken(responce,res.statusCode,res)
        }).catch((err)=>{
            return next(new serverError(err.message,404))
        })
    }),

    // login user
   login:catchAsync(async (req,res,next)=>{
    const data = req.body
    const email = data.email
    const findUser = user.findOne({email:email})
    if(findUser && (await bcrypt.compare(data.password,findUser.password))){
            createToken(findUser,res.statusCode,res)
    }else{
        return next(new serverError("No user Found Please Register",404))
    }

   })





}