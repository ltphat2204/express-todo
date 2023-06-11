const express = require('express')
const router = express.Router();
const apiRoute = require('./api');
const authorizationMiddleware = require('../middleware/authorization');

router.use('/api', apiRoute);

//Home page
router.get('/', authorizationMiddleware, (req, res) => {
	res.render('index', {title: "Home page", nickname: req.cookies.nickname});
});

//Task page
const taskViewRoute = require('../views/Tasks/tasks');
router.use('/tasks', authorizationMiddleware, taskViewRoute);

//Authorization page
const authorizationViewRoute = require('../views/Authorization/authorization');
const preventReAuthMiddleware = require('../middleware/preventReauth');
router.use('/authorization', preventReAuthMiddleware, authorizationViewRoute);

//Not found page
router.use((req, res) => {
    res.status(404).render('notFound', {title: "Not Found"})
});

module.exports = router;