const express = require('express')
const router = express.Router();
const controller = require('../controllers/authorization');
const hashPassword = require('../middleware/hashPassword');

router.post('/login', hashPassword, controller.login);
router.post('/register', hashPassword, controller.register);

module.exports = router;