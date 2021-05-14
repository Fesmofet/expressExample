const supertest = require('supertest');
const app = require('../index');

exports.request = supertest(app);
