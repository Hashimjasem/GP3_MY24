const { Schema, model } = require('mongoose')

const journalSchema = new Schema({
    owner: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user'
    },
    date_id: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
})

const Journal = model('journal', journalSchema);

module.exports = Journal;