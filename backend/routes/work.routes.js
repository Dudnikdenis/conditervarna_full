const Router = require('express');
const router = new Router();
const gradController = require('../controller/grad.controller');
const workController = require('../controller/work.controller');

router.post('/work', gradController.AddImg);
router.get('/work', workController.GetWork);
router.delete('/work', gradController.DeleteUser);




module.exports = router;