const { Schema, model } = require('mongoose')

const timeBlockSchema = new Schema({
    belongsTo: {
        type: Schema.Types.ObjectId,
        ref: 'day'      
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    timeS: {
        type: String,
        required: true
    },
    timeE: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
}, {timestames:  true})

const Timeblock = model('timeblock', timeBlockSchema);

module.exports = Timeblock;