const app = require('../src/app');
const request = require('supertest');

describe("Test API", () => {

    test('dummy', async () => {

        expect(200).toBe(200)
    })

    test('Makers : it should respond with make', () => {

        const response = request(app)
        .get('/v1/carSpecs/makes')
        .expect('Content-Type', /json/)
        .expect(200);
    })

    test('Models : it should respond with 200 success',  () => {

        const response =  request(app)
        .get('/v1/carSpecs/models/5')
        .expect('Content-Type', /json/)
        .expect(200);

    })

    
    test('Competitors : it should respond with 200 success', () => {

        const response = request(app)
        .get('/v1/carSpecs/competitors/6954')
        .expect('Content-Type', /json/)
        .expect(200);
    })

})