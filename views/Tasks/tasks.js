const express = require('express')
const router = express.Router();

//Home page
router.get('/', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks`, {
        method: 'GET',
        headers: {
            userid: req.signedCookies.userId
        }
    })
    .then(res => res.json())
    .then(data => {
        res.render('Tasks/index', {title: "Tasks page", data});
    }).catch(err => console.log(err));
});

//Detail page
router.get('/view', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks/${req.query.id}`)
    .then(res => res.json())
    .then(data => {
        res.render('Tasks/view', {title: "Tasks detail", data});
    }).catch(err => console.log(err));
});

//Create page
router.get('/create', (req, res) => {
    res.render('Tasks/create', {title: "Tasks create", userId: req.signedCookies.userId});
});

//Edit page
router.get('/edit', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks/${req.query.id}`)
    .then(res => res.json())
    .then(data => {
        res.render('Tasks/edit', {title: "Task edit", data});
    }).catch(err => console.log(err));
});

//Edit action
router.get('/edit-action', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks/${req.query.id}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req.query)
    })
    .then(response => response.json())
    .then(msg => {
        if (!msg.error){
            res.redirect('/tasks');
        }
    });
});

//Delete page
router.get('/delete', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks/${req.query.id}`)
    .then(res => res.json())
    .then(data => {
        res.render('Tasks/delete', {title: "Tasks delete", data});
    }).catch(err => console.log(err));
});

//Delete action
router.get('/delete-action', (req, res) => {
    fetch(`http://localhost:${process.env.PORT}/api/tasks/${req.query.id}`, {method: "DELETE"})
    .then(response => response.json())
    .then(msg => {
        if (!msg.error){
            res.redirect('/tasks');
        }
    });
});

module.exports = router;