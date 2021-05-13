const { userModel } = require('../models')
const validators = require('./validators')


exports.createUser = async (req, res, next) => {
  const value = validators.validate(req.body, validators.user.createUserSchema, next)
  if (!value) return;

  const {result , error} = await userModel.createUser(value)
  if (error) return next(error);
  res.send(result).status(200)
}

exports.getUser =async (req, res, next) => {
  const {result , error} = await userModel.findOne({email: req.params.email})
  if (error) return next(error);
  res.json(result).status(200)
}

exports.getUsers =async (req, res, next) => {
  const {result , error} = await userModel.find({})
  if (error) return next(error);
  res.send(result).status(200)
}

exports.updateUserInfo =async (req, res, next) => {
  const value = validators.validate(req.body, validators.user.updateUserSchema, next)
  if (!value) return;

  const {result , error} = await userModel.updateOne({email: req.params.email}, value)
  if (error) return next(error);
  res.send(result).status(200)
}
