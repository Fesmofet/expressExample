const { User } = require('../database');

exports.createUser = async (data) => {
  try {
    const user = new User(data);
    await user.save();
    return { result: user.toObject() };
  } catch (error) {
    return { error };
  }
};

exports.find = async (filter) => {
  try {
    return { result: await User.find(filter).lean() };
  } catch (error) {
    return { error };
  }
};

exports.findOne = async (filter) => {
  try {
    return { result: await User.findOne(filter).lean() };
  } catch (error) {
    return { error };
  }
};

exports.updateOne = async (filter, updateData) => {
  try {
    return { result: await User.updateOne(filter, updateData).lean() };
  } catch (error) {
    return { error };
  }
};

exports.findOneAndUpdate = async (filter, updateData) => {
  try {
    return { result: await User.findOneAndUpdate(filter, updateData, { new: true }).lean() };
  } catch (error) {
    return { error };
  }
};
