import express from 'express';
import "dotenv/config"
import cors from "cors";
import log from './logger';
import connect from "./db/connect";
import routes from "./routes";

const port = parseInt(process.env.PORT as string) as number;
const host = process.env.HOST as string;

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(process.env.PORT || 1337, () => {
    log.info(`Server running at http://${host}:${port}`);
    connect();

    routes(app);
})
