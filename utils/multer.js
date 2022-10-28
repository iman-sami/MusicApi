import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination:((req,file,cb)=>{
        let pathname = req.query.pathname
        const __dirname = path.resolver()
        cb(null,path.join(__dirname+`/public/${pathname}`))
    }),
    filename:((req,file,cb)=>{
        const uniqueSuffix = Date.now()+"_"+Math.round(Math.random()+1e9)
        cb(null,file.fieldname+"_"+uniqueSuffix)
    })
})

const upload = multer({storage:storage})
export default upload