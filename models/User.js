const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 32
    },
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true,
        minLength: 1,
        maxLength: 16
    },
    password: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', TaskSchema);