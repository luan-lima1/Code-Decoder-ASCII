import { Router } from 'express';
import decodingController from '../app/modules/decoding/controller/decoding-controller';

const routerDecoding = Router();

routerDecoding.get('/decoding', decodingController.decode);

export default routerDecoding;