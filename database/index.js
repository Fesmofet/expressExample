const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
  process.env.MONGO_CONNECT,
  {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false,
  },
).then(() => console.log('connection successful!'))
  .catch((error) => console.log(error));

exports.User = require('./schemas/UserSchema');
