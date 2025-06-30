const express = require('express');
const router = express.Router();
const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const userController = require('../controllers/UsersController');
const { validateRegister, validateLogin } = require('../utils/validator/auth');
const verifyToken = require('../middleware/auth');
const { validateUser } = require('../utils/validator/user');

router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);
router.get('/admin/users', verifyToken, userController.findUser)
router.post('/admin/user', verifyToken, validateUser, userController.createUser);
router.get('/admin/user:id', verifyToken, userController.findUserById);
router.put('/admin/user:id', verifyToken, validateUser, userController.updateUserById);
router.delete('/admin/user:id', verifyToken, userController.deleteUser);

module.exports = router;