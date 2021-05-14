const _ = require('lodash');
const { userModel } = require('../../models');
const { dropDatabase } = require('../testHelper');
const userFactory = require('../factory/UserFactory');

describe('Check userModel', () => {
  beforeEach(async () => {
    await dropDatabase();
  });
  describe('Check create user', () => {
    test('test create user', async () => {
      const user = await userFactory.Create({ onlyData: true });
      const { result, error } = await userModel.createUser(user);

      expect(result).toBeDefined();
      expect(error).toBeUndefined();
      expect(user).toEqual(_.omit(result, ['__v', '_id']));
    });

    test('test create user undefined data', async () => {
      const { result, error } = await userModel.createUser();

      expect(result).toBeUndefined();
      expect(error).toBeDefined();
    });
  });

  describe('Check findOne user', () => {
    let email, user;
    beforeEach(async () => {
      user = await userFactory.Create();
      ({ email } = user);
      for (let i = 0; i < _.random(2, 8); i++) {
        await userFactory.Create();
      }
    });

    test('should find user by email', async () => {
      const { result, error } = await userModel.findOne({ email });

      expect(result).toBeDefined();
      expect(error).toBeUndefined();
      expect(user).toEqual(result);
    });
  });
});
