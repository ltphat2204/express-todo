const express = require('express')
const router = express.Router();
const sampleController = require('../controllers/sample');

//@des: sample controller
//@path: /api/
router.get('/', sampleController.get);

module.exports = router;