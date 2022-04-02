import express from 'express';
import router from './routes/routes-index';


const app = express();

app.use(express.json());

app.use('/v1', router);

export default app;