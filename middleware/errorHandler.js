
function sendError(err,res){
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err,
        stack:err.stack
    })
}

export function CatchGlobalError(err,req,res,next){
    err.statusCode = err.statusCode || 500;
    err.status = err.status
     sendError(err,res)
}

export function catchAsync(fn){
    return (req,res,next)=> fn(req,res,next).catch(next)
}