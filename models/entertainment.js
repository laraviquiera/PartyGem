const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entertainmentSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: null
    },
    name: { //company name
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Clowns & Magicians','Dancers',
        'Face Painting', 'Live Bands & DJs',
        'Mascots & Princess Characters', 'Photo Booths'],
        required: true,
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

module.exports = mongoose.model('Entertainment', entertainmentSchema)