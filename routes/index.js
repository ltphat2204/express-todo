const express = require('express')
const router = express.Router();
const apiRoute = require('./api');
const authorizationMiddleware = require('../middleware/authorization');

router.use('/api', apiRoute);

//Home page
router.get('/', authorizationMiddleware, (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks?deadline=${new Date()}`, {
        method: 'GET',
        headers: {
            userid: req.signedCookies.userId
        }
    })
    .then(response => response.json())
    .then(data => {
        res.render('index', {title: "Home page", nickname: req.cookies.nickname, dueToday: data});
    })
});

//Task page
const taskViewRoute = require('../views/Tasks/tasks');
router.use('/tasks', authorizationMiddleware, taskViewRoute);

//Authorization page
const authorizationViewRoute = require('../views/Authorization/authorization');
router.use('/authorization', authorizationViewRoute);

//Not found page
router.use((req, res) => {
    res.status(404).render('notFound', {title: "Not Found"})
});

module.exports = router;