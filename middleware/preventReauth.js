module.exports = async (req, res, next) => {
    if (req.signedCookies.userId && req.cookies.nickname){
        res.redirect('/');
    } else next();
};