const Venue = require('../../models/venue');

module.exports = {
    create,
    index,
    show,
};


async function show (req, res) {
    const venue = await Vanue.findById(req.params.id);
    res.json(venue);
}

async function index(req, res) {
    const venues = await Venue.find({user: req.user._id});
    res.json(venues);
};

async function create(req, res) {
    try {
        const { name, location, certification, website, capacity, venueType, email,
            phoneNumber, priceTier, businessLogo } = req.body;
        const newVenue = new Venue({
            user: req.user._id,
            name,
            location,
            certification,
            website,
            capacity,
            venueType,
            email,
            phoneNumber,
            priceTier,
            businessLogo
        });
        await newVenue.save();
        res.json(newVenue);
    } catch (err) {
        console.log(err)
        res.json({ message: err.message });
    }
}