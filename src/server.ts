import express, {Express} from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/routes';
import dotenv from 'dotenv' 
import { openDBConnection } from './lib/helpers/open-db-connection';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || '3030';

// set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

openDBConnection();

router(app);

app.listen(port, ()=> {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});