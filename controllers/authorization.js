const model = require('../models/User');
const controller = {};

controller.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await model.findOne({username});
    
    if (!user){
        res.redirect('/authorization/login?error-username=' + encodeURIComponent("Username not found"));
        return;
    }

    if (user.password == password) {
        res.cookie('userId', user._id, {signed: true});
        res.cookie('nickname', user.nickname);
        res.redirect('/');
        return;
    }
    
    res.redirect('/authorization/login?error-password=' + encodeURIComponent("Incorrect password"));
};

controller.register = async (req, res) => {
    try {
        const usernameDuplicated = await model.findOne({username: req.body.username});

        if (usernameDuplicated){
            res.status(500).send({"error": "Username existing"});
            return;
        }

        const user = new model(req.body);

        await user.save();

        res.cookie('userId', user._id, {signed: true});
        res.cookie('nickname', user.nickname);
        res.redirect('/');
    }catch(err){
        res.status(500).send({"error": err});
    }
}; 

module.exports = controller;