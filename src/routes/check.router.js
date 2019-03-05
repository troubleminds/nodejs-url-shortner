const express = require('express');

const router = express.Router();

const controller = require('../controllers/check.controller');

router.route('/:id').get(controller.checkID);

module.exports = router;