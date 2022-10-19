const express = require('express');
const { StatusCodes: status } = require('http-status-codes');
const { apiResponse } = require('../utils/apiResponse.utils');

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(status.OK).json(
        apiResponse( status.OK, 'OK', 'API Routes was updated.')
    );
});

module.exports = router;
