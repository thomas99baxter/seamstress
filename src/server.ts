import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/routes';

const app: Express = express();
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response)=>{
    res.redirect('/health');
});

router(app);

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});