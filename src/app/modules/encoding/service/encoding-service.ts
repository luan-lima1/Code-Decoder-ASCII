async function encodingService(message: string): Promise<any> {
    try {
      const toAscii = () => message.split('').map(char=>char.charCodeAt(0)).join(" ")
      return toAscii();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

export default encodingService;