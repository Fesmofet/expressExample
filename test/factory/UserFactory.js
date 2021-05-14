const faker = require('faker');
const { userModel } = require('../../models');

exports.Create = async ({
  name, email, password, avatar, onlyData,
} = {}) => {
  const data = {
    name: name || faker.random.word(),
    email: email || faker.random.word(),
    password: password || faker.random.word(),
    avatar: avatar || faker.random.word(),
  };

  if (onlyData) return data;

  const { result } = await userModel.createUser(data);
  return result;
};
