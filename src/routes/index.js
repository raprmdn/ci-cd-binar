const express = require('express');
const YourController = require('../controllers/your.controller');

const router = express.Router();

router.get('/', YourController.index);

module.exports = router;
