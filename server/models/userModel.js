const { Schema, model } = require('mongoose');
const daySchema = require('./dayModel');
bcrypt = require('bcryptjs');
const saltRounds = 10; 

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

// hash user password before saving into database
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

const User = model('user', userSchema);

module.exports = User;