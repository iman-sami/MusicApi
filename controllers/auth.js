import { catchAsync } from "../middleware/errorHandler.js";
import user from "../models/user.js";
import bcrypt from 'bcryptjs'
import serverError from "../config/serverError.js";
import { createToken } from "../config/utils.js";
import jsonwebtoken from "jsonwebtoken";
import { JWTSECRET } from "../config/constant.js";
export const AuthController= {
    // register new user
    register: catchAsync(async (req,res,next)=>{
    
        const data= req.body
        data.password =  await bcrypt.hash(data.password,12)
         user.findOne({email:data.email},(err,results)=>{
            if(err) return next (new serverError(err.message,404))
            if(results){
                console.log(results)
                return next (new serverError("User already Exist please login!!",404))
            }
             user.create(data)
            .then((responce)=>{
                 
                createToken(responce,res.statusCode,res)
            }).catch((err)=>{
                return next(new serverError(err.message,404))
            })
        })
   
    }),

    // login user
   login:catchAsync(async (req,res,next)=>{
    const data = req.body
    const email = data.email
        user.findOne({email:email}).exec(async (err,results)=>{
                if(err) return next (new serverError(err,404))
                console.log(results.email)
                if(bcrypt.compare(data.password,results.password)){
                    createToken(results,res.statusCode,res)
                }else{
                    return next(new serverError("No user Found Please Register",404))
                }
            })
   }),

   // protect path using jwt
   protect: catchAsync(async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req,headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
       
    }
    if(!token){
        return next (new serverError("Please Login first!",401))

    }
    const decode = await promisify(jsonwebtoken.verify)(token,JWTSECRET);
    const userlogin = user.findById({_id:decode.id})

    if(!userlogin){
        return next(new serverError("session expires",401))
    }
    next()
   })
}