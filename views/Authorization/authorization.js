const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.redirect('/authorization/login'));

router.get('/login', (req, res) => {
    const error = {};

    if (req.query['error-username']){
        error.username = req.query['error-username'];
    }
    if (req.query['error-password']){
        error.password = req.query['error-password'];
    }

    res.render('Authorization/login', {title: "Login page", error});
});

router.get('/register', (req, res) => {
    const error = {};
    console.log(req.query);
    if (req.query.error-username){
        error.username = req.query.error-username;
    }
    if (req.query.error-password){
        error.password = req.query.error-password;
    }

    res.render('Authorization/register', {title: "Register page", error});
});

router.get('/logout', (req, res) => {
    res.clearCookie('userId');
    res.redirect('/authorization/login');
});

module.exports = router;