const timeblockSchema = require('../models/timeblockModel')
const { Schema, model } = require('mongoose')

const datesSchema = new Schema({
    date: {
        type: String,
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
}, {timestames:  true})

const Date = model('date', datesSchema);

module.exports = Date;