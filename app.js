import express  from "express";
import cors from 'cors';
import helmet from 'helmet';


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());







app.listen(3000, () => {
    console.log('App listening on port 3000!');
});