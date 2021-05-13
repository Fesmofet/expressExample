const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String},
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel
