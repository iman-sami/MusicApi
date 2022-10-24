import { CatchGlobalError } from "../middleware/errorHandler.js"

export default (app) =>{
    app.use("/auth")
    app.use("/user")
    app.use("/music")
    app.use(CatchGlobalError)
}