const Venue = require('../../models/venue');

module.exports = {
    create,
    index,
    show,
};


async function show (req, res) {
    const venue = await Venue.findById(req.params.id);
    res.json(venue);
}

async function index(req, res) {
    const venues = await Venue.find({});
    res.json(venues);
};

async function create(req, res) {
    try {
        const { name, certification, location, website, capacity, venueType, email,
            phoneNumber, priceTier, businessLogo } = req.body;
        const newVenue = new Venue({
            user: req.user._id,
            name,
            certification,
            location,
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