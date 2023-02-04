const { Schema, model } = require('mongoose');
const daySchema = require('./dayModel');
bcrypt = require('bcrypt');
const saltRounds = 10; 

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

// hash user password before saving into database
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

const User = model('user', userSchema);

module.exports = User;