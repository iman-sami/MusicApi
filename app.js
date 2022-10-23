import express  from "express";
import cors from 'cors';
import helmet from 'helmet';
import { db } from "./config/connection";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
db();






app.listen(3000, () => {
    console.log('App listening on port 3000!');
});