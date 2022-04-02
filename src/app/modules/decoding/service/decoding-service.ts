import convertAsciiToString from "../../../../Utils/convertASCIItoText";

async function decodingService(ascii: string): Promise<string> {
    try {
      return convertAsciiToString(ascii);
      } catch (err) {
      throw err;
     }
  }

export default decodingService;
