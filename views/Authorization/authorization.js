const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.redirect('/authorization/login'));

router.get('/login', (req, res) => {
    res.render('Authorization/login', {title: "Login page"});
});

router.get('/register', (req, res) => {
    res.render('Authorization/register', {title: "Register page"});
});

router.get('/logout', (req, res) => {
    res.clearCookie('userId');
    res.redirect('/authorization/login');
});

module.exports = router;