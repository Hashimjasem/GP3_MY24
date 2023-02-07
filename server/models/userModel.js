const { Schema, model } = require('mongoose');
const daySchema = require('./dayModel');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a pasword']
    },
    days: [
        {
            type: Schema.Types.ObjectId,
            ref: 'day'
        }
    ]
});



const User = model('User', userSchema);

module.exports = User;