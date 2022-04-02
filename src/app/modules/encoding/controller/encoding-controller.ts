import { Request, Response } from 'express';
import encodingService from '../service/encoding-service';

class encodingController {
  async store(request: Request, response: Response) {
    const { message } = request.params;

    console.info('encodingController::: Codificando para ASCII a string => ', message);
    try {
      const code = await encodingService(message);
      return response.status(200).json((code));
    } catch (err) {
      console.error('encodingController::: Erro ao tentar codificar', err);
      throw err;
    }
  }
}

export default new encodingController();