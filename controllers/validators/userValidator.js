const Joi = require('@hapi/joi');

const options = { allowUnknown: true, stripUnknown: true };

exports.createUserSchema = Joi.object().keys({
  name: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
}).options(options);

exports.updateUserSchema = Joi.object().keys({
  name: Joi.string(),
  password: Joi.string(),
  avatar: Joi.string(),
}).options(options);
