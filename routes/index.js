import { CatchGlobalError } from "../middleware/errorHandler.js"
import auth from "./auth.js"
import music from "./music.js"
export default (app) =>{

    
    app.use("/auth",auth)

    // app.use("/user")
    app.use("/music",music)

    app.use(CatchGlobalError)
}