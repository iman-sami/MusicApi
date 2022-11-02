import express  from "express";
import cors from 'cors';
import helmet from 'helmet';
import { db } from "./config/connection.js";
import index from "./routes/index.js";
import { PORT } from "./config/constant.js";
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.get("/",(req,res)=>{
    res.json({message:"hello"})
})
index(app)

db();






app.listen(PORT, () => {
    console.log('App listening on port '+ PORT);
});