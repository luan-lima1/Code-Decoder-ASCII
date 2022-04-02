import encodingService from "../app/modules/encoding/service/encoding-service";
import decodingService from "../app/modules/decoding/service/decoding-service";

const mockTest = "monetizze";
describe('Unit Test', () => {
    it('should return a ascii', async() => {
        const result = await encodingService(mockTest);
        expect(result).toEqual('109 111 110 101 116 105 122 122 101');
    });
})

const mockParam = "109 111 110 101 116 105 122 122 101";
describe('Unit Test', () => {
    it('should return the string', async() => {
        const result = await decodingService(mockParam);
        expect(result).toEqual('monetizze');
    });
})

