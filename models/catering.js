const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cateringSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: null
    },
    name: { //company name
        type: String,
        required: true
    },
    cuisineType: {
        type: String,
        enum: ['American', 'African', 'Asian Fusion', 'Chinese',
        'French', 'Indian', 'Italian', 'Japanese', 'Korean',
        'Mediterranean', 'Mexican', 'Middle Eastern', 'Southern',
        'Taiwanese', 'Thai', 'Vietnamese', 'Others'],
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

module.exports = mongoose.model('Catering', cateringSchema)