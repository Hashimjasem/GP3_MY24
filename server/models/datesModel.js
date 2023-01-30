const mongoose = require('mongoose')
const timeblockSchema = require('../models/timeblockModel')
const Schema = mongoose.Schema

const datesSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    timeblocks: [timeblockSchema]
}, {timestames:  true})

const Date = model('date', datesSchema);

module.exports = Date;