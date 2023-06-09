const model = require('../models/Task');
const ObjectId = require('mongodb').ObjectId;
const controller = {};

controller.get = async (req, res) => {
    try {
        const tasks = await model.find({}).select('-__v');
        res.status(200).send(tasks);
    } catch(err){
        res.status(500).send({"error": err});
    }
};

controller.post = async (req, res) => {
    try {
        const task = new model(req.body);

        await task.save();
        
        res.status(200).send(task);
    } catch(err){
        res.status(500).send({"error": err});
    }
};

controller.put = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(404).send({"error": "ObjectId required"});

        const task = await model.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });
        if (!task) return res.status(404).send({"error": "ObjectId not found"});

        res.status(200).send(task);
    } catch(err){
        res.status(500).send({"error": err});
    }
};

controller.delete = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(404).send({"error": "ObjectId required"});

        const task = await model.findByIdAndRemove(id, req.body);
        if (!task) return res.status(404).send({"error": "ObjectId not found"});

        res.status(200).send({"message": `${id} deleted successfully`});
    } catch(err){
        res.status(500).send({"error": err});
    }
};

module.exports = controller;