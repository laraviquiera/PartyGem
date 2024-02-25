const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: null
    },
    name: { //company name
        type: String,
        required: true
    },
    location: {
        type: {
            address: String,
            city: String,
            state: String,
            country: String
        },
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    venueType: {
        type: String,
        enum: ['indoor', 'outdoor', 'both']
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    priceTier: { //$-$$$
        type: String,
        required: true
    },
    businessLogo: String
})

module.exports = mongoose.model('Venue', venueSchema)