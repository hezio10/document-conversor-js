const Express = require('express');
const router = Express.Router();
const fileController = require('../controllers/fileController');

router.get("/convertToPDF", fileController.getFile);

module.exports = router;