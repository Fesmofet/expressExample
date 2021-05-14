const { Router } = require('express');
const userController = require('../controllers/userController');
const uploadController = require('../controllers/uploadController');
const uploadHelper = require('../helpers/uploadHelper');
const { PATH } = require('../constants/routesData');

const router = Router();
// region Users
router.route(`${PATH.USERS}`)
  .get(userController.getUsers)
  .post(userController.createUser);
router.route('/user/:email')
  .get(userController.getUser)
  .patch(userController.updateUserInfo);
// endregion

// region upLoad
router.route('/avatarUpload/:email')
  .post(uploadHelper.upload.single('file'), uploadController.uploadFile);
// endregion

module.exports = { router };
