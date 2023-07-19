const Router = require('express');
const router = new Router();
const gradController = require('../controller/grad.controller');

router.post('/Add', gradController.AddImg);
router.get('/grad', gradController.GetUser);
router.delete('/grad', gradController.DeleteUser);




module.exports = router;