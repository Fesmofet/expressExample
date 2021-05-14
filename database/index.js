const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
  process.env.NODE_ENV === 'test'
    ? process.env.MONGO_CONNECT
    : 'mongodb://localhost:27017/testDB'
  ,
  {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false,
  },
).then(() => console.log('connection successful!'))
  .catch((error) => console.log(error));

exports.User = require('./schemas/UserSchema');
