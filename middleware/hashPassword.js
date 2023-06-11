const crypto = require('crypto');

module.exports = (req, res, next) => {
    const hash = crypto.createHash('sha256');
    hash.update(req.body.password);
    req.body.password = hash.digest('hex');
    next();
};