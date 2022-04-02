import { Router } from 'express';
import routerDecoding from './decoding-route';
import routerEncoding from './encoding-route';

const router = Router();

router.use(
  routerEncoding,
  routerDecoding,
);

export default router;