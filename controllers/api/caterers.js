const Caterer = require('../../models/caterer');

module.exports = {
    create,
    index,
    show,
};


async function show (req, res) {
    const caterer = await Caterer.findById(req.params.id);
    res.json(caterer);
}

async function index(req, res) {
    const caterers = await Caterer.find({});
    console.log(req.user, caterers)
    res.json(caterers);
};

async function create(req, res) {
    try {
        const { name, certification, cuisineType, location, website, email,
            phoneNumber, priceTier, businessLogo } = req.body;
        const newCaterer = new Caterer({
            user: req.user._id,
            name,
            certification,
            cuisineType,
            location,
            website,
            email,
            phoneNumber,
            priceTier,
            businessLogo
        });
        await newCaterer.save();
        res.json(newCaterer);
    } catch (err) {
        console.log(err)
        res.json({ message: err.message });
    }
}