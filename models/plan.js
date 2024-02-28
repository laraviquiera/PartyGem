const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    services: {
        type:[String]
    },
    invitationLink: String,
    notes: String
})

module.exports = mongoose.model('Plan', planSchema)