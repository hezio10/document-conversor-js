const Express = require('express');
const router = Express.Router();
const fileController = require('../controllers/fileController');


router.get("/convertToWord", fileController.getWordFile);

module.exports = router;