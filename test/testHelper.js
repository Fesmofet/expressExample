const supertest = require('supertest');
const models = require('../database');
const app = require('../index');

exports.request = supertest(app);

exports.dropDatabase = async () => {
  for (const model in models) {
    await models[model].deleteMany();
  }
};
