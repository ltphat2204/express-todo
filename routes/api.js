const express = require('express')
const router = express.Router();

//Parser request body
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//@path: /api/tasks
const tasksRoute = require('./tasks');
router.use('/tasks', tasksRoute);

//@path: /api/authorization
const authorizationRoute = require('./authorization');
router.use('/authorization', authorizationRoute);

module.exports = router;