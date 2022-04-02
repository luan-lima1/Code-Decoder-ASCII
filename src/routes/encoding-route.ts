import { Router } from 'express';
import encodingController from '../app/modules/encoding/controller/encoding-controller';

const routerEncoding = Router();

routerEncoding.get('/encoding/:message', encodingController.store);

export default routerEncoding;