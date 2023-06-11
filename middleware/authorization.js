const userModel = require('../models/User');

module.exports = async (req, res, next) => {
    if (!req.signedCookies.userId || !req.cookies.nickname){
        res.redirect('/authorization/login');
        return;
    }

    const isRealUser = await userModel.findById(req.signedCookies.userId);

    if (isRealUser) {
        res.cookie('nickname', isRealUser.nickname);
        next();
    }
    else {
        res.clearCookies('userId');
        res.redirect('/authorization/login');
    }
};