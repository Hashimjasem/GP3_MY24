const { Schema, model } = require('mongoose')
const daySchema = require('./dayModel')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    days: [
        {
            type: Schema.Types.ObjectId,
            ref: 'day'
        }
    ]
});

const User = model('user', userSchema);

module.exports = User;