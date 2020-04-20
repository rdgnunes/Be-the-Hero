

const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
       });

    afterAll(async ()=>{
       await connection.destroy();
    });

    it('Criação de uma ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                "name": "TESTE NAME",
                "email": "teste@email.com",
                "whatsapp": "2191100212",
                "city": "Rio de Janeiro",
                "uf": "RJ"
            });
        //console.log(response.body.id);  
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});