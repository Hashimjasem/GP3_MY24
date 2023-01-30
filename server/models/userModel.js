const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    logs: [datesSchema]
}, 
{timestames:  true});

const User = model('user', userSchema);

module.exports = User;