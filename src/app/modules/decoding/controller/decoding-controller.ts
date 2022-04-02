import { Request, Response } from 'express';
import decodingService from '../service/decoding-service';

class decodingController {
  async decode(request: Request, response: Response) {
    const { ascii } = request.body;

    console.info('decodingController::: Decodificando de ASCII o valor =>', ascii);
    try {
      const decoding = await decodingService(ascii);
      return response.status(200).json((decoding));
    } catch (err) {
      console.error('decodingController::: Erro ao tentar decodificar', err);
      throw err;
    }
  }
}

export default new decodingController();