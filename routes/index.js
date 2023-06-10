const express = require('express')
const router = express.Router();
const apiRoute = require('./api');
const taskViewRoute = require('../views/Tasks/tasks');

router.use('/api', apiRoute);

//Home page
router.get('/', (req, res) => {
	res.render('index', {title: "Home page"});
});

//Task page
router.use('/tasks', taskViewRoute);

//Not found page
router.use((req, res) => {
    res.status(404).render('notFound', {title: "Not Found"})
});

module.exports = router;