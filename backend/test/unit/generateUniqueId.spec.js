const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('Testa se o ID da ONG é unico', () =>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});