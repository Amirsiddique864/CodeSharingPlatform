const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/joinRoom',userController.joinRoom);
router.get('/',userController.getRoomName);

module.exports = router;