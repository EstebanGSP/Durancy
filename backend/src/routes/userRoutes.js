const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController');

router.post('/users', UserController.registerUser);
router.post('/login', UserController.login);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.get('/users', UserController.getAllUsers);

module.exports = router;
