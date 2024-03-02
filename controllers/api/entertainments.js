const Entertainment = require('../../models/entertainment');

module.exports = {
    create,
    index,
    show,
};


async function show (req, res) {
    const entertainment = await Entertainment.findById(req.params.id);
    res.json(entertainment);
}

async function index(req, res) {
    const entertainments = await Entertainment.find({user: req.user._id});
    res.json(entertainments);
};

async function create(req, res) {
    try {
        const { name, certification, entertainmentType, location, website, email,
            phoneNumber, priceTier, businessLogo } = req.body;
        const newEntertainment = new Entertainment({
            user: req.user._id,
            name,
            certification,
            entertainmentType,
            location,
            website,
            email,
            phoneNumber,
            priceTier,
            businessLogo
        });
        await newEntertainment.save();
        res.json(newEntertainment);
    } catch (err) {
        console.log(err)
        res.json({ message: err.message });
    }
}