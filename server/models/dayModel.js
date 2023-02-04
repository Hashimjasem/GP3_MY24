const timeblockSchema = require('./timeblockModel')
const { Schema, model } = require('mongoose')

const daySchema = new Schema({
    owner: {
            type: Schema.Types.ObjectId,
            ref: 'user'
    },
    date: {
        type: String,
        required: false
    },
    date_id: {
        type: String,
        required: false
    },
    journal: {
        type: String,
        required: false
    },
    timeblocks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'timeblock'
        }
    ]
})

const Day = model('day', daySchema);

module.exports = Day;