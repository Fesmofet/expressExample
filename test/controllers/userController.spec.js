const faker = require('faker');
const { request } = require('../testHelper');
const { PATH } = require('../../constants/routesData');

jest.mock('../../models/userModel', () => ({ createUser: jest.fn().mockImplementation(() => ({ result: true })) }));

describe('Check userController', () => {
  test('should return 200', async () => {
    const response = await request
      .post(`${PATH.USERS}`)
      .send({
        email: faker.random.word(),
        password: faker.random.word(20),
      });
    expect(response.status).toBe(200);
  });

  test('should return 422', async () => {
    const responseWithoutEmail = await request
      .post(`${PATH.USERS}`)
      .send({ password: faker.random.word(20) });
    const responseWithoutPass = await request
      .post(`${PATH.USERS}`)
      .send({ email: faker.random.word(20) });

    expect(responseWithoutEmail.status).toBe(422);
    expect(responseWithoutPass.status).toBe(422);
  });
});
