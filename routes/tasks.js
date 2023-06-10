const express = require('express')
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.get('/', tasksController.get);
router.get('/:id', tasksController.getDetail);
router.post('/', tasksController.post);
router.put('/:id', tasksController.put);
router.delete('/:id', tasksController.delete);

module.exports = router;