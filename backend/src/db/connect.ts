import mongoose from 'mongoose';
import "dotenv/config"
import log from '../logger';

function connect() {
    const dbUri =  process.env.DB_URI as string;
    return mongoose
        .connect(dbUri)
        .then(() => {
            log.info("Database Connected");
        })
        .catch((error) => {
            log.error("db error", error);
            process.exit(1);
        })
}

export default connect;
