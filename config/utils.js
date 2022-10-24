import {JWTEXPIRE,JWTSECRET} from "../config/constant.js"

import Jwt  from "jsonwebtoken";

export const signToken = (id)=>{
 return Jwt.sign(id,JWTSECRET,{
    expiresIn:JWTEXPIRE
 })
}
export const createToken = (user,statusCode,res)=>{
    const token = signToken(user._id)
    const id = user._id

    const cookieOptions = {
        expires:new Date(Date.now() + 24 *60 *60*1000),
        httpOnly:true
    }
    return res.status(statusCode).json({
        status:statusCode,
        message:"success",
        id:id,
        token:token
    })
}