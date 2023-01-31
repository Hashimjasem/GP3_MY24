const timeblockSchema = require('../models/timeblockModel')
const { Schema, model } = require('mongoose')

const datesSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    when: {
        type: Number,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    timeblocks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'timeblock'
        }
    ]
})

const Date = model('date', datesSchema);

module.exports = Date;