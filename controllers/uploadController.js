const { userModel } = require('../models');

exports.uploadFile = async (req, res, next) => {
  const { result, error } = await userModel.findOneAndUpdate({
    email: req.params.email }, { avatar: req.file.filename
  });
  if (error) return next(error);
  res.status(200).send(result);
};
