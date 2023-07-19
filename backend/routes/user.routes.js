const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/user', userController.CreateUser);
router.get('/user', userController.GetUser);
router.delete('/user', userController.DeleteUser);




module.exports = router;