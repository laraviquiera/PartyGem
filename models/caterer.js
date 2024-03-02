const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catererSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: null
    },
    name: { //company name
        type: String,
        required: true
    },
    certification: {
        type: String,
        enum: ['Minority-Owned', 'Women-Owned','Black-Owned',
        'Veteran-Owned', 'Service Disabled Veteran (SDV)', 'LGBTQ-Owned'],
        required: true
    },
    cuisineType: {
        type: String,
        enum: ['American', 'African', 'Asian Fusion', 'Chinese', 'Filipino',
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
            zipcode: Number
        },
        required: true
    },
    website: String,
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

module.exports = mongoose.model('Caterer', catererSchema)