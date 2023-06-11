const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true,
        trim: true,
        minLength: 1,
        maxLength: 32
    },
    description: {
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 120
    },
    status: {
        type: String,
        enum: ["To do", "In progress", "Done"],
        index: true,
        default: "To do"
    },
    deadline: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
              const startOfDay = new Date(value.getFullYear(), value.getMonth(), value.getDate());
              return value >= startOfDay;
            },
            message: 'Deadline must be set to the start of the day or later.'
        }
    },
    user: {
        type: mongoose.ObjectId,
        required: true,
        ref: 'user'
    }
})

module.exports = mongoose.model('tasks', TaskSchema);