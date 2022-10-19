const express = require('express');
const YourController = require('../controllers/your.controller');

const router = express.Router();

router.get('/', YourController.index);
router.get('/show-data', YourController.showData);
router.get('/add-data', YourController.addData);

module.exports = router;
