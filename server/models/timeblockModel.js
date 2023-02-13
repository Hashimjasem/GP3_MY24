const { Schema, model } = require('mongoose')

const timeBlockSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'      
    },
    date_id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

const Timeblock = model('timeblock', timeBlockSchema);

module.exports = Timeblock;