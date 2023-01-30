const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timeBlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    TimeS: {
        type: Date,
        required: true
    },
    TimeE: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
}, {timestames:  true})

const Timeblock = model('timeblock', timeBlockSchema);

module.exports = Timeblock;